import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategorie })=>{
    const [ inputValue, setInputValue ] = useState('')
    
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if (inputValue.trim().length <= 1) return;
        onNewCategorie(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar categorias" value={inputValue} onChange={onInputChange}/>
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategorie: PropTypes.func
}