import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";


class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Router>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/contact" component={Contact}/>

                                </Switch>
                            </Router>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

export default App;
