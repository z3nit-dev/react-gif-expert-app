import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prueba GifItem module', () => { 
    const url = 'https://google.es/'
    const title = 'Google'
    const moduleGifItem = <GifItem url={url} title={title}/>
    
    test('should Snapshot', () => { 
        const { container } = render(moduleGifItem)
        expect(container).toMatchSnapshot()
    })
    
    test('should mostrar la imagen con la URL y ALT indicado', () => { 
        render(moduleGifItem)
        
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('should mostrar el titulo en el parrafo', () => { 
        render(moduleGifItem)
        expect(screen.getByText(title)).toBeTruthy()
     })
 })