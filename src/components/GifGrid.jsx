import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { useFechtGifs } from '../hooks/useFechtGifs'

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFechtGifs( category )

  console.log(category)
  return (
    <>

        <h3>{category}</h3>
        {
          isLoading
          ? (<h2>Cargando...</h2>) 
          : null
        }
        <div className='card-grid'>
        {
          images.map((value) => {
            return (
              <GifItem 
                key={value.id}
                //pasar parametros con spreed, pasa todo los parametros
                {...value}
              />
            )
          })
        }
        </div>
    </>
  )
}

