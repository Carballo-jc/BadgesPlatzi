import React from "react";
import { Link } from "react-router-dom";

import astro from "../images/badge-header.svg";
import logo from "../images/logo.svg";
import "./styles/Home.css";

function BadgeHome() {
  return (
    <div className="Home">
      <div className="col-text">
        <img src={astro} alt="Platzi conf logo" />
        <h1>BADGE MANAGEMENT SYSTEM</h1>
        <p>
          <Link className="btn btn-primary" to={"/badges"}>
            Start
          </Link>
        </p>
      </div>
      <div className="col-img">
        <img src={logo} alt="Astronauta" />
      </div>
    </div>
  );
}

export default BadgeHome;
