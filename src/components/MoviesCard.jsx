import React from "react";

function MoviesCard({poster_path}) {
  return (
    <div>
      <div
        className="h-[45vh] w-40 bg-center bg-cover border rounded-xl hover:scale-110 duration-300 hover: cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      ></div>
    </div>
  );
}

export default MoviesCard;
