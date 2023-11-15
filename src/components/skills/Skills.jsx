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
  const skillsData = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: javascript, title: "JavaScript" },
    { src: react, title: "React" },
    { src: nodejs, title: "NodeJs" },
    { src: mongodb, title: "MongoDB" },
    { src: angular, title: "Angular" },
    { src: rn, title: "React Native" },
    { src: tailwind, title: "Tailwind" },
    { src: sass, title: "SCSS" },
    { src: firebase, title: "Firebase" },
    { src: aws, title: "AWS" },
    { src: git, title: "GIT" },
  ];

  return (
    <div className="skills" id="skills">
      <div className="d-flex align-items-center mb-5">
        <h2>Skills</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      <div className="images" data-aos="fade-up">
        {skillsData.map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.title} title={skill.title} loading="lazy"/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
