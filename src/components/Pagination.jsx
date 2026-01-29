import React from 'react'

function Pagination({pageNo, handlePrev, handleForward}) {
  return (
    <div className='w-full bg-gray-400 p-3 mt-8 text-center flex items-center justify-center gap-5'>
        <div onClick={handlePrev}> <i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleForward}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination