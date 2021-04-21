import React from "react";
import styled from "styled-components";
import { FlipClock } from "./FlipClock";
import Carousel from "react-elastic-carousel";
import pinkbr from "./assets/pinkbr.png";
import col1 from "./assets/col1.jpeg";
import col2 from "./assets/col2.jpeg";
import col3 from "./assets/col3.gif";
import col4 from "./assets/col4.png";
import col5 from "./assets/col5.jpeg";
import { Link } from "react-router-dom";
import { Button, Card, Image, Icon, Dropdown } from 'semantic-ui-react';
const Deals = styled(Link)`
  color: brown; 
  font-style: Italic;
  font-weight: 500;
  font-size: 20px;
  padding-right: 30px;
`;

const ClockCounter = styled.div`
  height: auto;
  padding-left: 45vw;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${pinkbr});
  margin: 15px 15px;
`;

const Heading = styled.h1`
  color: #5597AB;
  text-decoration: underline;
  padding: 10px 30px;
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 580, itemsToShow: 2 },
  { width: 860, itemsToShow: 3 },
  { width: 1140, itemsToShow: 4 },
  { width: 1420, itemsToShow: 5 }, 
];

const ColCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  color: #fff;
  font-size: 4em;
  overflow: hidden;
  padding: 0px 10px;
  margin-top: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

const ColName = styled.a`
  position: absolute;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  background-color: brown;
  &:hover {
    color: brown;
    background-color: white;
  }
  padding: 8px 5px;
`;

const ColImg = styled.div`
  filter: grayscale(0%);
  &:hover {
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

const Home = () => {
  return (
    <main>
      <ClockCounter>
        <Deals  to="/sale">
          DON'T WAIT!
          <br></br>
          BEST DEALS end in
          <br></br>
          <br></br>
        </Deals>
        <div> 
        <FlipClock value={"5"}/>
        </div>
      </ClockCounter>

      <div className="list">
        <Carousel breakPoints={breakPoints}>
        <a href='/collection/details'>
          <ColCard>
            <ColImg><Image src ={col1} fluid/></ColImg>
            <ColName> Cult 90s Classics </ColName>
          </ColCard>
          </a>
          <a href='/collection/details'>
          <ColCard>
          <ColImg><Image src ={col2} fluid/></ColImg>
            <ColName> Anime </ColName>
          </ColCard>
          </a>        
          <a href='/collection/details'>
          <ColCard>
          <ColImg><Image src ={col3} fluid/></ColImg>
            <ColName> Horror </ColName>
          </ColCard>
          </a>
          <a href='/collection/details'>
          <ColCard>
          <ColImg><Image src ={col4} fluid/></ColImg>
            <ColName> Animated Films </ColName>
          </ColCard>
          </a>
          <a href='/collection/details'>
          <ColCard>
          <ColImg><Image src ={col5} fluid/></ColImg>
            <ColName> 80s Videogames </ColName>
          </ColCard>
          </a>
        </Carousel>
      </div>

      <Heading>» Trending Right Now</Heading>
    </main>
  );
};

export default Home;
