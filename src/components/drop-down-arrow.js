import React, { Component } from "react"
import { Link } from 'gatsby'
import dropDown from "../images/drop-down-arrow.svg"

import "../styles/main.scss"

class DropDownArrow extends Component {
  render() {
    return (
      <div style={{margin: `0 auto`}}>
        <Link to="/page-2/">
          <button className="drop-down">
            <img className="drop-down__arrow" src={dropDown} alt="drop down arrow"/>
            <span className="drop-down__hidden-text">click to learn more about Shane Darcy</span>
          </button>
        </Link>
      </div>
    )
  }
}

export default DropDownArrow