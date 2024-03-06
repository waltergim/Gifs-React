import { useEffect, useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp = () => {

    const [categirues, setCategirues] = useState(['One Punch'])




    const onAddCategory = (newCategory) => {

        if (categirues.includes(newCategory)) return
        setCategirues([newCategory, ...categirues])
    }



    return (
        <>
            <h1>GifEXpertApp</h1>

            <AddCategory


                onNewCategory={onAddCategory}

            />


            {categirues.map((categirues) =>
            (
                <GifGrid key={categirues} categirues={categirues} />
            ))
            }

        </>
    )
}
