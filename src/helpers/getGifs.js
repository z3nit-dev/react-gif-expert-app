//Peticion http a giphy
export const getGifs = async( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gKGxF0tfN4mkdzMt8hrWDGrEKlNqaVTc&q=${category}&limit=10`
    const res = await fetch(url)
    const { data } = await res.json()
    const gifs = data.map((gif)=>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    
    return gifs
}