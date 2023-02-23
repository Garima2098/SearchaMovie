import React from "react";
import { useEffect} from "react";
import './App.css';
import SearchIcon  from './search.svg';
import MovieCard from "./MovieCard";
import { useState } from "react";
// 73461836
 const API_URL='https://www.omdbapi.com?apikey=73461836';
 const movie1={
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}
const App =()=>{
    const [movies, Setmovies]=useState([]);
    const [searchTerm , setSearchTerm]=useState([])
    const searchMovie =async(title)=>{
        const response= await fetch (`${API_URL}&s=${title}`)
         const data = await response.json();
         Setmovies(data.Search);
    }
    useEffect(()=>{
        searchMovie('Spiderman');
    },[]);

    return(
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input
                    placeholder="Search for movie"
                    value={searchTerm}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="Search"
                onClick={()=>searchMovie(searchTerm)} />
            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                   {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                   ))}
                </div>
            
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
               
        </div>
    )
}

export default App;