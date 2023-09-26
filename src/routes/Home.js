import React from "react";
import Navbar from "../components/Navbar";
import { Carousel, Container } from "react-bootstrap";
import Hamburger from "../components/Hamburger";
import Mycarousel from "../components/Mycarousel";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <div>
        <Hamburger />
        <Navbar />
        <Mycarousel />
      </div>
      <h1>Content</h1>
    </div>
  );
};

export default Home;
