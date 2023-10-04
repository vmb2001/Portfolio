import React from "react";
import Mycarousel from "../components/Mycarousel";
import Image from "react-bootstrap/Image";
import phone from "../images/phone.jpg";
import "./Contact.css";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="contact-body">
      <div className="container ">
        <h1 className="heading">CONTACT ME</h1>
        <Image src={phone} fluid className="bg-img" />;
        <div className="icon-grp">
          <a href="https://www.linkedin.com" className="youtube social m-5">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.facebook.com" className="facebook social m-5">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className="twitter social m-5">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="instagram social m-5">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
// /"homepage": "https://vmb2001.github.io/Portfolio",
