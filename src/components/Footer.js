import React from "react";
import { FaCopyright  } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-items-center">
              <p className="copyright"><FaCopyright size={30}/> Evgeny Starchenko</p>
              <AiOutlineMail size={30} className="icon"/>  <a href="mailto:starchenkogin@gmail.com" target="_blank" rel="noreferrer" className="footer_email">starchenkogin@gmail.com</a><br/>
               <h5> <AiOutlinePhone size={30} className="icon"/>052-4760015</h5>
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
