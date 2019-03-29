import React, { Component } from "react";
import { observer } from "mobx-react";
import appStore from "../../store";
import "./search.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    appStore.handleSearch(event.target.value);
  }

  render() {
    return (
      <div className="searchBar-container">
        <input
          type="text"
          className="searchBar"
          placeholder="Enter search parameters."
          value={appStore.searchKeyword}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SearchBar = observer(SearchBar);

export default SearchBar;
