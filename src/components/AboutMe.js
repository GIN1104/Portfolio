import React from "react";
import Photo from "../img/evgeny_pic.jpeg";
import Resume from "../docs/Evgeny_Starchenko CV 2021.pdf";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Photo} alt="Evgeny Starchenko" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading" style={{fontStyle: 'italic'}}>About Me</h2>
          <p>
             Hi all, I am Evgeny Starchenko. <br/>
          Making my career change to the High Tech field as a FullStack Web Developer. Strong interest in web applications and websites.
          <br/><br/>
          <span style={{textDecoration: "underline", fontStyle: 'italic'}}>Front End Experience:</span> HTML, CSS, Bootstrap, Material UI, JavaScript, React & Angular.
          <br/><br/>
          <span style={{textDecoration: "underline", fontStyle: 'italic'}}>BackEnd Experience:</span> Node.JS, FireBase, and MySQL, MongoDB.
          <br/><br/>
          Git / GitHub, as well for version tool in the web development workflow.
          <br/><br/>
          Creative thinking and can-do attitude. Excellent communication skills in diverse environments. Meticulous attention to details. Committed to lifelong learning.
          Willingness to work in strong collaborative team.
          </p>
          <a href="https://github.com/GIN1104" target="_blank" rel="noreferrer" className="icon mr-4">
            <FaGithubSquare size={40} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon mr-4">
            <FaLinkedinIn size={40} />
          </a>
          <a href={Resume} target="_blank" rel="noreferrer" download className="icon">
            <BsFileText size={40} />
           Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
