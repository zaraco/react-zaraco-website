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
                    <Col  md={5} style={{
                        marginTop: '50px',
                        fontFamily: "Lucida Console, Courier, monospace",
                        textAlign: 'center'
                    }}>
                        <h4>Contact me</h4>
                        <Image src="049817_522ee6ad10df4030a16e15fbd2d12761_mv2_d_2047_1888_s_2.webp" rounded/>
                        <p> @zahrateymouri</p>
                    </Col>

                    <Col  md={7} style={{marginTop: '60px',fontFamily: "Lucida Console, Courier, monospace",
                        fontSize:'20'}}>

                        <Jumbotron>

                            <FontAwesomeIcon icon={faFacebookSquare}/>
                            <span>
                                 <a href="https://www.facebook.com/zara.teymouri"> Facebook </a>
                            </span>

                            <br/>


                            <FontAwesomeIcon icon={faLinkedin}/>
                            <span>
                                   <a href="https://www.linkedin.com/in/zaraco/"> Linkdin </a>
                            </span>

                            <br/>

                            <FontAwesomeIcon icon={faInstagram}/>
                            <span>
                                 <a href="https://www.instagram.com/zaraaco/"> Instagram </a>
                            </span>

                        </Jumbotron>
                    </Col>

                </Row>

            </>
        );
    }
}

export default Contact;