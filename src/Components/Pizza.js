import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import "./Pizza.css";
import pizzaImg from "../imgs/pizza-animate.png"
class Pizza extends Component {
  render() {
    return (
      <div className="pizza">
          <img src={pizzaImg} alt="pizza" />
        <Message>

          <h1>You can't make everyone happy. You're not pizza.</h1>
          <NavLink to="/">Go Back</NavLink>
        </Message>
        <img src={pizzaImg} alt="pizza" />
      </div>
    );
  }
}

export default Pizza;
