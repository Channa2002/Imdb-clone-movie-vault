import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect} from "react";

function App() {
  let [watchList, setWatchList] = useState([]);


  let handleAddToWatchList = (movieObj) => {
    let newWatchList =[...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log("new movies has bee consoled",newWatchList);
  }


  let handleRemoveWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList);
    console.log("removed from the watchlist",filteredWatchList);
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddToWatchList={handleAddToWatchList} handleRemoveWatchList={handleRemoveWatchList} watchList={watchList}/>
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList watchList={watchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular?api_key=2854d75e0f18f45b2475cb0d700c78be&language=en-US&page=2