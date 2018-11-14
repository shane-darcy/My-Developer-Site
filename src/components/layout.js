import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'

import "../styles/main.scss"

export default ({ children }) => (
  <div>
        <Header />
        {children}
  </div>
)
