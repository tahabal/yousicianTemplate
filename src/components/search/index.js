import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./search.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.store.handleSearch(event.target.value);
  }

  render() {
    return (
      <div className="searchBar-container">
        <input
          type="text"
          className="searchBar"
          placeholder="Enter search parameters."
          value={this.props.store.searchKeyword}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

SearchBar = inject("store")(observer(SearchBar));

export default SearchBar;
