import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import ListItem from "./listItem";
import ListFilter from "./filter";
import "./list.css";

class List extends Component {
  listContainerRef = React.createRef();

  async componentDidMount() {
    //mimic some network lag
    const fauxLag = ms => new Promise(resolve => setTimeout(resolve, ms));
    await fauxLag(1000);

    this.props.store.fetchData();
    this.props.store.hideLoader();
  }

  handleScroll = async () => {
    //get list element for scroll purposes, calculate stuff
    const el = this.listContainerRef.current;
    let scrollY = el.scrollHeight - el.scrollTop;
    let height = el.offsetHeight;
    let offset = height - scrollY;

    if (offset === 0) {
      //mimic even more lag like we're still rollin' with them 56k's
      this.props.store.showLoader();
      const fauxLag = ms => new Promise(resolve => setTimeout(resolve, ms));
      await fauxLag(500);

      this.props.store.fetchMore();
      this.props.store.hideLoader();
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
    return (
      <div className="list-wrapper">
        <ListFilter />
        <div
          ref={this.listContainerRef}
          className="list-container"
          onScroll={this.handleScroll}
        >
          {this.renderListItems()}
        </div>
      </div>
    );
  }
}

List = inject("store")(observer(List));

export default List;
