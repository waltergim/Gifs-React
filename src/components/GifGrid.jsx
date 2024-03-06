import { useEffect, useState } from "react"
// import { getGifs } from "../helpers/getGifs"
import { GifGridItem } from "./GifGridItem"
import { useFeachtGifs } from "../hooks/useFeachtGifs"


export function GifGrid({ categirues }) {

    const { image, isLoading } = useFeachtGifs(categirues)




    return (
        <>
            <h3>{categirues}</h3>
            {
                isLoading && (<h2>cargando.....</h2 >)

            }

            <div className="card-grid">
                {
                    image.map((img) => (
                        <GifGridItem

                            key={img.id}
                            {
                            ...img
                            }

                        />
                    ))
                }
            </div>
        </>
    )
}

