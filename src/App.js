import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Card, Col, Container, Form, FormControl, ModalFooter, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import ReactGA from 'react-ga';
import Portfolio from "./Component/Portfolio";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faReact} from "@fortawesome/free-brands-svg-icons";

class App extends Component {

    constructor() {
        super();
        const trackingId = "UA-167384787-1";
        ReactGA.initialize(trackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);

    }



    render() {
        return (
            <>
                <Navbar className='navbar' expand="md" fixed="top" variant="dark">
                    <Navbar.Brand href="/"> <img src='/logo-zaraco.png' style={{height: '70px'}}/>
                        ZaraCo.
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">About me</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/contact">Contact me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{marginBottom: '30px'}}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={About}/>
                            <Route path='/portfolio' component={Portfolio}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </Router>

                </div>

                <ModalFooter>
                    <div className="footer">
                        Copyright ©2020 ZaraCo. made by React <FontAwesomeIcon icon={faReact}/>.
                        <a href="https://github.com/zaraco/react-zaraco-website" target='_blank' style={{marginLeft: "10px"}}><FontAwesomeIcon icon={faGithub}/> See My Source</a>
                    </div>
                </ModalFooter>
            </>

        );
    }

}

export default App;
