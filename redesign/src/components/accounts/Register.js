import React from "react";
import { Form, Row, Card, CardDeck, Container, Button } from "react-bootstrap";
import image1 from "../assets/RegistrationImages/design-1.png";
import image2 from "../assets/RegistrationImages/design-2.png";
import image3 from "../assets/RegistrationImages/design-3.png";

const Register = () => {
  return (
    <main>
        <Container>
            <CardDeck>
                <Card>
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
                        </Form>
                    </Card.Body>
                    <Button href="/account">
                        Create My Account
                    </Button>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Submit Designs</Card.Title>
                        <p><a href="">Learn More</a> about submitting your artwork &#38; the licensing process.</p>
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

<div class="page-width">
<h1 class="text-center section-header">Create an Account</h1>
<div class="grid">    
    <div class="grid__item medium-up--one-half">
        <div class="login-box eq" style="height: 658px;">
            <div id="CustomerRegisterForm" class="form-vertical">
                <form method="post" action="/account" id="RegisterForm" accept-charset="UTF-8" novalidate="novalidate">
                    <input type="hidden" name="form_type" value="create_customer"/>
                    <input type="hidden" name="utf8" value="✓"/>
                    <label for="RegisterForm-FirstName">First Name</label>
                    <input type="text" name="customer[first_name]" id="RegisterForm-FirstName" autocomplete="given-name"/>
                    <label for="RegisterForm-LastName">Last Name</label>
                    <input type="text" name="customer[last_name]" id="RegisterForm-LastName" autocomplete="family-name"/>
                    <label for="RegisterForm-email">Email*</label>
                    <div class="form-row">
                        <input type="email" name="customer[email]" id="RegisterForm-email" class="" autocorrect="off" autocapitalize="off" autocomplete="email" aria-required="true"/>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <label for="RegisterForm-password">Password*</label>
                    <div class="form-row">
                        <input type="password" name="customer[password]" id="RegisterForm-password" class="" aria-required="true"/>
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div>
                        <input type="hidden" name="customer[accepts_marketing]" value=""/>
                        <input type="checkbox" name="customer[accepts_marketing]" checked="checked"/>
                        <label for="marketing" style="display:inline; float:none;line-height:18px;font-size:14px;">Subscribe to stay updated with new products and offers!</label>
                    </div>
                    <div>
                        <input type="checkbox" id="agree"/>
                        <label for="agree" style="display:inline; float:none;line-height:18px;font-size:14px;">I agree to the <a href="https://shirtpunch-store.myshopify.com/pages/terms-of-use" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">Terms of Use</a>.</label>
                    </div>
                    <p class="text-center">
                        <input type="submit" name="create" value="Create My Account" class="btn"/>
                    </p>
                </form>
            </div>
        </div>
    </div>
    <div class="grid__item medium-up--one-half">
        <div class="login-box eq" style="height: 658px;">  
            <h3>Submit Designs</h3>
            <p><a href="https://shirtpunch-store.myshopify.com/pages/artwork" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">Learn More</a> about submitting your artwork &amp; the licensing process.</p>
            <div class="design-wrap ">
                <div class="design-img">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0278/2835/5139/files/design-1.png?v=1594991943" alt=""/>
                </div>
                <span class="design-txt">RECEIVE 10% OF SALES</span>
            </div>
            <div class="design-wrap">
                <div class="design-img">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0278/2835/5139/files/design-2.png?v=1594991943" alt=""/>
                </div>
                <span class="design-txt">REACH A GLOBAL AUDIENCE</span>
            </div>
            <div class="design-wrap ">
                <div class="design-img">
                    <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0278/2835/5139/files/design-3.png?v=1594991943" alt=""/>
                </div>
                <span class="design-txt">LET US DO THE WORK</span>
            </div>
        </div>
    </div>  
</div>
</div>