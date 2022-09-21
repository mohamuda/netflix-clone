import React from 'react'
import logo from '../img/logo--netflixs.png'



export default function Nav({toggleModal}) {




  return ( <div class="nav">
    <img class="nav__logo" src={logo}></img>
    <div class="nav__design">
      <div class="nav__list">
        <ul class="nav__list--links">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div class="nav__setting">
        <ul class="nav__setting--links">
          <li><i class="fas fa-search"></i></li>
          <li><i class="fas fa-bell"></i></li>
          <li>AM</li>
        </ul>
      </div>
    </div>
    <button className='nav__bar' onClick={toggleModal}><i class="fa-sharp fa-solid fa-bars"></i></button>
  </div>)
}
