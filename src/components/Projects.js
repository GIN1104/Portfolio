import React from "react";
import Netflix from "../img/netflix.png";
import Spotify from "../img/spotify.png";
import Criptonite from "../img/criptonite.png"


//FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Projects = () => {
  //Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
           src={Netflix}
          alt="Netflix"
        />
        <p>
        Netflix Clone<br/>
        <span style={{color: "red"}}>
Fully responsive React app.
main features:
Frontend: Styled-components, React hooks + custom hooks ,context api, protected routes, Fuse.js for searching films and series.
Backend: Usage of firebase auth to handle registration and authentication, firestore to store films and series data, firebase hosting.
</span>
        </p>
        <a
           className="hyper-link"
           target="_blank" rel="noreferrer"
           href="https://netflix-clone-3885d.web.app/"
        >
          Demo
        </a>
        <br />
        <a
          className="hyper-link"
          target="_blank" rel="noreferrer"
          href="https://github.com/GIN1104/netflix-demo"
        >
          GitHub
        </a>
      </>
    );
    PopupboxManager.open({ content,
      config: {
        titleBar: {
          text: "Netflix",
        },
      } });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

   //Spotify
   const openPopupboxSpotify = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
           src={Spotify}
          alt="Spotify"
        />
        <p >
          Spotify Clone
          <br/>
        Frontend: React hooks, usage of the spotify api to connect to your real spotify account.
        <br/>
        Backend: firebase hosting.  
        </p>
        <a
           className="hyper-link"
           target="_blank" rel="noreferrer"
           href="https://spotify-app-db278.web.app/"
        >
          Demo
        </a>
        <br />
        <a
          className="hyper-link"
          target="_blank" rel="noreferrer"
          href="https://github.com/GIN1104/spotify-react-app/tree/main/spotify-react-app"
        >
          GitHub
        </a>
      </>
    );
    PopupboxManager.open({ content,
     config: {
        titleBar: {
          text: "Spotify",
        },
      }
     });
  };

  const popupboxConfigSpotify = {
    titleBar: {
      enable: true,
       text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };



  //Criptonite
  const openPopupboxCriptonite  = () => {
    const content = (
      <>
        <img
          className="project-image-popupbox"
           src={Criptonite}
          alt="Criptonite"
        />
        <p >
        Cryptocurrency App
        <br/>
        <span>
        Frontend: Jquery and ajax requests are used to interact with cryptocurrency API, you can choose to get more information on the coin and compare its value to USD, Euro and Shekel.. further more you can select up to 5 coins to show on a graph that shows the coin value compared to the dollar, the graph is updated every two seconds.
        This project was created by using: HTML, CSS3, JAVASCRIPT, JQUERY, AJAX, REST API, CANVAS JS & BOOTSTRAP.
        </span>
        </p>
        <a
           className="hyper-link"
           target="_blank" rel="noreferrer"
           href="https://criptonite-28a56.web.app/"
        >
          Demo
        </a>
        <br />
        <a
          className="hyper-link"
          target="_blank" rel="noreferrer"
          href="https://github.com/GIN1104/Criptonite"
        >
          GitHub
        </a>
      </>
    );
    PopupboxManager.open({ content,
     config: {
        titleBar: {
          text: "Criptonite",
        },
      }
     });
  };

  const popupboxConfigCriptonite = {
    titleBar: {
      enable: true,
       text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  

 

  return (
    <div id="portfolio" className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        
        <div className="image-box-wrapper row justify-content-center">

          <div className="project-image-box" onClick={openPopupboxNetflix}>
            <img
              className="project-image"
              src={Netflix}
              alt="Netflix App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

                  {/* - */}

                  <div className="project-image-box" onClick={openPopupboxSpotify}>
            <img 
                className="project-image" 
                src={Spotify} 
                 alt="Spotify App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="project-image-box" onClick={openPopupboxCriptonite}>
            <img 
                className="project-image" 
                src={Criptonite} 
                 alt="Criptonite" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          </div>

      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigSpotify} />
       <PopupboxContainer {...popupboxConfigCriptonite} />
      {/* <PopupboxContainer {...popupboxConfigDogs} /> */}
      {/* <PopupboxContainer {...popupboxConfigEmpTrack} /> */}
      {/* <PopupboxContainer {...popupboxConfigWeather} /> */}
    </div>
  );
};

export default Projects;