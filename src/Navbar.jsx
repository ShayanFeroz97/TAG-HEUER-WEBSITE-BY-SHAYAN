import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useLocation } from "react-router";


function Navbar() {
  const navigate = useNavigate(); 
  const path = useLocation().pathname; 
  return (
    <div className="Navbar_container">
      <div className="logo_container">
        <img
          className="logoo"
          src="https://th.bing.com/th/id/R.9dab9389419f7cb40985b836edee740c?rik=ai8QEOQhfhp8ow&riu=http%3a%2f%2fviagp.com%2fwp-content%2fuploads%2f2017%2f06%2fTAG_HEUER_logo.png&ehk=2GqHw%2fkJ9P3lZqkYzQO%2fw5OdmgHmN1dGaQXf6RAUNFA%3d&risl=&pid=ImgRaw&r=0" onClick={() => navigate ("/Home")}
          alt=""/>
      </div>
      <div className="Links_main">
        <div className={path ==="/home"?"navLinks":"Links"} onClick={()=>{navigate("/home")}}>HOME</div>
        <div className={path ==="/product"?"navLinks":"Links"} onClick={()=>{navigate("/product")}}>PRODUCT</div>
        <div className={path ==="/about"?"navLinks":"Links"} onClick={()=>{navigate("/about")}}>ABOUT</div>
        <div className={path ==="/contact"?"navLinks":"Links"} onClick={()=>{navigate("/contact")}}>CONTACT</div>
        <div className="Links"><BsCart4/></div>
      </div>
    </div>
  );
}

export default Navbar;
