import "./prize.css"

import React from 'react'
import {Link} from "react-router-dom"

const pricisingCard = () => {
  return (
    <div className="prising">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>-7 Days-</p>
          <p>-3 Pages-</p>
          <p>-Fetured-</p>
          <p>-Responsive Design</p>
          <Link to= "/contact" className="btn">Purchase Now</Link>
        </div>
        <div className="card">
          <h3>Premium</h3>
          <span className="bar"></span>
          <p className="btc">$ 200</p>
          <p>-5 Days-</p>
          <p>-5 Pages-</p>
          <p>-Fetured-</p>
          <p>-Responsive Design</p>
          <Link to= "/contact" className="btn">Purchase Now</Link>
        </div>
        <div className="card">
          <h3>Business</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>-5 Days-</p>
          <p>-8 Pages-</p>
          <p>-Fetured-</p>
          <p>-Responsive Design</p>
          <Link to= "/contact" className="btn">Purchase Now</Link>
        </div>
      </div>
    </div>
  )
}

export default pricisingCard
