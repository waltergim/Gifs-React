import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFeachtGifs = (categirues) => {


    const [image, setImage] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const newImage = async () => {
        const newImg = await getGifs(categirues)
        setImage(newImg)
        setIsLoading(false)
    }


    useEffect(() => {

        newImage()

    }, [])

    return {
        image,
        isLoading
    }

}
