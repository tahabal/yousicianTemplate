import React from "react";

import StarRating from "../rating/";
import LevelRing from "../level/";
import "./list.css";
import logo from "../../assets/logo.png";

const MaxLevelElement = () => {
  return (
    <span className="list-item-max-level-text">
      MAX
      <br />
      LEVEL
    </span>
  );
};

const ListItem = props => {
  const isItemMaxLevel = props.data.level === 15 ? true : false;
  const containerClass = isItemMaxLevel
    ? "list-item-container list-item-max-level"
    : "list-item-container";

  return (
    <div className={containerClass}>
      {isItemMaxLevel && <MaxLevelElement />}
      <div className="list-item-logo-container">
        <div className="list-item-logo">
          <img src={logo} alt="logo" className="list-item-logo-img" />
        </div>
      </div>
      <div className="list-item-level">
        <LevelRing level={props.data.level} />
      </div>
      <div className="list-item-info">
        <div className="list-item-title">
          <span>{props.data.title}</span>
        </div>
        <div className="list-item-release-info">
          <div className="list-item-rating">
            <StarRating rating={props.data.rating} />
          </div>
          <div className="list-item-artist">
            <span>{props.data.artist}</span>
          </div>
          <div className="list-item-release-date">
            <span>{props.data.released}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
