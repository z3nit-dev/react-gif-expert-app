import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => { 
    test('should retornar arreglo de gifs', async() => { 
        const gifs = await getGifs('Harry Potter')
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
     })
 })