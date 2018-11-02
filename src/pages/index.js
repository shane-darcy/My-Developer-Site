import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
      <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <h1>Hi people, it's Shane here!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
