import React from 'react';
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light navbar-bg fixed-top">
            <div className="container-fluid">
                <img className="logo" src={logo} alt="logo..."/>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-50} className="nav-link"  >Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" smooth={true} to="about" offset={-50} >About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" smooth={true} to="portfolio" offset={-50} >Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" smooth={true} to="contacts" offset={-85} >Contacts</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
