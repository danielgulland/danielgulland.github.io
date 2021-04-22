import React from "react";
import "../styles.css";
import {Carousel, ListGroupItem, ListGroup, CardDeck ,Card, Container, Row, Col, Image, Dropdown, DropdownButton, Form, Button, Modal} from "react-bootstrap"
import styled from "styled-components";
import youth from "./assets/Size Charts/1_-_Youth.png";
import unisex from "./assets/Size Charts/2_-_Unisex.png";
import tall from "./assets/Size Charts/3_-_Tall.png";
import fittedMens from "./assets/Size Charts/4_-_Fitted_Mens.png";
import fittedWoman from "./assets/Size Charts/5_-_Fitted_Woman.png";
import tankTop from "./assets/Size Charts/6_-_Tank_Top.png";
import longSleeve from "./assets/Size Charts/7_-_Long_Sleeve.png";
import crewneck from "./assets/Size Charts/8_-_Crewneck.png";
import pullover from "./assets/Size Charts/9_-_Pullover.png";
import zipHoodie from "./assets/Size Charts/10_-_Zip_Hoodie.png";
import artistImage from "./assets/artistImage.jpg";

import Logo from "./assets/TeeDetails/Logo.jpg";
import Manbat from "./assets/TeeDetails/Manbat.png";
import kidbat from "./assets/TeeDetails/kidbat.png";
import tallbat from "./assets/TeeDetails/tallbat.png";
import womanbat from "./assets/TeeDetails/womanbat.png";
import manbat2 from "./assets/TeeDetails/manbat2.png";
import tattoobat from "./assets/TeeDetails/tattoobat.png";
import womanbat2 from "./assets/TeeDetails/womanbat2.png";
import manbatblonde from "./assets/TeeDetails/manbatblonde.png";
import backbat from "./assets/TeeDetails/backbat.png";
import backbat2 from "./assets/TeeDetails/backbat2.png";
import stickerbat from "./assets/TeeDetails/stickerbar.jpg";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
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

const TeeDetails = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <main>
      <Container>
        <Form.Group>
          <Row>
            <br/>
            <br/>
          </Row>
        <Row>
          <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Logo}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Manbat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={kidbat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={tallbat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={womanbat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={manbat2}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={tattoobat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={womanbat2}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={manbatblonde}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={backbat}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={backbat2}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={stickerbat}
              />
            </Carousel.Item>
          </Carousel>
          </Col>
          <Col>
          <Form.Label as="h1" column="lg" lg={3}>Bat 041</Form.Label>
          <br/>
          <Form.Label column="lg" id="shirt-price" value="13" lg={3}>$13.00</Form.Label><br/>
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
        <Row>
          <Col className="container-fluid mt-4">
          <CardDeck>
              <Card style={{ width: '18rem' }}>
                <Card.Header as="h2">Artist</Card.Header>
                <Card.Img variant="top" src={artistImage} />
                <Card.Body>
                  <Card.Title>Tintarosaurio</Card.Title>
                  <Card.Text>
                  Engineer and beginning graphic designer from Mexico, I make t-shirts inspired by anime, science and pop culture
                  </Card.Text>
                  <Button variant="primary" href="/artists">Visit artist page</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
              <Card.Header as="h2">Product</Card.Header>
                <Card.Body>
                  <Card.Title as="h2">Design</Card.Title>
                  <Card.Text>
                    The Zubat cave is just Mt. Moon.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Title as="h2">Details</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Each purchase directly supports the original artist.</ListGroupItem>
                    <ListGroupItem>Created by fans, for fans.</ListGroupItem>
                    <ListGroupItem>Printed and shipped from Toronto, Canada using premium water-based soft hand inks.</ListGroupItem>
                    <ListGroupItem>Colors may vary by size.</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        </Form.Group>
      </Container>
    </main>
  );
};

export default TeeDetails;
