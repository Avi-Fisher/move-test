import React, { useEffect, useState } from 'react'
import "./Home.css"
import { res } from '../../api/getData';
import Card from '../../components/card/Card';

function Home() {
    const data = res
    const [searchTerm, setSearchTerm] = useState('');

    

    const filteredData = data.filter(item => 
        item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
        <div className='con-home'>
            <div className='con-navbar'>
                <h1>Movie Night</h1>
                <h3>Search a movie and pick your seats</h3>
            </div>
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    type="text" 
                    placeholder='Search movie by title...'
                />

                <ul>
                    {filteredData.map((e)=>{
                        return <Card movie={e}></Card>
                    })}                
                </ul>
                

        </div>
    )
    }

    export default Home