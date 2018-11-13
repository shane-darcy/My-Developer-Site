import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { TypographyStyle, GoogleFont } from 'react-typography'
// Best practice is to have a typography module
// where you define your theme.
import typography from '../utils/typography'

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <h1 className="">{data.site.siteMetadata.title}</h1>
    )}
  />
)