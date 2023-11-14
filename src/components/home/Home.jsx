import React from "react";
import "./home.css";
import DP from "../../assets/dp.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home d-flex align-items-center justify-content-around" id="home">
      <div className="body d-flex flex-column">
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
          <Button variant="info">Hire Me</Button>
          <Button variant="outline-info">Download CV</Button>
        </div>
      </div>
      <div className="pic">
        <img src={DP} alt="Image" />
      </div>
    </div>
  );
};

export default Home;
