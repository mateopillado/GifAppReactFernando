import { useState } from "react"


export const AddCategory = ( {onNewCategory} ) => {
  
    const [inputValue, setInputValue] = useState('')
  
    const onInputChance = (event) => {
        setInputValue( event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        //para no cargar en categorias un valor vacio, el retur hace que salga de la funcion
        if (inputValue.trim().length <= 1) return
        //cargar el valoe del imput al array
        onNewCategory(inputValue.trim())
        //vaciar el imput 
        setInputValue('')
        // console.log(event)
    }


    return (
        <form  onSubmit={ (event) => {onSubmit(event)}} >
               <input 
                type="text" 
                placeholder="Buscar"
                value={ inputValue }
                onChange={ (event) => onInputChance(event) }
//se puede poner el oninputchange 
        />
    
        </form>
    

    
    
    
    

  )
}


