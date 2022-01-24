import React,{useState} from 'react'
import { Favoritos } from './Favoritos';


export const FilmGridItem = ({Title,Year,Poster,imdbID}) => {
    // const [favo, setFavo] = useState([]);
    
    // const handleSubmit=()=>{
        
    //     setFavo(cats=>[...cats,Title]);
    //     console.log(favo);
    // }
    const [favourites, setFavourites] = useState([]);
    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
    const addFavouriteMovie = () => {
		const newFavouriteList = [...favourites, Title];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

    
    return (
        
        
        <div class="card" >
        
            <img src={Poster} class="card-img-top" alt={Title}/>
            <div className='overlay d-flex align-items-center justify-conten'></div>
            <p class="card-title" >{Title}</p>
            <p class="card-subtitle mb-2 text-muted">{Year}</p>
            
            <a class="btn btn-primary" href={`/FilmInfo/${imdbID}`}>+Info</a>
            <a class="btn btn-primary" onClick={addFavouriteMovie}>+Add</a>

        </div>
       
    )
}
