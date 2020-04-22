import React, {Component} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Row>
                    <Col md={4}>
                        <Card style={{width: '100%', marginTop: '20px'}}>
                            <Card.Img variant="top" src="2020-04-22 13.05.01.jpg"/>
                            <Card.Body>
                                <Card.Title>

                                    Web Developer

                                </Card.Title>
                                <Card.Text>
                                    This is Zahra Teymouri, I am Front-End Developer.
                                    <p> living in Genova, Italy. </p>
                                    <p> Here is my personal website and I would like to share my projects.</p>
                                </Card.Text>
                                <Button variant="outline-info" onClick={this.clickHandlerButton}>More
                                    Information</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={8}>
                        <Card style={{ width: '100%', marginTop: '200px' }}>
                            <Card.Body>
                                <Card.Title>I can help.</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">ZaRa</Card.Subtitle>
                                <Card.Text>
                                    If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch via below link.                                </Card.Text>
                                <Card.Link href="/skills">Skills</Card.Link>
                                <Card.Link href="/contact">Contact me</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            </>
        );
    }
}

export default Home;