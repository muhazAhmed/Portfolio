import React from "react";
import "./skills.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import mongodb from "../../assets/mongodb.svg";
import angular from "../../assets/angular.svg";
import tailwind from "../../assets/tailwind.svg";
import firebase from "../../assets/firebase.svg";
import git from "../../assets/git.svg";
import sass from "../../assets/sass.svg";
import rn from "../../assets/react-native.svg";
import aws from "../../assets/aws.svg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="d-flex align-items-center mb-5">
        <h2>Skills</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      <div className="images">
        <img src={html} title="HTML" />
        <img src={css} title="CSS" />
        <img src={javascript} title="JavaScript" />
        <img src={react} title="React" />
        <img src={nodejs} title="NodeJs" />
        <img src={mongodb} title="MongoDB" />
        <img src={angular} title="Angular" />
        <img src={rn} title="React Native" />
        <img src={tailwind} title="Tailwind" />
        <img src={sass} title="SCSS" />
        <img src={firebase} title="Firebase" />
        <img src={aws} title="AWS" />
        <img src={git} title="GIT" />
      </div>
    </div>
  );
};

export default Skills;
