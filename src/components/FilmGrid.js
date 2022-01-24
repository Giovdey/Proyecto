import React from 'react'
import { FilmGridItem } from './FilmGridItem';
import { useFetchFilm } from '../hooks/useFetchFilm';


export const FilmGrid = ({category}) => {

    const {data: poster, loading} =useFetchFilm(category);
       
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
                            
                        />
                    ))
                }
            </div>
        </>
    )
}
