import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//cuestom hook

export const useFechtGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setisLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [category])
  return {
    images,
    isLoading,
  }
}


