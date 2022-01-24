
import React,{useState,useEffect} from 'react';
import { FilmGridFav } from './FilmGridFav';
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
    
    console.log(movie);
    const Heart='🤍';
    return(
        
        <div>
            
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
