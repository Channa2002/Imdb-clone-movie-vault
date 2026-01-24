import React from 'react'
import { BsCameraReelsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex space-x-8 items-center pl-4 py-5 border'>
        <BsCameraReelsFill className='text-3xl'/>
        <Link to="/" className='text-blue-500'>Movies</Link>
        <Link to="/watchlist" className='text-blue-500'>Watchlist</Link>
    </div>
  )
}

export default Navbar