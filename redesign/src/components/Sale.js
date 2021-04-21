import React from "react";
import styled from "styled-components";
import { FlipClock } from "./FlipClock";
import pinkbr from "./assets/pinkbr.png";
import { Button, Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import daily1 from "./assets/daily1.png";
import daily2 from "./assets/daily2.png";
import daily3 from "./assets/daily3.webp";
import daily4 from "./assets/daily4.png";

const ClockCounter = styled.div`
  height: auto;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${pinkbr});
  margin: 0px 15px;
  margin-top: 15px;
`;

const Deals = styled.h3`
  color: brown; 
  font-weight: 500;
  padding-right: 30px;
  font-size: 30px;
  font-weight: 900;
`;

const DealGroup = styled.div`
  margin: 0px 15px;
  border: 5px solid #FFE6F7;
  border-top: none;
  padding: 20px 10px;
`;

const Sale = () => {
  return (
    <main>
      <ClockCounter>
        <Deals>
          THESE DEALS ARE
          <br></br>
          GONE FOREVER IN
        </Deals>
        <div> 
        <FlipClock value={"5"}/>
        </div>
      </ClockCounter>

      <DealGroup>
      <Card.Group centered='true' stackable='true' >
          <Card centered='true' raised='true'>
            <Image src ={daily1}/>
            <Card.Content textAlign='center'>
              <Card.Header>Legend Of The Smoking Bowls</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>
                "Hey how am I driving, man?" <br></br>
                "I think we're parked."
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true'>
            <Image src ={daily2}  alt="daily2"/>
            <Card.Content textAlign='center'>
              <Card.Header>Crossing The Blunt Bridge</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>
                "So, how long you've been in Mexico?"<br></br>
                "A weekday."
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true' >
            <Image src ={daily3}  alt="daily3"/>
            <Card.Content textAlign='center'>
              <Card.Header>Painting For Dummies</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>
              As seen on TV!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true' >
            <Image src ={daily4}  alt="daily4"/>
            <Card.Content textAlign='center'>
              <Card.Header>Alrighty Then!</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <Card.Description>
              Ace Ventura : Like a glove!
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='pink'>
                  Details
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        </DealGroup>

      <h2>List of deals</h2>
    </main>
  );
};

export default Sale;