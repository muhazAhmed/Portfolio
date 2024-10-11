import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="bg-blur">
      <div className="loader">
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
        <div className="circle">
          <div className="dot"></div>
          <div className="outline"></div>
        </div>
      </div>
      <h1 className="text-lg font-bold">Loading...</h1>
    </div>
  );
};

export default Loader;
