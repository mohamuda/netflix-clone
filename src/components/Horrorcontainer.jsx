import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Horrorcontainer() {
  const [isLoading, setisLoading] = useState(false);
  const [movie, setMovie] = useState([]);

  const img_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    function HorrorMovies() {
      let URL =
        "https://api.themoviedb.org/3/discover/movie?api_key=6c90eb1cbe9a729f47eba5b53199555e&with_genres=27";

      fetchMovies(URL);
    }

    // ** Helper function that makes dynamic API calls **
    async function fetchMovies(url) {
      // Use Fetch with the url passed down
      const result = await axios.get(url);
      setMovie(result.data.results);
      setisLoading(false);
    }

    HorrorMovies();
  }, []);

  const slideLeft = () => {
    var slider = document.querySelector("#Horror_Movies");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.querySelector("#Horror_Movies");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return isLoading ? (
    <>
      <div className="movies__header">
        <h2>Horror Movies</h2>
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
        <h2>Horror Movies</h2>
      </div>
      <div id="Horror_Movies" className="movies__container">
        {movie.map((movies, index) => (
          <img key={index} src={`${img_url}${movies.backdrop_path}`} />
        ))}
        <button className="HorrorMovies__arrows--left" onClick={slideLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="HorrorMovies__arrows--right" onClick={slideRight}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
