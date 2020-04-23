import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Skills from "./Component/Skills"


class App extends Component {

    constructor() {
        super();
    }

    clickHandlerButton = () => {
        window.location.href = '/home'
    }

    render() {
        return (
            <>
                <Navbar className='navbar' expand="lg" fixed="top"  variant="dark">
                    <Navbar.Brand href="/">ZaraCo.</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/contact">Contact me</Nav.Link>
                    </Nav>
                </Navbar>
                <Container style={{marginTop: "80px"}}>
                    <Router>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/skills' component={Skills}/>
                            <Route path="/contact" component={Contact}/>

                        </Switch>
                    </Router>

                </Container>

            </>
        );
    }

}

export default App;
