import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);


  let handleAddToWatchList = (movieObj) => {
    let newWatchList =[...watchList, movieObj];
    setWatchList(newWatchList)
    console.log("new movies has bee consoled",newWatchList);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies handleAddToWatchList={handleAddToWatchList}/>
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// https://api.themoviedb.org/3/movie/popular?api_key=2854d75e0f18f45b2475cb0d700c78be&language=en-US&page=2