import React from "react"
import { Link } from "gatsby"

import "../styles/main.scss"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className="header__links" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
    <header className="header">
        <Link to="/" className="header__links">
          <h3 style={{ display: `inline` }}>[logo goes here]</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink  to="/">Home</ListLink>
          <ListLink  to="/about/">About</ListLink>
          <ListLink  to="/contact/">Contact</ListLink>
        </ul>
      </header>
    {children}
  </div>
)
