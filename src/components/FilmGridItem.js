import React,{useState} from 'react'
import { Favoritos } from './Favoritos';


export const FilmGridItem = ({Title,Year,Poster,imdbID,addFavouriteMovie}) => {

    
    return (
        
        
        <div class="card" >
        
            <img src={Poster} class="card-img-top" alt={Title}/>
            <div className='overlay d-flex align-items-center justify-conten'></div>
            <p class="card-title" >{Title}</p>
            <p class="card-subtitle mb-2 text-muted">{Year}</p>
            
            <a class="btn btn-primary" href={`/FilmInfo/${imdbID}`}>+Info</a>
            <a class="btn btn-primary" onClick={()=>addFavouriteMovie(Title)}>+Add</a>
            {/* <Favoritos
                 movies={movies}
                 handleFavouritesClick={addFavouriteMovie}
					
            /> */}

        </div>
       
    )
}
