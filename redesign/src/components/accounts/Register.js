import React from "react";
import { Form, Row, Card, CardDeck, Container, Button, Col } from "react-bootstrap";
import { Checkbox } from "semantic-ui-react";
import image1 from "../assets/RegistrationImages/design-1.png";
import image2 from "../assets/RegistrationImages/design-2.png";
import image3 from "../assets/RegistrationImages/design-3.png";
import "./AccountStyles.css";

const Register = () => {
  return (
    <main>
        <Container className="regWrapper">
            <CardDeck>
                <Card className="formCard">
                    <Col>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="firstName" placeholder="John"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="lastName" placeholder="Smith"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control type="email" placeholder="johnsmith@gmail.com"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control type="password" placeholder="12345"/>
                                </Form.Group>
                                <div className="checkBoxes">
                                    <input type="checkBox" className="subscribeCheck"/>
                                    <label className="checkLabel">Subscribe to stay updated with new products and offers!</label><br/>
                                </div>
                                <div className="checkBoxes">
                                    <input type="checkBox" className="tosCheck"/>
                                    <label className="checkLabel">I agree to the <a href="https://www.shirtpunch.com/policies/terms-of-service">Terms of Use</a>.</label>
                                </div>
                            </Form>
                        </Card.Body>
                    </Col>
                    <Button href="/account">
                        Create My Account
                    </Button>
                </Card>
                <Card className="formCard">
                    <Card.Body>
                        <Card.Title>Submit Designs</Card.Title>
                        <p><a href="https://www.shirtpunch.com/pages/artwork">Learn More</a> about submitting your artwork &#38; the licensing process.</p>
                        <ul className="promotionList">
                            <li>
                                <img src={image1}/>Receive 10% of sales!
                            </li>
                            <li>
                                <img src={image2}/>Reach a global audience
                            </li>
                            <li>
                                <img src={image3}/>Let us do the work
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Row>
                <div id="requirementMessage" class="NoteBox">
                    <p><em>NOTE:</em> All fields with an asterisk(*) are required for registration.</p>
                </div>
            </Row>
        </Container>
    </main>
  );
};

export default Register;