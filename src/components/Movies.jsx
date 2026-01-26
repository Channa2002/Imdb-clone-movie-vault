import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'

function Movies() {
  const [movies , setMovies] = useState([]);
  useEffect (() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2854d75e0f18f45b2475cb0d700c78be&language=en-US&page=2`).then(function(res){
  setMovies(res.data.results);
    })
  }, [])
  return (
    <div className='p-4'>
        <div className='text-2xl m-5 text-center font-bold'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around items-end'>
            {movies.map((movieObj) => {
              return <MoviesCard />
            })}
        </div>
    </div>
  )
}

export default Movies