import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Message from './Message'
import "./VendingMachine.css"

class VendingMachine extends Component {
    render() {
        return (
            <div className='vendingMachine'>
                <h1>This is Vending Machine Component</h1>
   
                <ul>
                    <li><NavLink  to="/burger">Burger</NavLink></li>
                    <li><NavLink   to="/pizza">Pizza</NavLink></li>
                    <li><NavLink   to="/drinks">Drinks</NavLink></li>

                </ul>
                <h3>Hello I am a Vending Machine <span>Please order from right side options</span></h3>
            </div>
        )
    }
}

export default VendingMachine
