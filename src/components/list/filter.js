import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./list.css";

class ListFilter extends Component {
  constructor(props) {
    super(props);

    this.renderFilterItems = this.renderFilterItems.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let selectedLevel = event.currentTarget.getAttribute("data-level");
    let isActive = event.currentTarget.getAttribute("isactive");

    let activeClass = "list-filter-item list-filter-item-active";
    let inactiveClass = "list-filter-item";

    switch (isActive) {
      case "true":
        this.props.store.changeLevelFilter(null);
        event.currentTarget.className = inactiveClass;
        event.currentTarget.setAttribute("isactive", "false");
        break;
      case "false":
        this.props.store.changeLevelFilter(selectedLevel);
        document.querySelectorAll(".list-filter-item").forEach(item => {
          item.className = inactiveClass;
        });
        event.currentTarget.setAttribute("isactive", "true");
        event.currentTarget.className = activeClass;
    }
  }

  renderFilterItems() {
    let arr = [];

    for (let i = 15; i >= 1; i--) {
      let item = (
        <div
          className="list-filter-item"
          isactive="false"
          data-level={i}
          onClick={this.handleClick}
          key={i}
        >
          <span className="list-filter-item-text">{i}</span>
        </div>
      );

      arr.push(item);
    }

    return arr;
  }

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
