import React, { Component } from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import ShowLocal from "../ShowLocal/ShowLocal";
class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="logo-uber" />
        <ShowLocal />
        <a href="#">
          <i className="fas fa-bars" />
        </a>
      </header>
    );
  }
}

export default Header;
