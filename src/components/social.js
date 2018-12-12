import React, { Component } from "react"
import facebook from "../../public/icons/facebook.png"
import linkedIn from "../../public/icons/linked-in.png"
import github from "../../public/icons/github.png"
import treehouse from "../../public/icons/treehouse.png"
import "../styles/main.scss"


class Social extends Component {
  render() {
    return (
      <aside className="social">
        <a className="social__link" href="https://www.facebook.com/shane.darcy.94">
            <img className="social__icon" src={facebook} alt="Facebook icon" />
        </a>
        <a className="social__link" href="https://www.linkedin.com/in/shane-darcy-a8a5b5148/">
            <img className="social__icon" src={linkedIn} alt="Linked In icon" />
        </a>
        <a className="social__link" href="https://github.com/unhoodwinked">
            <img className="social__icon" src={github} alt="Github icon" />
        </a>
        <a className="social__link" href="https://teamtreehouse.com/shanedarcy">
            <img className="social__icon  social__icon--no-border" src={treehouse} alt="Treehouse icon" />
        </a>
      </aside>
    )
  }
}

export default Social