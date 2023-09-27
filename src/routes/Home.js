import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Container } from "react-bootstrap";
import Hamburger from "../components/Hamburger";
import Mycarousel from "../components/Mycarousel";
import Sidebar from "../components/Sidebar";
import "./Home.css";
import profile_pic from "../images/profile_pic.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="body-container">
        <div className="f-container">
          <h1>Amelia Clark</h1>
        </div>
        <div className="s-container"></div>
        <div>
          <img src={profile_pic} alt="profile pic" className="prof_pic" />
        </div>
      </div>
    </div>
  );
};

export default Home;
