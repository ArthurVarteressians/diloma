import React from "react";
import "./ServicesLanding.css";
import img1 from "../1.png";
import img2 from "../2.png";
import img3 from "../3.png";
import HowItWorks from "../../HowItWorks/HowItWorks";
import "../../Sass/LandingpageButton.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="ServicesLWeb">
        <div className="ServicesLpageBody">
          <div className="ServicesLHeader">
            <h1>Why choose us?</h1>
          </div>
          <div className="ServicesLContainer">
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img1} alt="It's one of our clinic Services " />
                <h2>Years of experience</h2>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly.
                </p>
              </div>
            </div>
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img2} alt="It's one of our clinic Services " />
                <h2>Modern equipment</h2>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly.
                </p>
              </div>
            </div>
            <div className="ServicesLService">
              <div className="ServicesLContent">
                <img src={img3} alt="It's one of our clinic Services " />
                <h2>Caring Personnel</h2>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly.
                </p>
              </div>
            </div>
          </div>
          <Link to="ServicesPage">
            <button>Explore More</button>
          </Link>
        </div>
        <hr className="landingServicesDivider" />
        <HowItWorks />
      </div>
    </>
  );
};

export default Services;