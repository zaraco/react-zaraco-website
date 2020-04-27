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
                },
                {
                    name: "Css",
                    percent: 80
                },{
                    name: "WordPress",
                    percent: 80
                },
                {
                    name: "Bootstrap",
                    percent: 90
                },{
                    name: "Html",
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
                <Row className="rowskills">
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    src="what-is-a-web-developer.jpg"
                                    alt="First Refinery"
                                    style={{width: "100%", height: "370px", objectFit: "cover"}}
                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    src="Top-10-Tips-To-Learn-JavaScript.jpg"
                                    alt="Second Refinery"
                                    style={{width: "100%", height: "370px", objectFit: "cover"}}

                                />

                            </Carousel.Item>

                            <Carousel.Item>
                                <img
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

                        <Jumbotron className= 'projects' fluid style={{marginTop: '80px'}}>

                            <h1>What I've been up to.</h1>
                            <p>
                                Here's a selection of some recent work. For more up to the minute work, you can visit me on
                                <a href="https://github.com/zaraco" target='_blank' > Github.</a>
                            </p>

                        </Jumbotron>

                    </Col>



                    <Col md={6} className="skills">
                        <Card style={{marginTop: '40px'}} className='body'>

                            <Card.Body>

                                <h1>Skills</h1>

                                <Card.Text>These are my skills. You can see in below: </Card.Text>

                                <p> {progressBar}</p>

                            </Card.Body>
                        </Card>
                    </Col>


                </Row>





            </>
        );
    }
}

export default Skills;