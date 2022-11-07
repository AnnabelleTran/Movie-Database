import React from 'react';

const movies = () =>{
    return(
        <div className="moviebox">
            <h1>Search Results</h1>
            <div class = "col1">
                {movies.map((movie, index)=>{
                    return <searchbar key = {index} movie = {movie} />;
                })}
            </div>
        </div>
    )
}

export default movies;