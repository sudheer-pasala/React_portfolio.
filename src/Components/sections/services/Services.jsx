import React from "react";
import "./Services.css";

function Heading() {
  return (
    <div className="heading">
      <h1 className="service">SERVICES</h1>
    </div>
  );
}

function Card() {
  return (
    <>
      <div className="container-card">
        <div className="row">
          <div className="card service-card" style={{ width: "18rem" }}>
            <span className="domain">
              <i className="fa-brands fa-android"></i>
            </span>
            <div className="card-body">
              <h3 className="heading">Android Developer</h3>
              <p className="card-text">
                I am a passionate Android Developer having knowlegde in
                designing, developing, and deploying high-quality mobile
                applications.
              </p>
            </div>
          </div>

          <div className="card   service-card" style={{ width: "18rem" }}>
            <span className="domain">
              <i class="fa-solid fa-earth-americas"></i>
            </span>
            <div className="card-body">
              <h3 className="heading">Mern Full Stack Web Developer</h3>
              <p className="card-text">
                I build and maintain the both client-side and server-side of
                MERN STACK web applications.
              </p>
            </div>
          </div>

          <div className="card   service-card" style={{ width: "18rem" }}>
            <span className="domain">
              <i class="fa-brands fa-teamspeak"></i>
            </span>
            <div className="card-body">
              <h3>Team Player</h3>
              <p className="card-text">
                I can collaborate effectively, communicate openly, and share
                knowledge to achieve common goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Services() {
  return (
    <div id="Services">
      <Heading />
      <Card />
    </div>
  );
}

export default Services;
