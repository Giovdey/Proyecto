import React,{useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import {getFilmInfo} from '../helpers/getFilmInfo'
import { FilmInfoItem } from './FilmInfoItem';

export const FilmInfo = () => {
  
    const{id}=useParams();
    const [info, setInfo] = useState([]);  
    useEffect(() => {
      getFilmInfo(id)
            .then(setInfo);
    
    }, []);
    
    return (
        <>
           <div >
                {
                    <FilmInfoItem
                            key={info.Title}
                            {...info}
                            
                        />
                    
                }
            </div>
        </>
    );
};
