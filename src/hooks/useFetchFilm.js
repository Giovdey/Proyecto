import { useState,useEffect } from "react";
import { getFilm } from "../helpers/getFilm";

export const useFetchFilm = (category) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    
    useEffect(() => {
        getFilm(category)
                .then(movie=>{
                    setTimeout(()=>{
                        
                        setState({
                            data:movie,
                            loading: false
                        })
                    },1000);
                });

    },[category]);

    return state;

}
