import React, { Component } from 'react'
import Layout from '../layouts/layout'
import { Link } from 'gatsby'
import Header from '../components/header'
import Title from '../components/title'
import ContactMe from '../components/contact-me'
import DropDownArrow from '../components/drop-down-arrow'
import Business from '../components/business'
import Scroll from 'react-scroll'
import Social from '../components/social'

import "../styles/main.scss"

var ScrollLink = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: true
        };
        this.handleBusinessClick = this.handleBusinessClick.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    // Handles Business Click State
    handleBusinessClick() {
        console.log(this)
        this.setState(prevState => ({
            showComponent: !prevState.showComponent
        }));
    }

    //Handles the Scroll 
    componentDidMount() {
        Events.scrollEvent.register("begin", function() {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register("end", function() {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
      }

    render() {
        return (
            <Layout>
                <Header />
                <div className="home">
                    <aside>
                        <Social />
                    </aside>
                    <div className="home__content-container">
                        <div className="home__title-container">
                            <Title />
                        </div>
                            <Link to="/contact/"><ContactMe /></Link>
                    </div>
                    <div>
                        <ScrollLink
                            activeClass="active"
                            to="firstInsideContainer"
                            spy={true}
                            smooth={true}
                            duration={1500}
                            containerId="containerElement"
                            className="scroll__link"
                            style={{ display: "inline-block", margin: "20px" }}
                        >
                        <DropDownArrow 
                            businessClick={this.handleBusinessClick}  
                            showComponent={this.state.showComponent}
                        />
                        </ScrollLink>
                        <ScrollLink
                            activeClass="active"
                            to="secondInsideContainer"
                            spy={true}
                            smooth={true}
                            duration={1500}
                            containerId="containerElement"
                            className="scroll__link"
                            style={{ display: "inline-block", margin: "20px" }}
                        >
                        <DropDownArrow 
                            businessClick={this.handleBusinessClick}  
                            showComponent={!this.state.showComponent}
                        />
                        </ScrollLink>
                        <Element
                            name="test7"
                            className="scroll__element"
                            id="containerElement"
                            style={{
                                position: "relative",
                                height: "400px",
                                overflow: "scroll",
                                marginBottom: "100px"
                            }}
                        >
                        <Element
                            name="firstInsideContainer"
                            style={{
                            marginBottom: "200px"
                            }}
                        >
                            first element inside container
                        </Element>
                        <Element
                            name="secondInsideContainer"
                            style={{
                            marginBottom: "200px"
                            }}
                        >
                            <Business />
                        </Element>
                        </Element>
                    </div>
                </div>
                <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container-fluid">
                            <div
                                className="collapse navbar-collapse"
                                id="bs-example-navbar-collapse-1"
                            >
                            <ul className="nav navbar-nav">
                                <li>
                                {" "}
                                <a onClick={() => scroll.scrollTo(10)}>Scroll To 100!</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>

                    <Element name="test1" className="scroll__element">
                    test 1
                    </Element>

                    <Element name="test2" className="scroll__element">
                    test 2
                    </Element>

                    <div id="anchor" className="scroll__element">
                    test 6 (anchor)
                    </div>
                    <Element id="same" className="scroll__element">
                    Two links point to this
                    </Element>

                    <a onClick={this.scrollToTop}>To the top!</a>
                </div>
            </Layout>
        );
    }
}

export default IndexPage
