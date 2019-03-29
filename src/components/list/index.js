import React, { Component } from "react";
import { observer } from "mobx-react";
import appStore from "../../store";

import ListItem from "./listItem";
import "./list.css";

class List extends Component {
  render() {
    const data = appStore.data;

    console.log(data);

    return <div />;
  }
}

List = observer(List);

export default List;
