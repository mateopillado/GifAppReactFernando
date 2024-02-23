import { useState } from 'react'
import { AddCategory,GifGrid } from './components'

export const GifExpertApp = () => {

    //hock para mantener el estado
    const [categorias, setCategorias] = useState([])
    console.log(categorias)

    const onAddCategory = (parametro) => {

        //valida si existe en el array, si existe sale de la funcion 
        
        setCategorias( [parametro])
    }
    
    return (

    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
            onNewCategory={value => onAddCategory(value)} 
        //setCategorias={ setCategorias }
        //la palabra ON significa que esta emitiendo algo (generalmente en eventos)
        />

        <div className='nazi'>
        {
        categorias.map((category, ind) => (
            <GifGrid 
                key={category + ind} 
                category={category}/>
        ))
        }
        </div>
        
    </>
  )
}


