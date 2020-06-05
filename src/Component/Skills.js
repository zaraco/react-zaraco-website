import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'
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
                    name: "Redux",
                    percent: 50
                },
                {
                    name: "React-Native",
                    percent: 40
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

        const {skills} = this.state
        const progressBar = skills.length ? skills.map((skill) =>
            <ProgressBar style={{marginBottom: '10px'}} animated now={skill.percent} label={`${skill.name} ${skill.percent}%`}/>
        ) : ''

        return (
            <>
                <div className="header">
                    <Row className="content">
                        <Col md={{span: 8, offset: 2}}>
                            <h1>Zaraco</h1>
                        </Col>
                    </Row>
                </div>
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
