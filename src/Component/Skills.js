import React, {Component} from "react";
import {Card, Carousel, Col, Container, Jumbotron, ProgressBar, Row} from "react-bootstrap";

class Skills extends Component {

    constructor() {
        super();
        this.state = {
            skills: [
                {
                    name: "React",
                    percent: 80
                },
                {
                    name: "JavaScript",
                    percent: 70
                },
                {
                    name: "Npm",
                    percent: 80
                }, {
                    name: "Css",
                    percent: 80
                },
                {
                    name: "Bootstrap",
                    percent: 90
                },
                {
                    name: "Photoshop",
                    percent: 50
                },
                {
                    name: "Sketch",
                    percent: 70
                },
                {
                    name: "Git",
                    percent: 80
                },

            ]
        }
    }

    render() {

        const {skills} = this.state
        const progressBar = skills.length ? skills.map((skill) =>
            <ProgressBar style={{marginBottom: '10px'}} animated now={skill.percent} label={`${skill.name} ${skill.percent}%`}/>
        ) : ''

        return (
            <>
                <Row>
                    <Col>
                        <Carousel style={{marginTop: '20px'}}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="what-is-a-web-developer.jpg"
                                    alt="First Refinery"
                                    style={{width: "100%", height: "370px", objectFit: "cover"}}
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Top-10-Tips-To-Learn-JavaScript.jpg"
                                    alt="Second Refinery"
                                    style={{width: "100%", height: "370px", objectFit: "cover"}}

                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="ReactJS.png"
                                    alt="Third Refinery"
                                    style={{width: "100%", height: "370px", objectFit: "cover"}}

                                />

                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Card style={{marginTop: '40px'}}>

                            <Card.Body>

                                <h1>Skills</h1>

                                <Card.Text>These are my skills. You can see in below</Card.Text>

                                <p> {progressBar}</p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>

                        <Jumbotron fluid style={{marginTop: '80px'}}>
                            <Container>
                                <h1>What I've been up to.</h1>
                                <p>
                                    Here's a selection of some recent work. For more up to the minute work you can visit me on
                                    <a href="https://github.com/zaraco"> github.</a>
                                </p>
                            </Container>
                        </Jumbotron>

                    </Col>

                </Row>





            </>
        );
    }
}

export default Skills;