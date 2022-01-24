import React,{useState} from 'react'
import { FilmGridItem } from './FilmGridItem';
import { useFetchFilm } from '../hooks/useFetchFilm';


export const FilmGrid = ({category,addFavouriteMovie,Heart}) => {

    console.log(category);
    const {data: poster, loading} =useFetchFilm(category);

    // const [favourites, setFavourites] = useState([]);

    // const saveToLocalStorage = (items) => {
	// 	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	// };
    // const addFavouriteMovie = (Title) => {
	// 	const newFavouriteList = [...favourites, {title:Title}];
    //     console.log(newFavouriteList)
        
	// 	setFavourites(newFavouriteList);
    //     saveToLocalStorage(newFavouriteList);
	// };
  
    return (
        <>
            {/* <h3 class='card animate__animated animate__fadeIn'>{ category }</h3> */}
            {loading&& <p class='card animate__animated animate__flash'>Loading...</p>}
            <div className='cardGrid '>
                {
                    poster.map((movie)=>(
                        <FilmGridItem
                            key={movie.Title}
                            {...movie}
                            addFavouriteMovie={addFavouriteMovie}
                            
                            Heart={Heart}
                        />
                        
                        
                    ))
                }
            </div>
        </>
    )
}
