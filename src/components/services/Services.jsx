import React from "react";
import "./services.css";

const data = [
  {
    img: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-web-development-coding-kiranshastry-lineal-color-kiranshastry.png",
    title: "Web Application Development",
    para: "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design user interface design authoring, including standardised code and proprietary software user experience design and search engine",
  },
  {
    img: "https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-app-development-responsive-web-design-justicon-lineal-color-justicon.png",
    title: "Mobile Application Development",
    para: "We provide a range of mobile application development services including custom mobile development on Android platforms, building cross-platform apps, designing user experience and integrating novel mobile interfaces such as chat and voice",
  },
  {
    img: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-backend-no-code-flaticons-flat-flat-icons.png",
    title: "Backend Development",
    para: "Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.",
  },
];
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="d-flex align-items-center mb-5">
        <h2>Services</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      <div
        className="d-flex align-items-center"
        style={{
          justifyContent: "space-evenly",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {data.map((items, index) => (
          <div key={index} className="cards">
            <img src={items.img} />
            <h3 className="fw-bold">{items.title}</h3>
            <p>{items.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
