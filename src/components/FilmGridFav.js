import React,{useState,useEffect} from 'react';
import { FilmInfoItemFav } from './FilmInfoItemFav';
import { getFilmInfo } from '../helpers/getFilmInfo';
export const FilmGridFav = ({category,Heart,addFavouriteMovie}) => {
    const [info, setInfo] = useState([]);  
    console.log(category);
    useEffect(() => {
      getFilmInfo(category)
            .then(setInfo);
    
    }, []);
  return (
    <div >
    {
        <FilmInfoItemFav
                key={info.Title}
                {...info}
                Heart={Heart}
                addFavouriteMovie={addFavouriteMovie}
                
            />
        
    }
    </div>
  );
};
