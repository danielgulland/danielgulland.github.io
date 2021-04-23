import React from "react";
import styled from "styled-components";

import { List, Image } from 'semantic-ui-react'
import { Button, Card, Segment, Icon, Dropdown } from 'semantic-ui-react';
import Logo from "./assets/TeeDetails/Logo.jpg";
const Heading = styled.h1`
  color: #5597AB;
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
`;

const temp = styled.div`
  textAlign:center;
`;
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
const CollectionDetails = () => {
  return (
    <main>
      <h1 style={{textAlign:'center', marginTop:'20px'}}>Cult 80s Classics</h1>
      <div>
        <h3 style={{textAlign:'right', marginRight:'50px'}}>38 shirts</h3>
      </div>

      <div class="sidenav">
        <h3>SORT BY</h3>
        <DropdownMenu_Sort style={{maxWidth:'50px'}}></DropdownMenu_Sort>

        <h3>COLLECTION CATEGORIES</h3>
        <DropdownMenu_CultMovies ></DropdownMenu_CultMovies>
        <DropdownMenu_AnimatedFilms></DropdownMenu_AnimatedFilms>
        <DropdownMenu_Anime></DropdownMenu_Anime>
        <DropdownMenu_SciFi></DropdownMenu_SciFi>
        <DropdownMenu_ComicBooks></DropdownMenu_ComicBooks>
        <DropdownMenu_VideoGames></DropdownMenu_VideoGames>
        <DropdownMenu_Horror></DropdownMenu_Horror>
      </div>
      <Segment.Group style={{marginLeft:'500px'}}>

          <Segment.Group >
            <Segment >
              <Card.Group  style={{maxHeight:'500px'}}centered='true' stackable='true' >
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
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
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_eaf7ba24-d9f2-4a19-9a03-a441b5cf82f7_300x300.jpg?v=1617096092"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Did She Say It?</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_f724af9e-f33f-48ff-9cd1-29ceeb8bd5d9_300x300.jpg?v=1618436910"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Fatal Curry</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_37da0975-dc3a-4e78-b149-b946cd7fc0a6_300x300.jpg?v=1618438226"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Bone Dry</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Segment.Group>
        
          <Segment.Group >
            <Segment >
              <Card.Group  style={{maxHeight:'500px'}}centered='true' stackable='true' >
              <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_6c27bccd-7736-480b-b007-a1c8bc608a91_300x300.jpg?v=1618438226"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Evil Queen</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_64c94ba6-270d-45dd-85f5-394b00beb266_300x300.jpg?v=1617235719"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Rapunzel</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_7bcadbfc-a8e2-409a-a996-bfa3dae4e055_300x300.jpg?v=1617705273"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Mermaid Kiss</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_7070e7b3-ecf0-485c-8116-c59c5bf7ccea_300x300.jpg?v=1618437272"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Slasher Rock Star</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Segment.Group>
          
          <Segment.Group >
            <Segment >
              <Card.Group  style={{maxHeight:'500px'}}centered='true' stackable='true' >
              <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_2dbee6ab-8cc3-42e6-8f66-515ffde571d8_300x300.jpg?v=1618101691"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Bebop Hunter</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_0afc2188-a1d2-4e08-925a-f66e52457dd0_300x300.jpg?v=1617142787"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Whatever Happens Marty Don't Go To 2020</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_d3a90422-5729-44a3-a12d-c37e2425de10_300x300.jpg?v=1617914378"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Starry Miles</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_b9779b01-2a82-439c-a1fe-c5aed906b297_300x300.jpg?v=1617061715"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Dragon Kid</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Segment.Group>
          
          <Segment.Group >
            <Segment >
              <Card.Group  style={{maxHeight:'500px'}}centered='true' stackable='true' >
              <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_0bb4f22b-767b-4b1d-8966-64bf0eb43b2c_300x300.jpg?v=1617059200"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Fulcrum Sumi-E</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_2841ac65-aab4-4fcd-8b93-c9177d715f95_300x300.jpg?v=1617672160"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Wyld Stroke</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_69059e20-d5c9-43c3-867a-598fcc861a71_300x300.jpg?v=1617421354"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>The Polyglot</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
                <Card style={{maxWidth: '200px'}}centered='true' raised='true' href='/tee/details'>
                  <Image src ="//cdn.shopify.com/s/files/1/0278/2835/5139/products/prov_cover_e88b5db0-3d41-4a27-af42-3b9b8dff5711_300x300.jpg?v=1618015122"/>
                  <Card.Content textAlign='center'>
                    <Card.Header style= {{color:'#df3882'}}>Edward Slayer</Card.Header>
                    <Card.Meta>
                      <span style={{fontSize:'20px', color:'green'}}>
                        $19.99<br></br>
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Segment>
          </Segment.Group>        
        </Segment.Group>
    </main>
  );
};

export default CollectionDetails;
