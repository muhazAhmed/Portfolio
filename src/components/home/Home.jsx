import React from "react";
import "./home.css";
import DP from "../../assets/dp.png";
import { Button } from "react-bootstrap";
import cv from "../../assets/cv.pdf";

const Home = () => {
  return (
    <div className="home d-flex align-items-center justify-content-around" id="home">
      <div className="body d-flex flex-column" data-aos="slide-right">
        <div className="d-flex align-items-center">
          <h2>Hello</h2>
          <div className="line"></div>
          <i className="fa-solid fa-circle-dot"></i>
        </div>
        <div>
          <h1>I am Muhaz Ahmed</h1>
          <h4>FULL STACK DEVELOPER</h4>
        </div>
        <div className="d-flex align-items-center" style={{gap: "1rem"}}>
          <Button variant="info" href="#contact">Hire Me</Button>
          <Button variant="outline-info" href={cv} download>Download CV</Button>
        </div>
      </div>
      <div className="pic" data-aos="slide-left">
        <img src={DP} alt="Image" />
      </div>
    </div>
  );
};

export default Home;
