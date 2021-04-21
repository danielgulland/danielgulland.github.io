import React from "react";
import styled from "styled-components";
import { FlipClock } from "./FlipClock";
import Carousel from "react-elastic-carousel";
import pinkbr from "./assets/pinkbr.png";
import { Button, Card, Image, Icon, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import daily1 from "./assets/daily1.png";
import daily2 from "./assets/daily2.png";
import daily3 from "./assets/daily3.webp";
import daily4 from "./assets/daily4.png";
import last1 from "./assets/last1.webp";
import last2 from "./assets/last2.jpeg";
import last3 from "./assets/last3.jpeg";
import last4 from "./assets/last4.jpeg";

const ClockCounter = styled.div`
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
  border: 5px dashed #FFE6F7;
  border-top: none;
  padding: 20px 10px;
`;

const LastChance = styled.div`
  border: 5px double #add2e4;
  border-bottom: none;
  margin: 30px 15px;
  margin-bottom: 0px;
  padding: 20px 10px;
  color: #447989;
`;

const LCGroup = styled.div`
  background-color: #add2e4;
  margin: 30px 15px;
  margin-top: 0px;
  padding: 20px 10px;
`; 


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const sizeOptions = [
  { key: 1, text: 'Small', value: 1 },
  { key: 2, text: 'Medium', value: 2 },
  { key: 3, text: 'Large', value: 3 },
]

const formOptions = [
  { key: 1, text: 'Unisex', value: 1 },
  { key: 2, text: 'Men', value: 2 },
  { key: 3, text: 'Women', value: 3 },
]

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
          <Card centered='true' raised='true' >
            <Image src ={daily1} href='/tee/details'/>
            <Card.Content textAlign='center'>
              <Card.Header>Legend Of The Smoking Bowls</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Form' 
                  options={formOptions} 
                  defaultValue={formOptions[0].value}
                  selection 
               />
               <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Size' 
                  options={sizeOptions} 
                  defaultValue={sizeOptions[0].value}
                  selection 
               />
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button animated='vertical' color='pink'>
                  <Button.Content hidden>
                    <Icon name='in cart'/>
                  </Button.Content>
                  <Button.Content visible>
                    Add to Cart
                  </Button.Content>
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true'>
            <Image src ={daily2}  href='/tee/details'/>
            <Card.Content textAlign='center'>
              <Card.Header>Crossing The Blunt Bridge</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Form' 
                  options={formOptions} 
                  defaultValue={formOptions[0].value}
                  selection 
               />
               <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Size' 
                  options={sizeOptions} 
                  defaultValue={sizeOptions[0].value}
                  selection 
                />
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button animated='vertical' color='pink'>
                  <Button.Content hidden>
                    <Icon name='in cart'/>
                  </Button.Content>
                  <Button.Content visible>
                    Add to Cart
                  </Button.Content>
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true'>
            <Image src ={daily3}  href='/tee/details'/>
            <Card.Content textAlign='center'>
              <Card.Header>Painting For Dummies</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Form' 
                  options={formOptions} 
                  defaultValue={formOptions[0].value}
                  selection 
               />
               <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Size' 
                  options={sizeOptions} 
                  defaultValue={sizeOptions[0].value}
                  selection 
                />
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button animated='vertical' color='pink'>
                  <Button.Content hidden>
                    <Icon name='in cart'/>
                  </Button.Content>
                  <Button.Content visible>
                    Add to Cart
                  </Button.Content>
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card centered='true' raised='true'>
            <Image src ={daily4} href='/tee/details'/>
            <Card.Content textAlign='center'>
              <Card.Header>Alrighty Then!</Card.Header>
              <Card.Meta>
                <span className = 'price'>$13.00</span>
              </Card.Meta>
              <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Form' 
                  options={formOptions} 
                  defaultValue={formOptions[0].value}
                  selection 
               />
               <br></br>
              <Dropdown 
                  clearable 
                  fluid
                  placeholder='Select Size' 
                  options={sizeOptions} 
                  defaultValue={sizeOptions[0].value}
                  selection 
                />
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button animated='vertical' color='pink'>
                  <Button.Content hidden>
                    <Icon name='in cart'/>
                  </Button.Content>
                  <Button.Content visible>
                    Add to Cart
                  </Button.Content>
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </DealGroup>

      <LastChance>
        <h2>LAST CHANCE ITEMS</h2>
      </LastChance>  
      <LCGroup>
      <Carousel breakPoints={breakPoints}>
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
      
        </Carousel>

      </LCGroup>
      <div>---</div>
    </main>
  );
};

export default Sale;