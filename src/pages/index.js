import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Title from '../components/title'
import ContactMe from '../components/contact-me'
import DropDownArrow from '../components/drop-down-arrow'
import Business from '../components/business'

import "../styles/main.scss"

const IndexPage = () => (
 
<Layout>

    <div>
    <Header />
        <div className="home__content-container">
            <div className="home__title-container">
                <Title />
                <DropDownArrow />
            </div>
            <div className="home__text-container">
                <p className="home__text">i build professional websites for small to medium size businesses</p>
                <p className="home__text">driven impressions in the digital age</p>
                <p className="home__text">position your brand above</p>
            </div>
            < ContactMe />
        </div>
    </div>
    <Link to="/page-2/"></Link>
</Layout>
)

export default IndexPage
