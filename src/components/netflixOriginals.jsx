import React, { useEffect, useState } from "react";
import axios from "axios";

export default function NetflixOriginals() {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const img_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    // ** Function that fetches Netflix Originals **
    function GetOriginals() {
      let URL =
        "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";

      fetchMovies(URL);
    }

    // ** Helper function that makes dynamic API calls **
    async function fetchMovies(url) {
      // Use Fetch with the url passed down
      const result = await axios.get(url);
      setMovie(result.data.results);
      setisLoading(false);
    }

    GetOriginals();
  }, []);

  const slideLeft = () => {
    var slider = document.querySelector(".original__movies");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.querySelector(".original__movies");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return isLoading ? (
    <>
      <div class="netflixOriginals">
        <div class="original__header">
          <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
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
      </div>
    </>
  ) : (
    <>
      <div className="netflixOriginals">
        <div className="original__header">
          <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div className="original__movies">
          {movie.map((movies, index) => (
            <img key={index} src={`${img_url}${movies.poster_path}`} />
          ))}

          <button className="container__arrows--left" onClick={slideLeft}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="container__arrows--right" onClick={slideRight}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
