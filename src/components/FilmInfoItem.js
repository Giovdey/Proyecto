import React from 'react';

export const FilmInfoItem = ({Title,Year,Rated,Released,Tiempo,Genre,Director,Writer,Actors,Plot,Language,Country,Awards,Poster}) => {
  return (
    <ul class="list-unstyled">
        <li class="media">
            <img src={Poster} class="mr-3" alt={Title}/>
            <div class="media-body">
                <h5 class="mt-0 mb-1">{Title}</h5>
                <h6>{Year}</h6>
                <h6>{Rated}</h6>
                <h6>{Released}</h6>
                <h6>{Tiempo}</h6>
                <h6>{Genre}</h6>
                <h6>{Director}</h6>
                <h6>{Writer}</h6>
                <h6>{Actors}</h6>
                <h6>{Language}</h6>
                <h6>{Country}</h6>
                <h6>{Awards}</h6>
                <p>{Plot}</p>
            </div>
        </li>
    </ul> 
  )
};
