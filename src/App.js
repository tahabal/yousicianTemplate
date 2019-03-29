import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./App.css";
import Header from "./components/header/";
import List from "./components/list/";
import Loading from "./components/loading";

class App extends Component {
  render() {
    const renderLoading = () => {
      return this.props.store.loading && <Loading />;
    };

    return (
      <div className="App">
        <Header />
        <List />
        {renderLoading()}
      </div>
    );
  }
}

App = inject("store")(observer(App));

export default App;
