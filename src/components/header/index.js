import React, { Component } from "react";
import SearchBar from "../search/";
import "./header.css";
import logo from "./logo.png";

class Header extends Component {
  render() {
    const header = (
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} className="header-logo" alt="header logo" />
        </div>

        <SearchBar />
      </div>
    );

    return header;
  }
}

export default Header;
