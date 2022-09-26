import React, { useState } from "react";
import logo from "../img/logo--netflixs.png";
import account from "../img/Account-image.png";

export default function Nav({ toggleModal }) {
  const [color, setColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else if (window.scrollY < 50) {
      setColor(false);
    }
  };

  document.addEventListener("scroll", changeBackground);

  return (
    <div className={color ? "nav nav-active" : "nav"}>
      <img className="nav__logo" src={logo}></img>
      <div className="nav__design">
        <div className="nav__list">
          <ul className="nav__list--links">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & popular</li>
            <li>My List</li>
          </ul>
        </div>
        <div className="nav__setting">
          <ul className="nav__setting--links">
            <li>
              <i className="fas fa-search"></i>
            </li>
            <li>
              <i className="fas fa-bell"></i>
            </li>
            <li>
              <img className="account--image" src={account} />
            </li>
          </ul>
        </div>
      </div>
      <button className="nav__bar" onClick={toggleModal}>
        <i class="fa-sharp fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
