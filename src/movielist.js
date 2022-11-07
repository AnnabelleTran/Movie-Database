import React from 'react';

const Movielist = (props) =>{
    return(
    <>
    {props.movies.map((movie,index) =>(
        <div className = "movieObj">
            <img className = "moviePoster" src = {movie.Poster} alt = "movie poster"/>
            <p className = "movieinfo">{movie.Title}-{movie.Year}</p>
        </div>
    ))}
    </>
    );
}

export default Movielist;