import React, { Component } from 'react'
import Layout from '../layouts/layout'
import { Link } from 'gatsby'
import Header from '../components/header'
import Title from '../components/title'
import ContactMe from '../components/contact-me'
import DropDownArrow from '../components/drop-down-arrow'
import Business from '../components/business'

import "../styles/main.scss"

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {showComponent: false};
        this.handleBusinessClick = this.handleBusinessClick.bind(this);
    }
  
    // function to handle the click
    handleBusinessClick() {
        this.setState(prevState => ({
            showComponent: !prevState.showComponent
        }));
    }

    render() {
        
        // the return() to put your default HTML into the DOM
        return (

            <Layout>

                <div>
                    <Header />
                    <div className="home__content-container">
                        <div className="home__title-container">
                            <Title />
                            <DropDownArrow 
                                style={{margin: `0 auto`}} 
                                businessClick={this.handleBusinessClick}
                            />
                        </div>
                        {
                            this.state.showComponent ?
                                <div>
                                    <div className="home__text-container">
                                        <p className="home__text">i build professional websites for small to medium size businesses</p>
                                        <p className="home__text">driven impressions in the digital age</p>
                                        <p className="home__text">position your brand above</p>
                                    </div>
                                    <ContactMe />
                                </div>
                            :
                            <Business />
                        }
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IndexPage
