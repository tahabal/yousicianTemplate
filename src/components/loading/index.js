import React from "react";
import { inject, observer } from "mobx-react";
import "./loading.css";
import image from "../../assets/logo.png";

let Loading = () => {
  return (
    <div className="spinner-backdrop">
      <div className="spinner-container">
        <img src={image} className="spinner" alt="loading indicator" />
      </div>
    </div>
  );
};

Loading = inject("store")(observer(Loading));

export default Loading;
