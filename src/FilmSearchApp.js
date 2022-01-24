import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { FilmGrid } from './components/FilmGrid';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import{Favoritos} from'./components/Favoritos';
import { FilmInfo } from './components/FilmInfo';


export const FilmSearchApp = () => {
    
    const [categories,setCategories]= 
                        useState(['Jocker']);
    
    // const handleAdd=()=>{
    //     // setCategories([...categories,'Attack on Titan']);
    //     setCategories(cats=>['Attack on Titan',...categories]);
    // }
    
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
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
                
            </ul>
            
            <form class="form-inline my-2 my-lg-0">
              <AddCategory setCategories={setCategories}/>
              
            </form>
            </div>
            <Routes>
              <Route path="/" element={
                <div>
                  
                <hr/>
                <ol>
                    {
                        categories.map((category)=>(
                            <FilmGrid
                                key={category}
                                category={ category }
        
                            />
                        ))
                    }
                </ol>
                </div>
                
              }>

              </Route>
              <Route path="/Favoritos/:id" element={<Favoritos/>}>
              </Route>
              <Route path="/FilmInfo/:id" element={<FilmInfo/>}>
              </Route> 
            
            </Routes>
            
        </div>
      
      </BrowserRouter>
      
        
    )
    
}

