import React from 'react'
import "./Card.css"

function Card(movie) {
    movie = movie["movie"]
    console.log(movie["Poster"]);
    
  
    return (
    <div className='continer-card'>
        <img src={movie["Poster"]} alt="" />
        <h3>{movie["Title"]}</h3>

        <div className='year'>
            <h6>Year</h6>
            <p>{movie["Year"]}</p>
        </div>

        <div className='runtime'>
            <h6>Runtime</h6>
            <p>{movie["Runtime"]}</p>
        </div>

        <div className='genre'>
            <h6>Genre</h6>
            <p>{movie["Genre"]}</p>
        </div>

        <div className='language'>
            <h6>Language</h6>
            <p>{movie["Language"]}</p>
        </div>

        <button>Select Seats</button>
    </div>
  )
}

export default Card