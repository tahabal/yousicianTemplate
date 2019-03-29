import React from "react";
import "./loading.css";
import image from "../../assets/logo.png";

const Loading = () => {
  return (
    <div className="spinner-backdrop">
      <div className="spinner-container">
        <img src={image} className="spinner" alt="loading indicator" />
      </div>
    </div>
  );
};

export default Loading;
