import "./heroimagestyle.css"

import React, { Component } from 'react'

class heroimage extends Component{
  render(){
    return (
      <div>
        <div className="hero-img">
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
  
};

export default heroimage
