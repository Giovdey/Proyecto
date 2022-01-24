import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';


export const Favoritos = () => {
   
    const [movie, setMovie] = useState([]);
    console.log(movie);
    	
    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setMovie(movieFavourites);
		}
	}, []);
	console.log(movie);
    return(
        <div><h1>Holaaaa</h1></div>

    )
    
}
