import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Message from "./Message";
import "./Burger.css"
import burgerImg from "../imgs/burger.png";

class Burger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerEaten: [],
    };
    this.eatingHandle = this.eatingHandle.bind(this);
  }
  eatingHandle() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState((st) => ({
      burgerEaten: [...st.burgerEaten, { x, y }],
    }));
  }
  render() {
    let img=this.state.burgerEaten.map((burger, i) => {
      return <img 
      src={burgerImg} 
      style={{ top: `${burger.y}px`, right: `${burger.x}px` }} 
      alt="burger image"
      />;
    });

    return (
      <div className="burger">
       
        <Message>
          <h3>Burger Eaten-{this.state.burgerEaten.length}</h3>
          <div>
            {/* <button onClick={this.eatingHandle}>NOM NOM NOm</button> */}
            <button class="nom" role="button" onClick={this.eatingHandle}>NOM NOM</button>
          </div>
          <NavLink to="/">Go Back</NavLink>
        </Message>
        {img}
      </div>
    );
  }
}

export default Burger;




