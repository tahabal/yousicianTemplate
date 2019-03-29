import React, { Component } from "react";
import SearchBar from "../search/";
import "./header.css";
import appStore from "../../store";
import logo from "../../assets/logoText.png";

class Header extends Component {
  render() {
    const header = (
      <div className="header-container">
        <div className="header-logo-container">
          <img src={logo} className="header-logo" alt="header logo" />
        </div>

        <SearchBar store={appStore} />
      </div>
    );

    return header;
  }
}

export default Header;
