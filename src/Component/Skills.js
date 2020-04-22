import React, {Component} from "react";
import {Carousel, Col, Row} from "react-bootstrap";

class Skills extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Web-Developer-Skills-1.jpg"
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
                    <Col>

                    </Col>
                </Row>

            </>
        );
    }
}

export default Skills;