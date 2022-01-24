export const getFilmInfo=async(imdbID)=>{
    
    const url=`http://www.omdbapi.com/?i=${imdbID}&apikey=f277de14`;
    const resp= await fetch(url);
    const data= await resp.json();
    
    const filminfo=()=>{
        return{
            Title: data.Title,
            Year: data.Year,
            Rated: data.Rated,
            Released: data.Released,
            Tiempo: data.Runtime,
            Genre: data.Genre,
            Director:data.Director,
            Writer:data.Writer,
            Actors:data.Actors,
            Plot: data.Plot,
            Language:data.Language,
            Country:data.Country,
            Awards:data.Awards,
            Poster: data.Poster
            
        }
    };
    return filminfo;
}