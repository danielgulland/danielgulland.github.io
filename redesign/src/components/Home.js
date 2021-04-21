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
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  overflow: hidden;
  opacity: 1;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const Collection = styled.div`
  position: absolute;
  font-size: 28px;
  color: #fff;
  background-color: brown;
  &:hover {
    text-decoration: underline;
    border-bottom-color: #fff;
  }
  padding: 0px 5px;
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
          <Item>
            <img src ={col1}  alt="Col1" />
            <Collection> Cult 90s Classics </Collection>
          </Item>
          <Item>
            <img src ={col2}  alt="Col2" />
            <Collection> Anime </Collection>
          </Item>
          <Item>
            <img src ={col3}  alt="Col3" />
            <Collection> Horror </Collection>
          </Item>
          <Item>
            <img src ={col4}  alt="Col4" />
            <Collection> Animated Films </Collection>
          </Item>
          <Item>
            <img src ={col5}  alt="Col5" />
            <Collection> 80s Videogames </Collection>
          </Item>
        </Carousel>
      </div>

      <Heading>» Trending Right Now</Heading>
    </main>
  );
};

export default Home;
