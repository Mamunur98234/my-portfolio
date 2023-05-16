import "./form.css"

import React from 'react'

function form() {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <input type="text" />
            <textarea rows="6" placeholder="type your message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  );
}

export default form
