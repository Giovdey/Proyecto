import {createContext} from 'react';

const FavoritoContex = createContext({
    FilmFavorito: [],
    updatefavorito: (id)=> null
});

export default FavoritoContex;