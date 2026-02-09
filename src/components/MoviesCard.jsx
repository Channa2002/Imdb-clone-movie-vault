import React from "react";

function MoviesCard({
  poster_path,
  name,
  handleAddToWatchList,
  movieObj,
  watchList,
  handleRemoveWatchList,
}) {
  function doesContain() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div>
      <div
        className=" relative h-[45vh] w-40 bg-center bg-cover border rounded-xl hover:scale-110 duration-300 hover: cursor-pointer"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movieObj) ? (
          <div
            onClick={() => handleRemoveWatchList(movieObj)}
            className="w-6 h-6 px-2 py-3 bg-gray-900/50 rounded-lg flex items-center justify-center mx-3 mt-2"
          >
            &#10060;
          </div>
        ) : (
          <div
            onClick={() => handleAddToWatchList(movieObj)}
            className="w-6 h-6 px-2 py-3 bg-gray-900/50 rounded-lg flex items-center justify-center mx-3 mt-2"
          >
            &#128525;
          </div>
        )}

        <div
          className="absolute bottom-0 w-full
                  bg-black/60 text-white
                  text-lg text-center py-1 h-[60px] rounded-b-xl"
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
