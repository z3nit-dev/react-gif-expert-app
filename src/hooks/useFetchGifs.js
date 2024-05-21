import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const listGifs = async()=>{
        const gifs = await getGifs(category)
        setImages(gifs)
        setIsLoading(false)
    }

    useEffect(()=>{
        listGifs()
    },[])


  return {
    images,
    isLoading
  }
}
