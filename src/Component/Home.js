import React, {Component} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

class Home extends Component {
    constructor() {
        super();
    }

    clickHandlerButton = () => {
        window.location.href = '/skills'
    }

    render() {
        return (
            <div className="home">
                <Row>
                    <Col md={4}>
                        <Card className= 'homecart1'>
                            <Card.Img variant="top" src="2020-04-22 13.05.01.jpg"/>
                            <Card.Body>
                                <Card.Title>

                                    <h2>Web Developer</h2>

                                </Card.Title>
                                <Card.Text>
                                    This is Zahra Teymouri, I am a Front-End & React Developer.
                                    <p> living in Genova, Italy. </p>
                                    <p> Here is my personal website and I would like to share my projects.</p>
                                </Card.Text>
                                <Button variant="outline-info" onClick={this.clickHandlerButton} size='lg'>My Skills</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card className='homecart2' >
                            <Card.Body>

                                <Card.Title>
                                    <h2>I can help.</h2>
                                </Card.Title>

                                <Card.Subtitle className="mb-2 text-muted">ZaraCo.</Card.Subtitle>
                                <Card.Text>
                                    If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch via the below link.                                </Card.Text>
                                <Card.Link href="/contact">Contact me</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;