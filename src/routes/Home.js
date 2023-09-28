import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Container } from "react-bootstrap";
import Hamburger from "../components/Hamburger";
import Mycarousel from "../components/Mycarousel";
import Card from "../components/Card";
import "./Home.css";
import profile_pic from "../images/profile_pic.jpg";
import home from "../images/home.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="body-container">
        <div className="f-container">
          <img src={home} className="home" />
          <h1 className="prof_name">AMELIA CLARK</h1>
        </div>
        <div className="s-container">
          <img src={home} className="home" />
          {/* <Card></Card> */}
        </div>
        <div>
          <img src={profile_pic} alt="profile pic" className="prof_pic" />
        </div>
      </div>
      <h1>CCCDGs</h1>
    </div>
  );
};

export default Home;
