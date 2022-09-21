import React, {useEffect} from 'react'

export default function Trending() {

useEffect(() => {

function getTrendingNow() {

  let URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
 
  fetchMovies(URL, '#trending', 'backdrop_path');

  //console.log(trendingmoviesData.results)

  }

  // ** Helper function that makes dynamic API calls **
  function fetchMovies(url, dom_element, path_type) {
    // Use Fetch with the url passed down 
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    // Within Fetch get the response and call showMovies() with the data , dom_element, and path type
    .then(data => {
      showMovies(data, dom_element, path_type)
    })
    .catch(error_data => {
      console.log(error_data)
    })
  
  }
  
  //  ** Function that displays the movies to the DOM **
  const showMovies = (movies, dom_element, path_type) => {
    
    // Create a variable that grabs id or class
    let moviesEl = document.querySelector(dom_element)
  
    // Loop through object
  
    for (let movie of movies.results) {

      // Within loop create an img element
      let imageElement = document.createElement('img')
  
      // Set attribute
      imageElement.setAttribute('data-id', movie.id, )
  
      // Set source
      imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`
  
 
      // Append the imageElement to the dom_element selected
      moviesEl.appendChild(imageElement)
    }
  } 

  getTrendingNow();

}, [])

const slideLeft = () => {
  var slider = document.querySelector('#trending');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.querySelector('#trending');
  slider.scrollLeft = slider.scrollLeft + 500;
};

  return (
    <>
    <div class="movies__header">
        <h2>Trending Now</h2>
    </div>
    <div id="trending" class="movies__container">
          {/*<!-- Trending Movies List Here -->*/}
          <button class="trending__arrows--left" onClick={slideLeft}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="trending__arrows--right" onClick={slideRight}>
            <i class="fas fa-chevron-right"></i>
          </button>
    </div>
    </>
  )
}
