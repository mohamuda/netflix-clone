import React, {useEffect} from 'react'

export default function NetflixOriginals() {

useEffect(() => {

  // ** Function that fetches Netflix Originals **
  function GetOriginals() {

    let URL = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';
  
    fetchMovies(URL, ".original__movies", 'poster_path');
  
  
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
  GetOriginals();

}, [])

const slideLeft = () => {
  var slider = document.querySelector('.original__movies');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.querySelector('.original__movies');
  slider.scrollLeft = slider.scrollLeft + 500;
};

  return (
    <>
    <div class="netflixOriginals">
        <div class="original__header">
        <h2>NETFLIX ORIGINALS</h2>
        </div>
        <div class="original__movies">
        {/*<!-- Orignal Movies List -->*/}
        
            <button class="container__arrows--left" onClick={slideLeft}>
            <i class="fas fa-chevron-left"></i>
            </button>
            <button class="container__arrows--right" onClick={slideRight}>
            <i class="fas fa-chevron-right"></i>
            </button>
        
        </div>
    </div>
    </>
  )
}
