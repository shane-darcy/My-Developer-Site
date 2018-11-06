import React from "react"
import { Link } from "gatsby"

import './nav.scss'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className="header__links" to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
    <header className="header">
        <Link to="/" className="header__links" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Darcy Development</h3>
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