import React, { Component } from 'react';
import styled from "styled-components";
import { Card, Menu, Segment, Image, Icon } from 'semantic-ui-react';
import Carousel from "react-elastic-carousel";
import last1 from "./assets/last1.webp";
import last2 from "./assets/last2.jpeg";
import last5 from "./assets/last5.webp";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
  { width: 1500, itemsToShow: 5 }, 
];

const Heading = styled.h2`
  color: #5597AB;
`;

const Display = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const MenuArea = styled.div`
  padding-top: 15px;
  padding-right: 10px;
`;

export default class ArtistsMenu extends Component {
  state = { activeItem: 'ALEMAGLIA' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Display>
          <MenuArea>
          <Menu vertical tabular fluid>
            <Menu.Item
              name='ALEMAGLIA'
              active={activeItem === 'ALEMAGLIA'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='BLANCAVIDAL'
              active={activeItem === 'BLANCAVIDAL'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='COINBOXTEES'
              active={activeItem === 'COINBOXTEES'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DANDINGEROZ'
              active={activeItem === 'DANDINGEROZ'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DRACULABYTE'
              active={activeItem === 'DRACULABYTE'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='DRMONEKERS'
              active={activeItem === 'DRMONEKERS'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='FUNTIMESTEES'
              active={activeItem === 'FUNTIMESTEES'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='GEEKYDOG'
              active={activeItem === 'GEEKYDOG'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='GLITCHYGORILLA'
              active={activeItem === 'GLITCHYGORILLA'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='MINION_FACTORY'
              active={activeItem === 'MINION_FACTORY'}
              onClick={this.handleItemClick}
            />
          </Menu>
          </MenuArea>

          <Segment>
            <Heading> <Icon name='user cicle'/> Alemaglia</Heading>
            Hey I'm Alessio Magliano aka Alemaglia, a designer and cartoonist from Italy. Lately I would call my style "A story in shadows". I love representing all the characters and events in even the smallest details of the design. MY inspiration comes from TV, Comics and animated films so "Be prepared" to find "A whole new world" "Under the sea" of my art!

            <Heading> <Icon name='fire'/> Best Sellers</Heading>
            <Carousel breakPoints={breakPoints}>
            <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last1}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>See You Space Coyote</Card.Header>
                  </Card.Content>
                  </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last2}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>Hanzo 300</Card.Header>
                  </Card.Content>
                </Card>
                <Card centered='true' raised='true' href='/tee/details'>
                  <Image src ={last5}/>
                  <Card.Content textAlign='center'>
                    <Card.Header>Coud Have Been An E-Mail</Card.Header>
                  </Card.Content>
                </Card>
            </Carousel>
          </Segment>
      </Display>
    )
  }
}
