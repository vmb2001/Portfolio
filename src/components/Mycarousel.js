import React from "react";
import view from "../images/view.jpg";
import sports from "../images/sports.jpg";
import { Carousel } from "react-bootstrap";
import "./Mycarousel.css";

const Mycarousel = () => {
  return (
    <div className="car-body">
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img className="carousel-img" src={view} />
            <Carousel.Caption>
              <h3>Travels</h3>
              <p>Likes to travel in free time</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img" src={sports} />
            <Carousel.Caption>
              <h3>Sports</h3>
              <p>Has a passion for sports</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Mycarousel;
