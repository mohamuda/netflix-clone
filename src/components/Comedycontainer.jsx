import React, {useEffect} from 'react'

export default function Comedycontainerr() {


useEffect(() => {

function ComedyMovies() {

  let URL = 'https://api.themoviedb.org/3/discover/movie?api_key=6c90eb1cbe9a729f47eba5b53199555e&with_genres=35';

 fetchMovies(URL, '#Comedy_Movies', 'backdrop_path');

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
  ComedyMovies();

}, [])  
  
const slideLeft = () => {
  var slider = document.querySelector('#Comedy_Movies');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.querySelector('#Comedy_Movies');
  slider.scrollLeft = slider.scrollLeft + 500;
};

  return (


    
    <>
    <div class="movies__header">
        <h2>Comedy Movies</h2>
    </div>
        <div id="Comedy_Movies" class="movies__container">
          {/*<!-- Top Rated Movies List Here -->*/}
          <button class="ComedyMovies__arrows--left" onClick={slideLeft}>
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="ComedyMovies__arrows--right" onClick={slideRight}>
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
    </>

  )
}
