import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)

    }

    const onSubmit = (e) => {
        e.preventDefault()


        if (inputValue.trim().length <= 1) return


        onNewCategory(inputValue.trim())

        setInputValue('')
    }


    return (
        <>


            <h4>AddCategory</h4>


            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Buscar gifs" onChange={onInputChange} value={inputValue} />
            </form>

        </>
    )
}
