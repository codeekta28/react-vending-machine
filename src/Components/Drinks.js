import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Drinks.css";
import sodaImg from "../imgs/Soda.png";
import Message from "./Message";

class Drinks extends Component {
  render() {
    return (
      <div className="drinks">
        <img class="image" src={sodaImg} alt="coke" />
        <Message>
          <h1>Coke is my Fav</h1>
          <h3>But i drink Water insted</h3>
          <p>Though i still miss coke</p>
          <NavLink to="/">Go Back</NavLink>
        </Message>
        <img class="image" src={sodaImg} alt="coke" />
      </div>
    );
  }
}

export default Drinks;
