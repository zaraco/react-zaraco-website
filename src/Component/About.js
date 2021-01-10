import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'
import {Button, Card, Col, Container, Image, ProgressBar, Row} from "react-bootstrap";
import Particles from "react-particles-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCode,
    faGraduationCap,
    faLaptop,
    faMapPin, faTasks, faTerminal,
    faUniversalAccess,
    faUniversity
} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faReact} from "@fortawesome/free-brands-svg-icons";
import {faBlackTie} from "@fortawesome/free-brands-svg-icons/faBlackTie";

class About extends Component {
    constructor() {
        super();
        this.state = {
            skillsLeft: [
                {
                    name: "React",
                    percent: 80
                },
                {
                    name: "JavaScript",
                    percent: 80
                },

                {
                    name: "Redux",
                    percent: 80
                },
                {
                    name: "Typescript",
                    percent: 70
                },
                {
                    name: "React-Native",
                    percent: 50
                },

                {
                    name: "Kotlin",
                    percent: 30
                },
                {
                    name: "MongoDB",
                    percent: 60
                },

                {
                    name: "Rest-Api",
                    percent: 70
                },
                {
                    name: "Git",
                    percent: 80
                },

                {
                    name: "Npm",
                    percent: 80
                }],
            skillsRight: [
                {
                    name: "Node.js",
                    percent: 50
                },
                {
                    name: "Express.js",
                    percent: 50
                },
                {
                    name: "Css",
                    percent: 80
                }, {
                    name: "WordPress",
                    percent: 80
                },
                {
                    name: "Bootstrap",
                    percent: 90
                }, {
                    name: "Html",
                    percent: 90
                },
                {
                    name: "Photoshop",
                    percent: 50
                },
                {
                    name: "DigitalArt",
                    percent: 50
                },
                {
                    name: "Sketch",
                    percent: 70
                },

            ]
        }
    }


    render() {
        const {skillsLeft, skillsRight} = this.state
        const progressBarLeft = skillsLeft.length ? skillsLeft.map((skill) =>
            <ProgressBar style={{marginBottom: '10px'}} animated now={skill.percent}
                         label={`${skill.name} ${skill.percent}%`}/>
        ) : ''
        const progressBarRight = skillsRight.length ? skillsRight.map((skill) =>
            <ProgressBar style={{marginBottom: '10px'}} animated now={skill.percent}
                         label={`${skill.name} ${skill.percent}%`}/>
        ) : ''

        return (
            <>
                <div className="header">
                    <Row className="content">
                        <Col md={{span: 8, offset: 2}}>
                            <h1>Zaraco</h1>
                            <h2>Web Developer</h2>
                        </Col>
                    </Row>
                </div>
                <div className="about">
                    <Particles className="particles"/>
                    <div className="content">
                        <h3> About me </h3>
                        <Row>
                            <Col md={{span: 4, offset: 1}}>
                                <Image className="image" src="/images/digiArt.jpg"/>
                            </Col>
                            <Col md={6}>
                                <h4>
                                    Zahra Teymouri (Zaraco)
                                </h4>
                                <p><FontAwesomeIcon icon={faLaptop} style={{marginRight: "10px"}}/> Web Developer</p>
                                <p><FontAwesomeIcon icon={faMapPin} style={{marginRight: "10px"}}/> Based in Milan,
                                    Italy</p>
                                <p><FontAwesomeIcon icon={faGithub} style={{marginRight: "10px"}}/> <a
                                    href="https://github.com/zaraco" target='_blank'>Github</a></p>
                                <p><FontAwesomeIcon icon={faLinkedin} style={{marginRight: "10px"}}/> <a
                                    href="https://www.linkedin.com/in/zaraco/" target='_blank'> Linkedin</a></p>

                            </Col>
                        </Row>

                    </div>
                </div>
                <div className="experience">
                    <Row className="content justify-content-md-center">
                        <Col md={12}>
                            <h4><FontAwesomeIcon icon={faBlackTie} style={{marginRight: "10px"}}/>
                                Experience
                            </h4>
                        </Col>


                        <Col md={3}>
                            <Card className="cart1">
                                <Card.Body>
                                    <Card.Title><FontAwesomeIcon icon={faReact}/>
                                        Web Developer</Card.Title>
                                    <Card.Text>
                                        I am working as a Web developer. </Card.Text>
                                    <Card.Text>
                                        Here's a selection of some recent work. For more up to the minute work, you can
                                        visit me on Github.
                                    </Card.Text>
                                    <Card.Link href="https://github.com/zaraco" target='_blank'>Github</Card.Link>
                                    <Card.Link href="/contact" target='_blank'>Contact me</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="skills">
                    <h4><FontAwesomeIcon icon={faTasks}/>
                        Skills
                    </h4>
                    <Row>
                        <Col md={{span: 4, offset: 2}}>
                            {progressBarLeft}
                        </Col>
                        <Col md={{span: 4}}>
                            {progressBarRight}
                        </Col>
                    </Row>
                </div>

                <div className="education">
                    <Row className="master">
                        <Col md={{span: 7, offset: 1}}>
                            <h4><FontAwesomeIcon icon={faGraduationCap} style={{marginRight: "10px"}}/>
                                Education
                            </h4>
                            <h5><FontAwesomeIcon icon={faUniversity} style={{marginRight: "10px"}}/>
                                University of Mazandaran</h5>
                            <p>
                                I was a master’s student at University of Mazandaran, was studying Business Management
                                (Change Management); I graduated in February of 2017.
                                My Final Thesis : "Identifying and Classify Success Factors in International Business
                                Negotiations with Iranian Businessmen"
                            </p>

                        </Col>


                        <Col md={3}>
                            <Image className="image" src="/images/Uni.jpg"/>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default About;
