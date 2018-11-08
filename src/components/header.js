import React from "react"
import { graphql } from "gatsby"

const Header = ({ data }) => {
  return (
    <h1 className="">{data.site.siteMetadata.title}</h1>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `

export default Header