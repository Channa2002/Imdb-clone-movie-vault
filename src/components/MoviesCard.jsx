import React from "react";

function MoviesCard({poster_path, name}) {
  return (
    <div>
      <div
        className=" relative h-[45vh] w-40 bg-center bg-cover border rounded-xl hover:scale-110 duration-300 hover: cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        <div className="absolute bottom-0 w-full
                  bg-black/60 text-white
                  text-lg text-center py-1 h-[60px] rounded-b-xl">
          {name}
          </div>
      </div>
    </div>
  );
}

export default MoviesCard;
