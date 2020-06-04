import React, {Component} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Particles from "react-particles-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptop, faMapPin} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
    constructor() {
        super();
    }

    clickHandlerButton = () => {
        window.location.href = '/skills'
    }

    render() {
        return (
            <>
                <div className="header">
                    <Row className="content">
                        <Col md={{span: 8, offset: 2}}>
                            <h1>Zaraco</h1>
                            <h2>Front-End Developer</h2>
                        </Col>
                    </Row>
                </div>
                <div className="about">
                    <Particles className="particles"/>
                    <div className="content">
                        <h3> About me </h3>
                        <Row>
                            <Col md={{span: 4, offset: 1}}>
                                <Image className="image" src="Laptop.jpg"/>
                            </Col>
                            <Col md={6}>
                                <h4>
                                    Zahra Teymouri (Zaraco)
                                </h4>
                                <p><FontAwesomeIcon icon={faLaptop} style={{marginRight: "10px"}}/> Front-End & React Developer</p>
                                <p><FontAwesomeIcon icon={faMapPin} style={{marginRight: "10px"}}/> Based in Genova, Italy</p>
                                <p><FontAwesomeIcon icon={faGithub} style={{marginRight: "10px"}}/> <a href="https://github.com/zaraco" target='_blank'>My Github</a></p>
                                <p><FontAwesomeIcon icon={faLinkedin} style={{marginRight: "10px"}}/> <a href="https://www.linkedin.com/in/zaraco/" target='_blank'>My Linkedin</a></p>

                            </Col>
                        </Row>

                    </div>
                </div>
            </>
        );
    }
}

export default Home;
