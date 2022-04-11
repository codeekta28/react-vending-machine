import React, { Component } from 'react'
import "./Message.css"

 class Message extends Component {
    render() {
        return (
            <div className='message'>
               {this.props.children}
            </div>
        )
    }
}

export default Message
