import React, { Component } from "react"

import "../styles/main.scss"

class Business extends Component {
  render() {
    return (
      <div className="business__text-container">
          <h2 className="business__headline">How Can I Help You?</h2>
          <p className="business__text">I build professional websites 
            <span className="h-display-block h-margin-bottom-30">for small and medium size businesses.</span>
          </p>
          <p className="business__text">Position your brand <span className="business__text--allevated">above</span></p>
      </div>
    )
  }
}

export default Business