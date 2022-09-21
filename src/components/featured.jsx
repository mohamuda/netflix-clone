import React, {useEffect} from 'react'

export default function Featured() {

useEffect(() => {

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
function fetchbanner(){
fetch(`https://api.themoviedb.org/3/discover/tv?api_key=6c90eb1cbe9a729f47eba5b53199555e&with_networks=213`)
.then((res) => res.json())
.then((data) => {

// every refresh the movie will be change
const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
console.log(setMovie)

const img_url = "https://image.tmdb.org/t/p/original";
let banner = document.querySelector(".featured");
let banner_title = document.querySelector(".Banner--tittle");
let banner_desc = document.querySelector(".featured__description");

banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
banner_desc.innerHTML = truncate(setMovie.overview, 150);
banner_title.innerHTML = setMovie.name;
})
}

fetchbanner();

}, [])


  return (

    <div class="featured">

        <div class="Tittle"><h2 class="Banner--tittle">Title</h2></div>
        <div class="featured__buttons">
        <button class="button__play"><i class="fas fa-play"></i>Play</button>
        <button>My List</button>
        </div>
        <div class="featured__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
        magna magna, vit...
        </div>
        
    </div>

  )
}
