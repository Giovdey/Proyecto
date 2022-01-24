import React,{useEffect,useState}from 'react';

export const Favoritos = () => {
   
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


    return(
        <>
            {/* <h2>{movie}</h2> */}
            {
                (movie)?
                movie.map(data=>{
                    <div key={data}>
                        <h1>
                            ghola
                        </h1>
                    </div>
                    // <h1>{data.title}ddd</h1>
                }):
                <h1>no</h1>
            }
            <h2>ddd</h2>
         </>
       

    )
    
}
