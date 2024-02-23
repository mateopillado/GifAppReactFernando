

export const getGifs = async(category) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=zVJZ0SwnBELqQLjSqUOofVWJnQbsCQbf&limit=10&q=${category}`
    const resp = await fetch(url)
    const {data} = await resp.json()
  

    //return implicito con ()
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      urls: img.images.downsized.url    
    }))
  
    // return explicito (te deja poner codigo js dentro)
    // const gif2 = data.map((gif, ind)=>{
    //   // if (ind === 2) {
    //   //   console.log(gif.url)
    //   // }
    //   return {
    //     id: gif.id,
    //     title: gif.title,
    //     url: gif.url,
    //   }
    // })

    console.log(gifs)

    return gifs
  }