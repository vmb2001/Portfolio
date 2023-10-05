import React from "react";
import home from "../images/view.jpg";
import contact from "../images/road.jpg";
import { Carousel } from "react-bootstrap";
import "./Mycarousel.css";

const Mycarousel = () => {
  return (
    <div className="car-body">
      <div className="carousel-container">
        <div className="heading">ABOUT ME</div>
        <Carousel fade>
          <Carousel.Item>
            <img className="carousel-img" src={home} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img" src={contact} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Mycarousel;
