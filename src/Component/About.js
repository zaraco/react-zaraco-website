import React, {Component} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Particles from "react-particles-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap, faLaptop, faMapPin, faUniversalAccess, faUniversity} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faBlackTie} from "@fortawesome/free-brands-svg-icons/faBlackTie";

class About extends Component {
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
                                <p><FontAwesomeIcon icon={faLaptop} style={{marginRight: "10px"}}/> Front-End & React
                                    Developer</p>
                                <p><FontAwesomeIcon icon={faMapPin} style={{marginRight: "10px"}}/> Based in Genova,
                                    Italy</p>
                                <p><FontAwesomeIcon icon={faGithub} style={{marginRight: "10px"}}/> <a
                                    href="https://github.com/zaraco" target='_blank'>My Github</a></p>
                                <p><FontAwesomeIcon icon={faLinkedin} style={{marginRight: "10px"}}/> <a
                                    href="https://www.linkedin.com/in/zaraco/" target='_blank'>My Linkedin</a></p>

                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="experience">
                    <Row className="content">
                        <Col md={4}>
                            <h4><FontAwesomeIcon icon={faBlackTie} style={{marginRight: "10px"}}/>
                                Experience
                            </h4>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Freelance</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">React Developer</Card.Subtitle>
                                    <Card.Text>
                                        I am working as a Freelance developer                                    </Card.Text>
                                    <Card.Text>
                                        Here's a selection of some recent work. For more up to the minute work, you can
                                        visit me on Github.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/zaraco" target='_blank'>Github</Card.Link>
                                    <Card.Link href="http://zara-co.com/contact" target='_blank'>Contact me</Card.Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Bazyad</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Javascript Developer</Card.Subtitle>
                                    <Card.Text>
                                                                            </Card.Text>
                                    <Card.Text>
                                        Here's a selection of some recent work. For more up to the minute work, you can
                                        visit me on Github.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/zaraco" target='_blank'>Github</Card.Link>
                                    <Card.Link href="http://zara-co.com/contact" target='_blank'>Contact me</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className="education">
                    <Row className="master">
                        <Col md={{span: 7, offset: 1}}>
                            <h4><FontAwesomeIcon icon={faGraduationCap} style={{marginRight: "10px"}}/>
                                Education
                            </h4>
                            <p><FontAwesomeIcon icon={faUniversity} style={{marginRight: "10px"}}/>
                                University of Mazandaran</p>
                            <p>
                                I was a master’s student at University of Mazandaran, was studying Business Management
                                (Change Management); I graduated in February of 2017.
                            </p>

                            <p>
                                My Final Thesis : "Identifying and Classify Success Factors in International Business
                                Negotiations with Iranian Businessmen"
                            </p>
                        </Col>


                        <Col md={3}>
                            <Image className="image" src="Uni.jpg"/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default About;
