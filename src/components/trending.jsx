import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Trending() {
  const [isLoading, setisLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const img_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    function getTrendingNow() {
      let URL =
        "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";

      fetchMovies(URL);
    }

    // ** Helper function that makes dynamic API calls **
    async function fetchMovies(url) {
      // Use Fetch with the url passed down
      const result = await axios.get(url);
      setMovie(result.data.results);
      setisLoading(false);
    }

    getTrendingNow();
  }, []);

  const slideLeft = () => {
    var slider = document.querySelector("#trending");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.querySelector("#trending");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return isLoading ? (
    <>
      <div className="movies__header">
        <h2>Trending Now</h2>
      </div>
      <div id="Comedy_Movies" className="movies__container">
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
        <div className="Loading--container">
          <div className="loading"></div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="movies__header">
        <h2>Trending Now</h2>
      </div>
      <div id="trending" className="movies__container">
        {movie.map((movies, index) => (
          <img key={index} src={`${img_url}${movies.backdrop_path}`} />
        ))}
        <button className="trending__arrows--left" onClick={slideLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="trending__arrows--right" onClick={slideRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
