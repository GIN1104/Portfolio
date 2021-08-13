import React from 'react'
import Typed from "react-typed"

const Header = () => {
    return (
   <div id="home" className="header-wraper">
       <div className="main-info">
           <h1>Web development</h1>
           <Typed 
           className="typed-text"
           strings={[ 
               "FullStack Development", 
               "FronEnd Development", 
               "BackEnd Development"]}
               typeSpeed={40}
               backSpeed={50}  
               loop
               />
                 {/* <a href="#" className="btn-main-offer">contact me</a> */}
       </div>
   </div>
    )
}

export default Header
