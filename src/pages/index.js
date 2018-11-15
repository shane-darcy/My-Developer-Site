import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import Title from '../components/title'

import "../styles/main.scss"

const IndexPage = () => (
 
<Layout>
    <Header />
    <div className="home__background"></div>
    <Title />
        <div className="home__text-container">
            <p className="home__text">websites that tell your story<i class="far fa-book-open"></i></p>
            <p className="home__text">driven impressions in the digital age</p>
            <p className="home__text">position your brand above</p>
        </div>
    <Link to="/page-2/">Go to page 2</Link>
</Layout>
)

export default IndexPage
