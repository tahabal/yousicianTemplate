import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./list.css";

class ListFilter extends Component {
  handleClick = async (selectedLevel, event) => {
    let isActive = this.props.store.currentLevelFilterValue === selectedLevel;

    this.props.store.showLoader();
    //mimic some network lag
    const fauxLag = ms => new Promise(resolve => setTimeout(resolve, ms));
    await fauxLag(400);

    if (isActive) {
      this.props.store.changeLevelFilter(null);
    } else {
      this.props.store.changeLevelFilter(selectedLevel);
    }

    this.props.store.hideLoader();
  };

  renderFilterItems = () => {
    let arr = [];

    for (let i = 15; i >= 1; i--) {
      let isActive = this.props.store.currentLevelFilterValue === i;
      let item = (
        <div
          className={
            "list-filter-item " +
            (isActive
              ? "list-filter-item list-filter-item-active"
              : "list-filter-item")
          }
          onClick={event => this.handleClick(i, event)}
          key={i}
        >
          <span className="list-filter-item-text">{i}</span>
        </div>
      );

      arr.push(item);
    }

    return arr;
  };

  render() {
    return (
      <div className="list-filter-container">
        <div className="list-filter-items">{this.renderFilterItems()}</div>
        <div className="list-filter-arrow-container">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="list-filter-arrow"
          />
        </div>
      </div>
    );
  }
}

ListFilter = inject("store")(observer(ListFilter));
export default ListFilter;
