import React from "react";
import styled from "styled-components";

import { Image } from 'semantic-ui-react'
import { Card, Segment, Icon, Dropdown, Label, Pagination } from 'semantic-ui-react';
import Logo from "./assets/TeeDetails/Logo.jpg";

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


const Heading1 = styled.h1`
  color: #5597AB;
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
  text-align:center;
`;

const Display = styled.div`
  position: relative;
  display: flex;
`;

const MenuArea = styled.div`
  padding-top: 15px;
  padding-right: 20px;
`;

const AllTees = () => {
  return (
    <main>
      <Segment.Group>
          <Segment>
            <Heading1> <Icon name='chevron right'/>  ALL TEES  <Icon name='chevron left'/> </Heading1>
          </Segment>
          <Segment.Group>
            <Segment>
              <Display>
                <MenuArea>
                  <Label basic color='pink' size='large'>3588 shirts</Label>
                  <h3>SORT BY</h3>
                  <DropdownMenu_Sort></DropdownMenu_Sort>

                  <h3>COLLECTION CATEGORIES</h3>
                    <DropdownMenu_CultMovies ></DropdownMenu_CultMovies>
                    <DropdownMenu_AnimatedFilms></DropdownMenu_AnimatedFilms>
                    <DropdownMenu_Anime></DropdownMenu_Anime>
                    <DropdownMenu_SciFi></DropdownMenu_SciFi>
                    <DropdownMenu_ComicBooks></DropdownMenu_ComicBooks>
                    <DropdownMenu_VideoGames></DropdownMenu_VideoGames>
                    <DropdownMenu_Horror></DropdownMenu_Horror>
                </MenuArea>

                <Segment floated='right' padded raised>
                    <Card.Group centered='true' stackable='true' >
                      <Card style={{maxWidth: '200px'}} centered='true' raised='true' href='/tee/details'>
                        <Image src ={Logo} href='/tee/details'/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Bat 041</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $13.00<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}} centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_12e2c594-5c1e-4e68-a261-b39a90fcf44f_300x300.jpg?v=1617052363"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Neon Moon</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_a15d9d9a-f9f5-4cb9-8eac-4e72eedcc790_300x300.jpg?v=1617085246"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Live Laugh Love</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_72f2f0a6-c4b3-4d43-b2d6-ba6ddbe1cf50_300x300.jpg?v=1618148492"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>1st Gen</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                    <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_03beae5e-c57e-4090-8eaf-38b32b5e2580_300x300.jpg?v=1618000612"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>What's The Story?</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                    <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                    <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_7d0ed528-6794-47df-be40-b03908671e94_300x300.jpg?v=1617080923"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Go Directly To Arkham</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_96ade907-e10a-45a7-8633-1e4ff8c91062_300x300.jpg?v=1618095443"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Batfam VS Arkham</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                      <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                        <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_073705a9-e4a7-497d-85c2-f4ebb690bb88_300x300.jpg?v=1617657044"/>
                        <Card.Content textAlign='center'>
                          <Card.Header style= {{color:'#df3882'}}>Forest Dreamers</Card.Header>
                          <Card.Meta>
                            <span style={{fontSize:'20px', color:'green'}}>
                              $19.99<br></br>
                            </span>
                          </Card.Meta>
                        </Card.Content>
                      </Card>
                    </Card.Group> 
                </Segment>
              </Display> 
              <Pagination
                defaultActivePage={5}
                totalPages={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              />
            </Segment>
          </Segment.Group>
      </Segment.Group>


      
      
    </main>
  );
};

export default AllTees;
