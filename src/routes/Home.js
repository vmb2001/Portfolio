import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Container } from "react-bootstrap";
import Hamburger from "../components/Hamburger";
import Mycarousel from "../components/Mycarousel";
import Card from "../components/Card";
import "./Home.css";
import profile_pic from "../images/p6.jpg";
import home from "../images/home.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="body-container">
        <div className="f-container">
          {/* <img src={home} className="home" /> */}
        </div>
        <div className="s-container">
          <div className="s-box">
            <h1 className="s-header ">SOFTWARE DEVELOPER</h1>
            <h3 className="s-content">Hi, I am a React Developer</h3>
          </div>
        </div>

        <img src={home} className="home" />
        <div className="cont">
          <img src={profile_pic} alt="profile pic" />
          <h1 className="prof_name">Emily Bennet</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
