import React from "react";
import "./Header.css";
import laptop from "../../assets/images/download.webp";

const Header = ({ heading, subheading }) => {
  return (
    <div className="container">
      <div className="left">
        <h2>{heading}</h2>
        <p>{subheading}</p>

        <button className="btn-header">Explore</button>
      </div>
      <div className="right">
        <img className="header-img" src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default Header;
