import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import './index.scss'

const IndexPage = () => (
  <Layout className="home__background">
      <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    <p className="text">websites that tell your story</p>
    <h1 className="text">Darcy Development</h1>
    <p className="text">driven impressions in the digital age</p>
    <p className="text">position your brand above</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
