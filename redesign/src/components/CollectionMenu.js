import React, { Component } from 'react';
import styled from "styled-components";
import logo from "./assets/80s.webp";

import { Card, Segment, Dropdown, Label, Image } from 'semantic-ui-react';

const options = [
  { key: 'Cult 80s Classics', text: 'Cult 80s Classics', value: 'Cult 80s Classics' },
  { key: 'Cult 90s Classics', text: 'Cult 90s Classics', value: 'Cult 90s Classics' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'Happy, Billy, and More', text: 'Happy, Billy, and More', value: 'Happy, Billy, and More' },
  { key: 'Wednesday', text: 'Wednesday', value: 'Wednesday' },
  { key: 'Gigawatts', text: 'Gigawatts Architecture', value: 'Gigawatts' },
  { key: 'Be Excellent', text: 'Be Excellent', value: 'Be Excellent' },
  { key: 'The Cornetto Trilogy', text: 'The Cornetto Trilogy', value: 'The Cornetto Trilogy' },
  { key: 'Yippee-Ki-Yay', text: 'Yippee-Ki-Yay', value: 'Yippee-Ki-Yay' },
  { key: 'Soap Makers', text: 'Soap Makers', value: 'Soap Makers' },
  { key: 'Revolution Revelation', text: 'Revolution Revelation', value: 'Revolution Revelation' },
  { key: 'Fortune And Glory, Kid', text: 'Fortune And Glory, Kid', value: 'Fortune And Glory, Kid' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]

const DropdownMenu_Sort = () => (
  <Dropdown text='Best Selling' fluid selection options={options} />

)
const DropdownMenu_CultMovies = () => (
  <Dropdown text='Cult Movies' fluid selection options={options} />
)
const DropdownMenu_AnimatedFilms = () => (
  <Dropdown text='AnimatedFilms' fluid multiple selection options={options} />
)
const DropdownMenu_Anime = () => (
  <Dropdown text='Anime' fluid multiple selection options={options} />
)
const DropdownMenu_SciFi = () => (
  <Dropdown text='Sci-Fi' fluid multiple selection options={options} />
)
const DropdownMenu_ComicBooks = () => (
  <Dropdown text='Comic Books' fluid multiple selection options={options} />
)
const DropdownMenu_VideoGames = () => (
  <Dropdown text='Video Games' fluid multiple selection options={options} />
)
const DropdownMenu_Horror = () => (
  <Dropdown text='Horror' fluid multiple selection options={options} />
)

const Heading = styled.h1`
  color: #5597AB;
  padding: 15px;
`;

const Display = styled.div`
  position: relative;
  display: flex;
`;

const MenuArea = styled.div`
  padding-top: 15px;
  padding-right: 20px;
`;

export default class CollectionMenu extends Component {
  state = { activeItem: 'ALEMAGLIA' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
        <Display>
        <MenuArea>
          <h3>SORT BY</h3>
          <DropdownMenu_Sort></DropdownMenu_Sort>

          <h3>CATEGORIES</h3>
              <DropdownMenu_CultMovies ></DropdownMenu_CultMovies>
              <DropdownMenu_AnimatedFilms></DropdownMenu_AnimatedFilms>
              <DropdownMenu_Anime></DropdownMenu_Anime>
              <DropdownMenu_SciFi></DropdownMenu_SciFi>
              <DropdownMenu_ComicBooks></DropdownMenu_ComicBooks>
              <DropdownMenu_VideoGames></DropdownMenu_VideoGames>
              <DropdownMenu_Horror></DropdownMenu_Horror>
        </MenuArea>

        <Segment padded raised style={{marginLeft: '50px', marginRight:'150px'}}>
            <Heading> 
              <Image src={logo} avatar size='tiny' />
              &nbsp;&nbsp;&nbsp;&nbsp; Cult 90s Classics
            </Heading>
            &nbsp;&nbsp;&nbsp;<Label color='pink' size='large' tag>8 shirts</Label>
              <Segment> 
                <Card.Group centered='true' stackable='true' >
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_63a9a78b-f3b8-41d0-9d12-04f8b0c5892a_300x300.jpg?v=1618351531"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>How I Spent My Saturday Mornings</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_956de104-dd7e-4347-9433-87eb80badaea_300x300.jpg?v=1617119613"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>It Was Agatha All Along</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_572d1bd9-573f-46dc-b705-857661ef3464_300x300.jpg?v=1618053802"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Cage Fighter</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                    <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_a89f6025-e072-40c9-8a10-efd4e5a7640c_300x300.jpg?v=1617656927"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Heart On Fire</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_457fd74e-b35d-4de9-8d08-3bf44c649152_300x300.jpg?v=1617060761"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Shirts VS The Blouses</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_e1ca03bc-5e6f-4b8c-a8c1-d8c04aa86c08_300x300.jpg?v=1617329073"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Robot Touch</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_1dd56d20-4c08-4a79-8aa5-c4054cc8b96b_300x300.jpg?v=1617433594"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Witch Of Chaos</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                    <Card centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_be7458fc-70d1-44c3-aa21-801e75300804_300x300.jpg?v=1618133243"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Types Of Pokeballs</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
              </Card.Group>
            </Segment>
          </Segment>
      </Display> 
    )
  }
}