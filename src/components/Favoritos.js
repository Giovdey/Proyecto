import React from 'react';
import { useParams } from 'react-router-dom';


export const Favoritos = () => {
    const{Favo}=useParams();
    console.log(Favo);
    const favo=[];
    favo.push(Favo);
    console.log(favo);
    return(
        <div><h1>{favo} Holaaaa</h1></div>

    )
    
}
