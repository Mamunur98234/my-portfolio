import "./workcards.css"
import { NavLink } from "react-router-dom"


import React from 'react'

const workcards = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="projectImage" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-detail">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to= {props.view} className="btn">View</NavLink>
                        <NavLink to= "google.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  );
}

export default workcards
