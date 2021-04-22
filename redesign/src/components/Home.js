import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image, Icon, Segment, Label, Card} from 'semantic-ui-react';
import { FlipClock } from "./FlipClock";
import Carousel from 'react-bootstrap/Carousel';
import  Carousel2 from "react-elastic-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';   
import pinkbr from "./assets/pinkbr.png";
import col1 from "./assets/col1.jpeg";
import col2 from "./assets/col2.jpeg";
import col3 from "./assets/col3.gif";
import col4 from "./assets/col4.png";
import col5 from "./assets/col5.jpeg";
import new11 from "./assets/new11.jpeg";
import new12 from "./assets/new12.png";
import new13 from "./assets/new13.png";
import new14 from "./assets/new14.png";
import new15 from "./assets/new15.png";
import new21 from "./assets/new21.jpeg";
import new22 from "./assets/new22.png";
import new23 from "./assets/new23.png";
import new24 from "./assets/new24.png";
import new25 from "./assets/new25.png";
import new31 from "./assets/new31.jpeg";
import new32 from "./assets/new32.png";
import new33 from "./assets/new33.png";
import new34 from "./assets/new34.png";
import new35 from "./assets/new35.png";
import last0 from "./assets/last0.jpeg";
import last1 from "./assets/last1.webp";
import last2 from "./assets/last2.jpeg";
import last3 from "./assets/last3.jpeg";
import last4 from "./assets/last4.jpeg";
import last5 from "./assets/last5.webp";

const Deals = styled(Link)`
  color: brown; 
  font-style: Italic;
  font-weight: 600;
  font-size: 25px;
  padding-right: 30px;
  padding-bottom: 20px;
  line-height: normal;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
    color: hotpink; 
  }
`;

const ClockCounter = styled.div`
  height: auto;
  padding-left: 15vw;
  padding-top: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${pinkbr});
  margin: 0px 15px;
`;

const Banner = styled.div`
  height: 300px;
  overflow: hidden;
  margin: 0px 0px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  background: rgb(255,255,255);
  background: linear-gradient(360deg, rgba(255,255,255,1) 0%, rgba(180,208,231,1) 40%, rgba(180,208,231,1) 57%, rgba(255,255,255,1) 94%);
`;

const Heading = styled.h1`
  color: #5597AB;
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
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
        </Deals>
        <div> 
        <FlipClock value={"5"}/>
        </div>
      </ClockCounter>

      <Segment.Group>
        <Segment>
          <Heading><Icon name='angle double up'/> NEW IN</Heading>
        </Segment>
        <Segment.Group>
          <Segment>
            <Carousel fade>
                <Carousel.Item>
                  <a href='/tee/details'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Label as='a' pointing='left' basic color="teal" size="large">
                    <Image avatar spaced='right' src ={new11} />
                      "More Big, More Power!"
                    </Label>
                    <Banner>
                      <Image src ={new14} height="150px"/>
                      <Image src ={new13} height="170px"/>
                      <Segment raised>
                        <img src ={new11} alt="new11" width="200px"/> 
                      </Segment> 
                      <Image src ={new12} height="170px"/>
                      <Image src ={new15} height="150px"/>
                    </Banner>
                  </a>
                </Carousel.Item>

                <Carousel.Item>
                  <a href='/tee/details'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Label as='a' pointing='left' basic color="teal" size="large">
                      <Image avatar spaced='right' src ={new21} />
                        "That's Fast Folks!"
                    </Label>
                    <Banner>
                      <Image src ={new24} height="150px"/>
                      <Image src ={new23} height="170px"/>
                      <Segment raised>
                        <img src ={new21} alt="new21" width="200px"/> 
                      </Segment> 
                      <Image src ={new22} height="170px"/>
                      <Image src ={new25} height="150px"/>
                    </Banner>
                  </a>
                </Carousel.Item>

                <Carousel.Item>
                <a href='/tee/details'>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Label as='a' pointing='left' basic color="teal" size="large">
                    <Image avatar spaced='right' src ={new31} />
                      "The Good, The Bad, And The Bobby"
                  </Label>
                  <Banner>
                      <Image src ={new34} height="150px"/>
                      <Image src ={new33} height="170px"/>
                      <Segment raised>
                        <img src ={new31} alt="new31" width="200px"/> 
                      </Segment> 
                      <Image src ={new32} height="170px"/>
                      <Image src ={new35} height="150px"/>
                    </Banner>
                  </a>
                </Carousel.Item>
              </Carousel>
            </Segment>
          </Segment.Group>
        </Segment.Group>

        <Segment.Group>
          <Segment>
            <Heading><Icon name='hotjar'/> What's HOT?</Heading>
          </Segment>
          <Segment.Group>
            <Segment>
              <Card.Group centered='true' stackable='true' >
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last0}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>100% Trash</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                        For when you need to show people<br></br>
                        what they're in for?
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last1}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>See You Space Coyote</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                        Coyote : Find your soul mate, Spike<br></br>
                        Spike : But where? Where?
                      </span>
                    </Card.Meta>
                  </Card.Content>
                  </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last2}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>Hanzo 300</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                        “I may not understand your words, <br></br>but I promise, I will kill you.”
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last5}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>Coud Have Been An E-Mail</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                        Really?<br></br>
                        You made me get dressed for this?
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last3}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>Bat 041</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                        The Zubat cave is just <br></br>Mt. Moon
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card> 
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last4}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>A Shot In The Dark</Card.Header>
                    <Card.Meta>
                      <span className = 'design'>
                      "Hey how am I driving, man?" <br></br>
                      "I think we're parked."
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Segment.Group>
        </Segment.Group>


        <Segment.Group>
          <Segment>
            <Heading><Icon name='star'/>Featured Collections</Heading>
          </Segment>
          <Segment.Group>
            <Segment>     
              <div className="list">
                <Carousel2 breakPoints={breakPoints}>
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
                </Carousel2>
              </div>
            </Segment>
          </Segment.Group>
        </Segment.Group>
    </main>
  );
};

export default Home;
