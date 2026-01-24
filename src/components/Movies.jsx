import React from 'react'
import MoviesCard from './MoviesCard'

function Movies() {
  return (
    <div className='p-4'>
        <div className='text-2xl m-5 text-center font-bold'>
            Trending Movies
        </div>
        <div className='flex flex-row flex-wrap justify-around items-end'>
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </div>
    </div>
  )
}

export default Movies