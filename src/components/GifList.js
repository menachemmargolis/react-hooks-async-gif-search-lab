
function GifList(props){

    
     const renderGifs = props.gifs ? props.gifs.map((g) => <li><img src ={g}></img></li>): <p>hello get some gifs</p>
    
    
   
    return(
    <ul>{renderGifs}</ul>
    )
}

export default GifList;
