import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/" className={(val) => (val.isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/burger"
          className={(val) => (val.isActive ? "active" : "")}
        >
          Burger
        </NavLink>
        <NavLink
          to="/pizza"
          className={(val) => (val.isActive ? "active" : "")}
        >
          Pizza
        </NavLink>
        <NavLink
          to="/drinks"
          className={(val) => (val.isActive ? "active" : "")}
        >
          Drinks
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
