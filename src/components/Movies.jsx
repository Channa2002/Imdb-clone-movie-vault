import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleAddToWatchList, handleRemoveWatchList, watchList }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const handleForward = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2854d75e0f18f45b2475cb0d700c78be&language=en-US&page=${pageNo}`,
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-4">
      <div className="text-2xl m-5 text-center font-bold">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-x-4 gap-y-4">
        {movies.map((movieObj) => {
          return (
            <MoviesCard
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveWatchList={handleRemoveWatchList}
              watchList={watchList}
            />
          );
        })}
      </div>

      <Pagination
        pageNo={pageNo}
        handleForward={handleForward}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
