import React from "react";
import "./Project.css";

function ProjectCard() {
  return (
    <div id="project">
      <div className="container-card">
        <div className="row">
          <div className="card pcard " style={{ width: "18rem" }}>
            <span className="domain">
              <i class="fa-solid fa-earth-americas"></i>
            </span>
            <div className="card-body">
              <h3 className="heading">AirBnb WebApp</h3>
              <p className="card-text pcard-text">
                Clone of AirBnb where user can upload , book , negotiate and
                write reviews regarding accomodation.{" "}
              </p>
            </div>
          </div>

          <div className="card pcard " style={{ width: "18rem" }}>
            <span className="domain">
              <i class="fa-solid fa-earth-americas"></i>
            </span>
            <div className="card-body">
              <h3 className="heading">React Weather App</h3>
              <p className="card-text pcard-text">
                User can know their weather conditions by name if city and
                achieved by implementing Weather API's.{" "}
              </p>
            </div>
          </div>

          <div className="card pcard " style={{ width: "18rem" }}>
            <span className="domain">
              <i className="fa-brands fa-android"></i>
            </span>
            <div className="card-body">
              <h3 className="heading">Android Portfolio APP</h3>
              <p className="card-text pcard-text">
                An Android portfolio project will tell's about my skill's and my
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div id="projects">
      <h1>PROJECTS</h1>
      <ProjectCard />
    </div>
  );
}
export default Project;
