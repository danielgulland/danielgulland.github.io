import React from "react";
import {Table, Container, Row, Col, Dropdown, DropdownButton, Form, Button, Modal} from "react-bootstrap"
import youth from "../assets/Size Charts/1_-_Youth.png";
import unisex from "../assets/Size Charts/2_-_Unisex.png";
import tall from "../assets/Size Charts/3_-_Tall.png";
import fittedMens from "../assets/Size Charts/4_-_Fitted_Mens.png";
import fittedWoman from "../assets/Size Charts/5_-_Fitted_Woman.png";
import tankTop from "../assets/Size Charts/6_-_Tank_Top.png";
import longSleeve from "../assets/Size Charts/7_-_Long_Sleeve.png";
import crewneck from "../assets/Size Charts/8_-_Crewneck.png";
import pullover from "../assets/Size Charts/9_-_Pullover.png";
import zipHoodie from "../assets/Size Charts/10_-_Zip_Hoodie.png";

import mystery from "../assets/mysteryshirt.png";
import littleshark from "../assets/littleshark.png";
import cartbat from "../assets/TeeDetails/manbat2.png";


function MyVerticallyCenteredModal(props) {
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Size Charts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img class="img-fluid" src={youth}/>
        <img class="img-fluid" src={unisex}/>
        <img class="img-fluid" src={tall}/>
        <img class="img-fluid" src={fittedMens}/>
        <img class="img-fluid" src={fittedWoman}/>
        <img class="img-fluid" src={tankTop}/>
        <img class="img-fluid" src={longSleeve}/>
        <img class="img-fluid" src={crewneck}/>
        <img class="img-fluid" src={pullover}/>
        <img class="img-fluid" src={zipHoodie}/>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Cart = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <main>
      <br/>
      <h1>Your Cart</h1>
      <Container>
        <Form.Group>
          <Row>
            <br/>
            <br/>
          </Row>
          <Row>
          <Col>
              <img
                className="d-block w-100"
                src={mystery}
              />
          </Col>
          <Col>
          <Form.Label as="h1" column="lg" lg={3}>Mystery Shirt</Form.Label>
          <br/>
          <Form.Label column="lg" id="shirt-price" value="5" lg={3}>$5.00</Form.Label><br/>
            <DropdownButton variant="Secondary" id="shirt-type" title="Shirt Type">
              <Dropdown.Item href="#/action-1">Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Youth</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tall</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Mens</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Women</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Premium, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Tank Top, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Long Sleeve, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Crewneck Sweater, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Pullover Hoodie, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Zippered Hoodie, Unisex</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Poster</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Magnet</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Sticker</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant="Secondary" id="shirt-size" title="Shirt Size">
              <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
              <Dropdown.Item href="#/action-4">XL</Dropdown.Item>
              <Dropdown.Item href="#/action-5">2XL</Dropdown.Item>
              <Dropdown.Item href="#/action-6">3XL</Dropdown.Item>
              <Dropdown.Item href="#/action-7">4XL</Dropdown.Item>
              <Dropdown.Item href="#/action-8">5XL</Dropdown.Item>
              <Dropdown.Item href="#/action-9">6XL</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" onClick={() => setModalShow(true)}>Size Charts</Button>
                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
                <br/><br/>
            <Form.Label>Quantity:</Form.Label>
              <Form.Control as="select" size="lg" id="quantity" custom>
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                  <option value="1">4</option>
                  <option value="1">5</option>
                  <option value="1">6</option>
              </Form.Control>
                <br/>
                <br/>
              <Button variant="success">Add to cart</Button>
          </Col>
          </Row>
          <br/>
          <br/>
          <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Details</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img  width="60" height="60" src={littleshark} alt=""/>
                </td>
                <td>
                  <h4>The Little Shark</h4>
                  Type: T-Shirts, Unisex
                  <br/>
                  Size: Small
                </td>
                <td>$13.00</td>
                <td>              
                  <Form.Control as="select" size="sm" id="quantity" custom>
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                      <option value="1">6</option>
                  </Form.Control></td>
                <td>$13.00</td>
                <td>
                  <Button size="sm" variant="danger">Delete Item</Button>
                </td>
              </tr>
              <tr>
                <td><img  width="60" height="60" src={cartbat} alt=""/></td>
                <td>
                <h4>Bat041</h4>
                  Type: T-Shirts, Mens
                  <br/>
                  Size: Large
                </td>
                <td>$12.00</td>
                <td>              
                  <Form.Control as="select" size="sm" id="quantity" custom>
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                      <option value="1">6</option>
                  </Form.Control></td>
                <td>$12.00</td>
                <td>
                  <Button size="sm" variant="danger">Delete Item</Button>
                </td>
              </tr>
            </tbody>
          </Table>
          </Row>
          <br/>
          <Row>
          <Col sm={8}></Col>
          <Col sm={4}><h1 style={{textAlign: 'rtl'}}>Subtotal: $25.00</h1></Col>
          </Row>
          <br/>
          <Row>
          <Col sm={4}></Col>
          <Col md={{ span: 5, offset: 7 }}>
            <Button size="md" variant="info">Continue Shopping</Button>
            <Button size="md" variant="danger">Empty Cart</Button>
            <Button size="md" variant="success">Check Out</Button>
          </Col>
          </Row>
        </Form.Group>
      </Container>
    </main>
  );
};

export default Cart;
