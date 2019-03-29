import React, { Component } from "react";
import "./App.css";

import appStore from "./store";

import data from "./songs.json";

import Header from "./components/header/";
import SearchBar from "./components/search/";

class App extends Component {
  componentDidMount() {
    appStore.updateData(data);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
