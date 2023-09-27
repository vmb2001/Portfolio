import React from "react";
import home from "../images/home.jpg";
import about from "../images/about.jpg";
import contact from "../images/contact.jpg";
import { Carousel } from "react-bootstrap";
import profile_pic from "../images/profile_pic.jpg";
import "./Mycarousel.css";

const Mycarousel = () => {
  return (
    <div className="container-f">
      {/* <img className="prof_pic" src={profile_pic}></img> */}
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img className="carousel-img" src={home} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="carousel-img" src={about} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
