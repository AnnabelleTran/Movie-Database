import React from 'react';
import {useState, useEffect} from 'react';
import Movielist from './movielist';
import Searchmovie from './searchbar';
import './App.css';

const App = () =>{
    const [movies, setMovies] = useState([]);
    const [searchmovie, setSearchmovie] = useState('')


    const Requestmovie = async() =>{
        const url = `http://www.omdbapi.com/?s=${searchmovie}&apikey=b7f98029`
        const response = await fetch(url);
        const data = await response.json();
        if(data.Search){
            setMovies(data.Search);
        }
    }

    useEffect(() =>{
        Requestmovie(searchmovie);
    }, [searchmovie]);
    return(
        <div>
            <h1 className = "title">Search Movie Database</h1>
            <div className = "moviesearch">
                <Searchmovie searchmovie = {searchmovie} setSearchmovie = {setSearchmovie}/>
            </div>

            <div className = "App">
                <Movielist movies = {movies}/>
            </div>
        </div>
    )
}

export default App;