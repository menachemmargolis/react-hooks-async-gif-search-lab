import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from "./GifSearch"
let moreGifs = ''

function GifListContainer(){

   const [query, setQuery] = useState(null)
    const [gifs, setGifs] = useState(null)
   

   function getAllUrls(gif){

    const gifArray = gif.data.map((d) => 
      d.images.original.url
        
    )
    setGifs(gifArray)
   }

   useEffect(() => {
    if(query !== null){

   fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=niicPBbfxXwgQ7J7TKmbRP0VlBe3M7bF&limit=3`)
    .then( res => res.json())
    .then(data => {
        getAllUrls(data) 
         })

    }
    
    },[query])
    

    console.log(gifs)
    return(
        <div>
        <GifSearch  searchTerm = {setQuery}/>
        <GifList gifs = {gifs} />
        </div>
        
    )
}

export default GifListContainer

// GifListContainer should be a component that does data fetching and then renders its
//  corresponding sub-component. That’s it.

// In our app, the GifListContainer will be responsible for fetching the data from the Giphy API,
//  storing the first 3 gifs from the response in its component state, and passing that data down to
//   its child, the GifList component, as a prop.

// It will also render a GifSearch component that renders the form.
//  GifListContainer should pass down a submit handler function to GifSearch as a prop.