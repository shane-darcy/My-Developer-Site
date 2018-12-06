import React from "react"
import Header from '../components/header'

import "../styles/main.scss"

export default ({ children }) => (
  <div>
      <Header />
        {children}
  </div>
)