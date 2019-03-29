import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import ListItem from "./listItem";
import "./list.css";

class List extends Component {
  async componentDidMount() {
    //add event listener for infinite scrolling

    document
      .querySelector(".list-container")
      .addEventListener("scroll", this.handleScroll, false);

    //mimic some network lag
    const fauxLag = ms => new Promise(resolve => setTimeout(resolve, ms));

    await fauxLag(1000);
    this.props.store.fetchData();
    this.props.store.hideLoader();
  }

  componentWillUnmount() {
    document
      .querySelector(".list-container")
      .removeEventlistener("scroll", this.handleScroll, false);
  }

  handleScroll = () => {
    const el = document.querySelector(".list-container");
    let scrollY = el.scrollHeight - el.scrollTop;
    let height = el.offsetHeight;
    let offset = height - scrollY;

    if (offset === 0) {
      this.props.store.fetchMore();
    }
  };

  loadData() {
    this.props.store.fetchData();
  }
  renderListItems() {
    return this.props.store.data.map((item, index) => {
      return <ListItem data={item} key={index} />;
    });
  }

  render() {
    return <div className="list-container">{this.renderListItems()}</div>;
  }
}

List = inject("store")(observer(List));

export default List;
