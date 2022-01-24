import React from 'react';

export const FilmInfoItem = ({Title,Year,Rated,Released,Tiempo,Genre,Director,Writer,Actors,Plot,Language,Country,Awards,Poster}) => {
  return (
    <ul class="list-unstyled">
        <li class="media">
            <img src={Poster} class="img-thumbnail" alt={Title}/>
            <div class="media-body">
                <h5 class="mt-0 mb-1">{Title}</h5>
                <h6>Year: {Year}</h6>
                <h6>Rated: {Rated}</h6>
                <h6>Released: {Released}</h6>
                <h6>Tiempo: {Tiempo}</h6>
                <h6>Genre: {Genre}</h6>
                <h6>Director: {Director}</h6>
                <h6>Writer: {Writer}</h6>
                <h6>Actors:{Actors}</h6>
                <h6>Language: {Language}</h6>
                <h6>Country: {Country}</h6>
                <h6>Awards: {Awards}</h6>
                <p>Plot: {Plot}</p>
            </div>
        </li>
    </ul> 
  )
};
