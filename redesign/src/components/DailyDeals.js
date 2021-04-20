import React from "react";
import styled from "styled-components";
import { FlipClock } from "./FlipClock";
import pinkbr from "./assets/pinkbr.png";

const ClockCounter = styled.div`
  height: 100px;
  padding-left: 45vw;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${pinkbr});
  margin: 20px 15px;
`;

const Deals = styled.h3`
  color: brown; 
  font-style: Italic;
  font-weight: 500;
  padding-right: 30px;
`;

const DailyDeals = () => {
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

      <h2>List of deals</h2>
    </main>
  );
};

export default DailyDeals;