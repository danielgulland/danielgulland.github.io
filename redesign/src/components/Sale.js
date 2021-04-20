import React from "react";
import styled from "styled-components";
import { FlipClock } from "./FlipClock";
import pinkbr from "./assets/pinkbr.png";
import { Button, Card, Image } from 'semantic-ui-react';

const ClockCounter = styled.div`
  height: auto;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${pinkbr});
  margin: 20px 15px;
`;

const Deals = styled.h3`
  color: brown; 
  font-weight: 500;
  padding-right: 30px;
  font-size: 30px;
  font-weight: 900;
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

        <Card.Group>
          <Card>
            <Card.Content>
              
            </Card.Content>
          </Card>

        </Card.Group>

      </ClockCounter>

      <h2>List of deals</h2>
    </main>
  );
};

export default Sale;