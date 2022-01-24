export const FilmInfoItemFav = ({Title,Year,Poster,imdbID,addFavouriteMovie,Heart}) => {
    
    const Fav=localStorage.getItem('react-movie-app-favourites');
    const Whiteheart='🤍';
    const Blackheart='🖤';
    Heart=Fav.includes(imdbID) ? Blackheart:Whiteheart
    
    return (
        
        <div class="card" >
            <img src={Poster} class="card-img-top" alt={Title}/>
            <div className='overlay d-flex align-items-center justify-conten'></div>
            <p class="card-title" >{Title}</p>
            <p class="card-subtitle mb-2 text-muted">{Year}</p>
            <i class="bi bi-bookmark-heart" onClick={()=>addFavouriteMovie(imdbID)}>{Heart}</i>
            <a class="btn btn-primary" href={`/Proyecto/FilmInfo/${imdbID}`}>+Info</a>
            
        {/* <Favoritos
             movies={movies}
             handleFavouritesClick={addFavouriteMovie}
                
        /> */}
        </div>
    )
  };
  