import React, { Component } from "react";
import "./rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarFull,
  faStarHalfAlt as faStarHalf
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

class StarRating extends Component {
  state = {
    hoverState: null,
    rating: this.props.rating
  };

  handleClick = event => {
    let newRating = event.currentTarget.getAttribute("data-rating");
    this.setState({
      rating: newRating
    });
  };

  renderStars = (full, half, empty) => {
    let counter = 0;
    let arr = [];

    for (let i = 0; i < full; i++) {
      counter++;
      arr.push(
        <div key={"full" + i} onClick={this.handleClick} data-rating={counter}>
          <FontAwesomeIcon
            icon={faStarFull}
            key={counter}
            className="full-star"
          />
        </div>
      );
    }

    for (let i = 0; i < half; i++) {
      counter++;
      arr.push(
        <div key={"half" + i} onClick={this.handleClick} data-rating={counter}>
          <FontAwesomeIcon
            icon={faStarHalf}
            key={counter}
            className="half-star"
            onClick={this.handleClick}
          />
        </div>
      );
    }

    for (let i = 0; i < empty; i++) {
      counter++;
      arr.push(
        <div key={"empty" + i} onClick={this.handleClick} data-rating={counter}>
          <FontAwesomeIcon
            icon={faStarEmpty}
            key={counter}
            className="empty-star"
            onClick={this.handleClick}
          />
        </div>
      );
    }

    return arr;
  };

  render() {
    let rating = Math.round(this.state.rating * 2) / 2;
    let fullStarCount = Math.floor(rating);
    let halfStarCount = rating === fullStarCount ? 0 : 1;
    let emptyStarCount = 5 - fullStarCount - halfStarCount;

    return (
      <div className="rating-container">
        {this.renderStars(fullStarCount, halfStarCount, emptyStarCount)}
      </div>
    );
  }
}

export default StarRating;
