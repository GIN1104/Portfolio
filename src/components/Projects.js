import React from "react";
import Netflix from "../img/netflix.png";


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
        <p style={{color: "red"}}>
          A fun entertainment app that allows users to search different cat
          breeds as well as post cats up for adoption on the "marketplace".
          Technologies used on this application include: Javascript, Express,
          MySQL, Handlebars, Materialize CSS and Heroku.
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
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix",
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

         
            <div className="overflow"></div>
            <FontAwesomeIcon className="project-icon" icon={faSearchPlus} />
          </div>

      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      {/* <PopupboxContainer {...popupboxConfigPokemon} />
      <PopupboxContainer {...popupboxConfigTeam} />
      <PopupboxContainer {...popupboxConfigDogs} />
      <PopupboxContainer {...popupboxConfigEmpTrack} />
      <PopupboxContainer {...popupboxConfigWeather} /> */}
    </div>
  );
};

export default Projects;