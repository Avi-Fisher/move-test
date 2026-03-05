import React, { useEffect, useState } from 'react'
import "./Home.css"

function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    

    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
        <div className='con-navbar'>
            <h1>Movie Night</h1>
            <h3>Search a movie and pick your seats</h3>

            <input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text" 
                placeholder='Search movie by title...'
            />

        </div>
    )
    }

    export default Home