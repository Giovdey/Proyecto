export const getFilm=async(category)=>{
    
    const url=`http://www.omdbapi.com/?s=${category}&apikey=f277de14`;
    const resp= await fetch(url);
    const data= await resp.json();
    
    const film= data.Search.map((movie)=>{
        return{
            
            Title: movie.Title,
            Year: movie.Year,
            Poster: movie.Poster,
            imdbID: movie.imdbID
        }
    });
    return film;
}