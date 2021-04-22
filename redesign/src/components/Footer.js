import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import {InputGroup, FormControl, Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="6">
            <h2 className="title">Contact Info</h2>
            <p>
                18 Raitherm Road, North York, ON Canada M6B 1S6
            </p>
            <li className="list-unstyled">
                <a href="#!">info@shirtpunch.com</a>
            </li><br></br>

            <Form.Group controlId="formBasicPassword">
                <h2 className="title">Join our Newsletter</h2>
                <Form.Control type="email" placeholder="Email address" />
                <Button variant="success" type="submit">
                SUBSCRIBE
                </Button>
            </Form.Group>


          </MDBCol>
          <MDBCol md="6">
            <h2 className="title">Quick Links</h2>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Shipping Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQs</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Refund Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Terms Of Service</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
      <MDBBtn size="lg" tag="a" floating social="fb">
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="tw">
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="gplus">
        <MDBIcon fab icon="google-plus-g" />
      </MDBBtn>
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.shirtpunch.com/"> Shirtpunch.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;