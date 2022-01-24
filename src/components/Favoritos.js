
import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FilmGrid } from './FilmGrid';
import { FilmGridFav } from './FilmGridFav';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { FilmInfo } from './FilmInfo';
export const Favoritos = ({addFavouriteMovie}) => {
   
    const [movie, setMovie] = useState([]);
    	
    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
      
		if (movieFavourites) {
			setMovie(movieFavourites);
		}
	}, []);
    
    // const a=[...movie]
    // console.log(a);
    console.log(movie);
    const Heart='';
    return(
        
        <div>
            {/* <h2>{movie}</h2> */}
            <ol>
                {
                    movie.map((category)=>(
                        <FilmGridFav
                            key={category}
                            category={ category }
                            Heart={Heart}
                            addFavouriteMovie={addFavouriteMovie}
                        />
                    ))
                }
            </ol>
          
            </div>
        
       

    )
    
}
