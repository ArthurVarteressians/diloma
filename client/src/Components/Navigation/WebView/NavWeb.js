import "./NavWeb.css";
import Logo from "../Imgs/logo.png";
import Telicon from "./emergency-call.gif";
import LoginIcon from "./profile.gif";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Mainpage from "../../Mainpage/Mainpage";
import Services from "../../ServicesLanding/WebView/ServicesLanding";
import LandingFaqsAll from "../../FAQS/LandingFaqsAll";
import Footer from "../../Footer/Footer";
import { useState } from "react";
function NavWeb() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="navWebV">
      <div className="navWebVContainer">
        <img src={Logo} />

        <div className="navWebVLinks">
          <li>
            <ScrollLink
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section2"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              Get?
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              onClick={() => handleLinkClick(0)}
            >
              FAQS
            </ScrollLink>
          </li>

          <li>
            <RouterLink to="/AllDoctors">Doctors</RouterLink>
          </li>
          <li>
            <RouterLink to="/ServicesPage">Services</RouterLink>
          </li>
          <li>
            <div className="iconLoginNav">
              <RouterLink to="/Profile">
                <img src={LoginIcon} />
              </RouterLink>
            </div>
          </li>

          <li>
            <div className="iconNumSe">
              <img src={Telicon} alt="Clinic Number" />
              <span className="iconNumber">02212</span>
            </div>
          </li>
        </div>
      </div>

      <div id="section1">
        <Mainpage />
      </div>
      <div id="section2">
        <Services />
      </div>
      <div id="section3">
        <LandingFaqsAll />
        <Footer />
      </div>
    </div>
  );
}

export default NavWeb;