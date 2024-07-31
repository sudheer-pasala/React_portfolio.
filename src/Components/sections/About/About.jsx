import React from "react";
import Summary from "./Info";
import "./About.css";

function AboutHeading() {
  return (
    <div className="heading">
      <h1>
        ABOUT<span className="rotating-emoji">&#x1F44B;</span>
      </h1>
    </div>
  );
}
function AboutContent() {
  return (
    <>
    <div className="aboutpara">
      <p>{Summary}</p>
    </div>
    </>
  );
}

function Resume() {
  return (
    <div className="buttonR">
      <button type="submit" className="btn btn-dark"><a 
       href="./assests/documents/resume.pdf" target="blank">Resume <i class="fa-solid fa-download"></i></a>
        
      </button>
    </div>
  );
}
function About() {
  return (
    <div id="About">
      <AboutHeading />
      <div className="container about">
        <div className="container">
          <img className="profile-pic" src="copy1.jpg" alt="profilr-pic"></img>
        </div>
        <div className="container">
          <AboutContent />
        </div>
      </div>
      <Resume />
    </div>
  );
}

export default About;
