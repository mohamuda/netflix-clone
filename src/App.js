import React, {useEffect, useState} from 'react'
import Nav from "./components/nav";
import Navbody from './components/Navbody';
import Featured from "./components/featured";
import NetflixOriginals from "./components/netflixOriginals"
import Trending from "./components/trending"
import Toprated from "./components/toprated"
import Comedycontainer from "./components/Comedycontainer"
import Horrorcontainer from "./components/Horrorcontainer"
import Footer from "./components/footer"

function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal);
  
  };

const navbar = document.querySelector('.nav');

useEffect(() => {

  onscroll = () => {
      if (window.scrollY > 300) {
          navbar.classList.add('nav-active');
      } else {
          navbar.classList.remove('nav-active');
      }
  }

},  [])  


  return modal ? 

        ( <div className="App">
              
              <Nav toggleModal={toggleModal}/>
              <Navbody />


        </div>) :
  
  (<div className="App">
      
      <Nav toggleModal={toggleModal}/>
      <Featured />
      <NetflixOriginals />
      <Trending />
      <Toprated />
      <Comedycontainer />
      <Horrorcontainer />
      <Footer />

    </div>
  );
}

export default App;
