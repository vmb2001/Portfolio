import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";
import profile_pic from "../images/p8.jpg";
import home from "../images/home.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="body-container">
        <div className="f-container"></div>
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
