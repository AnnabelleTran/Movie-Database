import React, { useEffect, useState, useRef } from "react";
import './App.css';

const Movie = () => {
  const input = useRef(null);

  function receiveSearch (){
    console.log(input.current.value);
  }
  
  const [movie, setMovie] = useState("");
  
    useEffect(() => {
        const url = `http://www.omdbapi.com/?s=${input}&apikey=b7f98029`;
  
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.Title);
                setMovie(
                  json.Title+" - "+json.Year+" - "+json.Rated
                  );
            } catch (error) {
                console.log("error", error);
            }

        };
  
        fetchData();
    }, []);
  
    return (
        <div className = "box">
            <h1>Movie</h1>
                <label>Search Movie Database: </label>
                <input ref = {input} id = "search" type = "text" placeholder = "Title"></input>
                <button onClick = {receiveSearch} className = "submitbutton">Search</button>
            <p>{movie}</p>
        </div>
    );
  };

export default Movie;

