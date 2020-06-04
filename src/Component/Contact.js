import React, {Component} from "react";
import {Col, Image, Jumbotron, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


class Contact extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <>
                <Row>
                    <Col className='contacts' md={5} >

                        <h5>Get in touch me</h5>
                        <Image src='logo-zaraco.png' style={{  height: '180px'}}/>
                        <p> @zahrateymouri</p>
                    </Col>

                    <Col md={7}>

                        <Jumbotron className='info'>

                            <h1>Let's get social</h1>

                            <h3>Follow my online page on Facebook and profiles on Linkedin and Instagram. </h3>

                            <FontAwesomeIcon icon={faFacebookSquare} />
                            <span>
                                 <a href="https://www.facebook.com/zara.teymouri" target='_blank' > Facebook </a>
                            </span>

                            <br/>


                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>
                                   <a href="https://www.linkedin.com/in/zaraco/" target='_blank' > Linkdin </a>
                            </span>

                            <br/>

                            <FontAwesomeIcon icon={faInstagram} />
                            <span>
                                 <a href="https://www.instagram.com/zaraaco/" target='_blank' > Instagram </a>
                            </span>

                        </Jumbotron>
                    </Col>

                </Row>

            </>
        );
    }
}

export default Contact;
