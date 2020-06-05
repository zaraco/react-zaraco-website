import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css'
import {Button, Card, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Badge from "react-bootstrap/Badge";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            portfolio: [
                {
                    title: 'E-Shopping by React',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/e-shopping-cart-react-sample',
                    image: 'e-shopping-react.png'
                },
                {
                    title: 'E-Shopping by Redux',
                    tags: ['redux', 'react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/e-shopping-cart-react-redux',
                    image: 'e-shopping-redux.png'
                },
                {
                    title: 'Bazyad',
                    tags: ['javaScript', 'css'],
                    description: '',
                    link: 'https://bazyad.com',
                    image: 'bazyad.png'
                },
                {
                    title: 'Social Network by React',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/react-social-network',
                    image: 'social-network.png'
                },
                {
                    title: 'Authentication by React',
                    tags: ['react', 'REST API', 'oAuth', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/react-authentication-api',
                    image: 'authentication.png'
                },
                {
                    title: 'Commercial Website by React',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/react-simple-website',
                    image: 'commercial-website.png'
                },
                {
                    title: 'Todo list by Redux',
                    tags: ['redux', 'react', 'javaScript', 'css'],
                    description: '',
                    link: 'https://github.com/zaraco/react-redux-todolist',
                    image: 'to-do.png'
                },
                {
                    title: 'User List by React',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/react-user-profile',
                    image: 'user-list.png'
                },
                {
                    title: 'Fake API',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/fake-api',
                    image: 'fake-api.png'
                },
                {
                    title: 'User filter',
                    tags: ['react', 'javaScript', 'css', 'bootstrap'],
                    description: '',
                    link: 'https://github.com/zaraco/react-user-list-filter',
                    image: 'user-filter.png'
                }
            ]
        }

    }

    render() {

        const portfolioDOM = this.state.portfolio ? this.state.portfolio.map((item) =>
            <Col md={4}>
                <Card className="portfolio-card">
                    <Card.Img variant="top" src={`/images/portfolio/${item.image}`} style={{
                        objectFit: "cover",
                        height: "200px"
                    }}/>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                            {(item.tags) ? item.tags.map((tag) =>
                                <Badge variant="dark" style={{marginRight: "10px"}}>
                                    {tag}
                                </Badge>
                            ) : ''}
                        </Card.Text>

                        <Button variant="dark" onClick={() => {window.location = item.link}}><FontAwesomeIcon icon={faGithub}/> See the Source</Button>

                    </Card.Body>
                </Card>
            </Col>
        ) : ''

        return (
            <>
                <div className="portfolio-header">
                    <Row className="content">
                        <Col md={{span: 8, offset: 2}}>
                            <h1>Zaraco</h1>
                            <h2>Portfolio</h2>
                        </Col>
                    </Row>
                </div>

                <div className="portfolio">
                    <Row>
                        {portfolioDOM}
                    </Row>
                </div>
            </>
        );
    }
}


export default Portfolio;
