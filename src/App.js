import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import appStore from "./store";
import data from "./songs.json";
import Header from "./components/header/";
import List from "./components/list/";
import Loading from "./components/loading";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    props = this.props;
  }
  async componentDidMount() {
    //act like we're lagging all night
    await setTimeout(() => this.loadData(), 5000);
  }

  loadData() {
    this.props.store.updateData(data);
    this.setState({ loading: false }, this.props.store.hideLoader());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List />
        {this.props.store.loading && <Loading />}
      </div>
    );
  }
}

App = observer(App);

export default App;
