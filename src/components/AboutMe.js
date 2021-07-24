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
          <h2 className="about-heading">About Me</h2>
          <p>
          Hi all, I am Evgeny Starchenko. I am a FullStack Web Developer.
          </p>
          <a href="https://github.com/GIN1104" target="_blank" rel="noreferrer" className="icon">
            <FaGithubSquare size={40} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon">
            <FaLinkedinIn size={40} />
          </a>
          <a href={Resume} target="_blank" rel="noreferrer"  className="icon">
            <BsFileText size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
