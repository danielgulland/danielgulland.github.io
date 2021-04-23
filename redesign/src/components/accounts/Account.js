import React from "react";
import { Row, Container, Col, Modal, Button, Card} from "react-bootstrap";
import { Table } from "semantic-ui-react";
import "./AccountStyles.css";

const Account = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [orderShow, setOrderShow] = React.useState(false);

  return (
    <main>
      <Container>
        <h1>My Account</h1>
        <Row>
          <Col className="TableView" sm={8}>
            <Table borderless size="sm" responsive="sm">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Payment Status</th>
                  <th>Fulfillment Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <th data-label="Order" scope="row">
                      <Button variant="light" onClick={() => setOrderShow(true)}>#SPS7952</Button>
                      <ViewOrderDetails show={orderShow} onHide={() => setOrderShow(false)}/>
                    </th>
                    <td data-label="Date">
                      <time datetime="2021-04-06T23:02:01Z">April 6, 2021</time>
                    </td>
                    <td data-label="Payment Status">Paid</td>
                    <td data-label="Fulfillment Status">Fulfilled</td>
                    <td data-label="Total">$36.50</td>
                  </tr>
                  <tr>
                    <th data-label="Order" scope="row">
                    <Button variant="light" onClick={() => setOrderShow(true)}>#SPS7931</Button>
                    </th>
                    <td data-label="Date"><time datetime="2021-04-06T20:06:07Z">April 6, 2021</time></td>
                    <td data-label="Payment Status">Refunded</td>
                    <td data-label="Fulfillment Status">Unfulfilled</td>
                    <td data-label="Total">$21.50</td>
                  </tr>
                  <tr>
                    <th data-label="Order" scope="row">
                      <Button variant="light" onClick={() => setOrderShow(true)}>#SPS7927</Button>
                    </th>
                    <td data-label="Date"><time datetime="2021-04-06T19:43:17Z">April 6, 2021</time></td>
                    <td data-label="Payment Status">Refunded</td>
                    <td data-label="Fulfillment Status">Unfulfilled</td>
                    <td data-label="Total">$21.50</td>
                  </tr>
                </tbody>
            </Table>
          </Col>
          <Col className="AccountDetails" sm={4}>
            <h3>Account Details</h3>
            <p>Nickolaus Marshall-Eminger<br/>1622 HUSANA DR<br/>San Luis Obispo CA 93405<br/>United States</p>
            <Col>
              <Row className="viewAddressWrapper">
                <Button variant="primary" onClick={() => setModalShow(true)}>View addresses</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
              </Row>
              <Row className="logOutWrapper">
                <Button variant="danger" className="logoutBtn" href="/">Log out</Button>
              </Row>
            </Col>
          </Col>
        </Row>
        <div class="NoteBox">
          <p><em>NOTE:</em> As you know, we have recently transitioned to a new platform. Here you will only see orders placed on the new platform. To request information about orders made on our previous platform, please send an email to <a href="mailto:info@shirtpunch.com" target="_blank" rel="noreferrer noopener" aria-describedby="a11y-new-window-external-message">info@shirtpunch.com</a> with your order number or shipping address. Thank you so much for your patience and feedback through this transition.</p>
        </div>
      </Container>
    </main>
  );
};

export default Account;

function ViewOrderDetails(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Order #SPS7952
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <h4>Placed on April 6, 2021 at 7:02 PM</h4>
      <Row>
        <Col>
          <h3>Billing Address</h3>
          <p><b>Payment Status:</b> Paid</p>
          Nickolaus Marshall-Eminger<br/>
          1622 Husana Dr.<br/>
          San Luis Obispo CA 93405<br/>
          United States
        </Col>
        <Col>
          <h3>Shipping Address</h3>
          <p><b>Fulfillment Status:</b> Paid</p>
          Nickolaus Marshall-Eminger<br/>
          1622 Husana Dr.<br/>
          San Luis Obispo CA 93405<br/>
          United States
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">SKU</th>
            <th class="text-right" scope="col">Price</th>
            <th class="text-right" scope="col">Quantity</th>
            <th class="text-right" scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Product">
              <div>
                <p>Heart On Fire - T-Shirts, Unisex / 3XL / Black</p>
              </div>
              <div class="note">Fulfilled
                <time datetime="2021-04-16T15:26:36Z"> April 16, 2021</time>
                <div>
                  <div>
                        DHL eCommerce 
                        #SP13714501148739 
                  </div>
                  <a id="trackLink">
                    Track shipment
                  </a>
                </div>
              </div>
            </td>
            <td data-label="SKU"></td>
            <td class="text-right" data-label="Price">
              <dl>
                <dt>
                  <span class="visually-hidden">Regular price</span>
                </dt>
                <dd>
                  $15.00
                </dd>
              </dl>
            </td>
            <td class="text-right" data-label="Quantity">1</td>
            <td class="text-right" data-label="Total">$15.00</td>
          </tr>
          <tr>
            <td class="order-table__product" scope="row" data-label="Product">
              <div>
                Nature Spirit - T-Shirts, Unisex / 2XL / Black
              </div>
              <div class="note">
                Fulfilled 
                <time datetime="2021-04-16T15:26:36Z"> April 16, 2021</time>
                <div>
                  <div>
                    DHL eCommerce 
                    #SP13714501148739 
                  </div>
                  <a id="trackLink">
                    Track shipment
                  </a>
                </div>
              </div>
            </td>
            <td data-label="SKU"></td>
            <td class="text-right" data-label="Price">
              <dl>
                <dt>
                  <span class="visually-hidden">Regular price</span>
                </dt>
                <dd>
                  $15.00
                </dd>
              </dl>
            </td>
            <td class="text-right" data-label="Quantity">1</td>
            <td class="text-right" data-label="Total">
              $15.00
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="small--hide" scope="row" colspan="4">
              Subtotal
            </td>
            <td class="text-right subtotal-price" data-label="Subtotal">$30.00</td>
          </tr>
          <tr>
            <td class="small--hide" scope="row" colspan="4">
              Shipping (Standard)
            </td>
            <td class="text-right shipping-price" data-label="Shipping (Standard)">$6.50</td>
          </tr>
          <tr>
            <th class="small--hide" scope="row" colspan="4">Total</th>
            <td class="text-right order-total-price" data-label="Total">$36.50 USD</td>
          </tr>
        </tfoot>
      </Table>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
          Addresses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      <Card border="secondary">
        <Card.Body>
          <Card.Text>
          1622 HUSANA DR
          <br/>
          San Luis Obispo CA 93405
          <br/>
          United States
          </Card.Text>
          <Card.Link className="pull-right" href="#">Delete</Card.Link>
          <Card.Link className="pull-right" href="#">Edit &nbsp;</Card.Link>
        </Card.Body>
      </Card><br />

      <Card border="secondary">
        <Card.Body>
          <Card.Text>
            1622 HUSANA DR
            <br/>
            San Luis Obispo CA 93405
            <br/>
            United States
          </Card.Text>
          <Card.Link className="pull-right" href="#">Delete</Card.Link>
          <Card.Link className="pull-right" href="#">Edit &nbsp;</Card.Link>
        </Card.Body>
      </Card><br/>

      <Card border="secondary">
        <Card.Body>
          <Card.Text>
            1622 HUSANA DR
            <br/>
            San Luis Obispo CA 93405
            <br/>
            United States
          </Card.Text>
          <Card.Link className="pull-right" href="#">Delete</Card.Link>
          <Card.Link className="pull-right" href="#">Edit &nbsp;</Card.Link>
        </Card.Body>
      </Card>
     
      </Modal.Body>
      <Modal.Footer>
        <Button>Add Address</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}