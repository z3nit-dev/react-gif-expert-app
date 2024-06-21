import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

const category = 'One Punch'

describe('Pruebas en GifGrid', () => { 

    useFetchGifs.mockReturnValue({
        images:[],
        isLoading: true
    })


    test('should mostrar el loading inicialmente', () => { 
        render(<GifGrid category={ category } />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText( category ))
     })

    test('should mostrar items cuando se cargan las imágenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id:'abc',
                title: 'Prueba1',
                url: 'prueba1.com'
            },
            {
                id:'bcd',
                title: 'Prueba2',
                url: 'prueba2.com'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)
        expect(screen.getAllByRole('img').length).toBe(2)
     })
 })