import React from 'react';
const Searchmovie = (props) =>{
    return(
        <div className = "box">
            <input
            className = "inputform"
            value = {props.value}
            onChange = {(event) => props.setSearchmovie(event.target.value)}
            placeholder = "Search Movie">
            </input>
        </div>
    )
}

export default Searchmovie;