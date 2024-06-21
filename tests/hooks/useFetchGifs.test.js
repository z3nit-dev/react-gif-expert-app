import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    test('Debe de retornar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch') )
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy() //Es igual a expect(isLoading).toBe(true)
        
    })

    test('debe de retornar un arreglo de imagenes y isLoading a false', async() => { 
        const { result } = renderHook( () => useFetchGifs('One Punch') )
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {timeout: 2000} // con el timeout default (1000) no funciona
        )
        
        const { images, isLoading } = result.current
        expect(images.length).not.toBe(0)
        expect(isLoading).toBeFalsy() //Es igual a expect(isLoading).toBe(true)
     })
 })