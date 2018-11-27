import React, { Component } from "react"
import dropDown from "../images/drop-down-arrow.svg"

import "../styles/main.scss"

class DropDownArrow extends Component {
  render() {
    return (
        <button className="drop-down" onClick={this.props.businessClick}>
          <img className={this.props.showComponent ? 'drop-down__arrow is-active': 'drop-down__arrow'} src={dropDown} alt="drop down arrow"/>
          <span className="drop-down__hidden-text">click to learn more about Shane Darcy</span>
        </button>
    )
  }
}

export default DropDownArrow