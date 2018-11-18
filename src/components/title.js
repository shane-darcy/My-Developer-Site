import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <div className="title">
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
          <h1 className="title__main">{data.site.siteMetadata.title}</h1>
      )}
    />
    <h2 className="title__sub-title">Shane Darcy, Web Developer</h2>
  </div>
)