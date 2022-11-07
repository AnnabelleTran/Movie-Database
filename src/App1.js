import React from 'react'
import { useState, useEffect } from 'react'
import Movielist from './movieList'

const App1 = () => {

    const [movies, setMovies] = useState([])
    const Requestmovie = async () => {
        const url = '';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        Requestmovie();
    }, []);
    return (
        <div className="box">
            <Movielist movies={movie} />
        </div>
    )
}

export default App1;