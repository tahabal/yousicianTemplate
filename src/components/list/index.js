import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import ListItem from "./listItem";
import "./list.css";

class List extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.props.store.fetchData();
  }
  renderListItems() {
    const { isSearchFilterActive, searchKeyword, data } = this.props.store;

    console.log("test");

    let dataToRender = isSearchFilterActive
      ? data.filter(
          val =>
            val.title.toLocaleLowerCase("en-EN").includes(searchKeyword) ||
            val.artist.toLocaleLowerCase("en-EN").includes(searchKeyword)
        )
      : data;

    return dataToRender.map(item => {
      return <ListItem data={item} />;
    });
  }

  render() {
    return <div className="list-container">{this.renderListItems()}</div>;
  }
}

List = inject("store")(observer(List));

export default List;
