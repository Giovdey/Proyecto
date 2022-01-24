import React,{useState,useEffect} from 'react'
import { AddCategory } from './components/AddCategory';
import { FilmGrid } from './components/FilmGrid';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import{Favoritos} from'./components/Favoritos';
import { FilmInfo } from './components/FilmInfo';


export const FilmSearchApp = () => {
    
    const [categories,setCategories]= 
                        useState([]);
       
                        
    const [favourites, setFavourites] = useState([]);

    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};
    const addFavouriteMovie = (Title) => {
      
		const newFavouriteList = [...favourites];
    const isFavourite=newFavouriteList.indexOf(Title);
    if(isFavourite>=0)
    {
      console.log(isFavourite);
      newFavouriteList.splice(isFavourite,1);
    }
    else{
      
      newFavouriteList.push(Title);
    }
       
        
		setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
	};
  
	  const [movie, setMovie] = useState([]);
    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);
      
		if (movieFavourites) {
			setMovie(movieFavourites);
		}
	}, []);
  
    const Heart='🤍';

    return (
      
      <BrowserRouter>
      
        <div>
            <div class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a class="navbar-brand" href="#">Film App</a>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Favoritos">Favoritos</a>
                  
                </li>
                
                
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
              <AddCategory setCategories={setCategories}/>
              
            </form>
            </div>
            <Routes>
              <Route path="/" element={
                <div>
                  
                  
                <hr/>
                {
                  categories.length==0?
                  (
                    <div class="alert alert-secondary" role="alert">
                    Ingrese el nombre de la Pelicula que desea :D
                    </div>

                  )
                  :
                  (
                    <ol>
                    {
                        categories.map((category)=>(
                            <FilmGrid
                                key={category}
                                category={ category }
                                addFavouriteMovie={addFavouriteMovie}
                                Heart={Heart}
                            />
                        ))
                    }
                </ol>
                  )
                }
                
                
                </div>
                
                
              }>

              </Route>
              <Route path="/Favoritos/" element={<Favoritos addFavouriteMovie={addFavouriteMovie}/>
                // <ol>
                //     {
                //         movie.map((category)=>(
                //             <h1>{category.title}</h1>
                //         ))
                //     }
                // </ol>
              }>
              </Route>
              <Route path="/FilmInfo/:id" element={<FilmInfo/>}>
              </Route> 
            
            </Routes>
            
        </div>
      
      </BrowserRouter>
      
        
    )
    
}

