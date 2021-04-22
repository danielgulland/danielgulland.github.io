import React from "react";
import LeftMenu from "./ArtistsMenu";
import styled from "styled-components";
import { Icon, Segment} from 'semantic-ui-react';


const Heading = styled.h1`
  color: #5597AB;
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
  text-align:center;
`;

const Artists = () => {
  return (
    <main>
      <Segment.Group>
          <Segment>
            <Heading> <Icon name='chevron right'/>  FEATURED ARTISTS  <Icon name='chevron left'/> </Heading>
          </Segment>
          <Segment.Group>
            <Segment>    
              <LeftMenu></LeftMenu> 
            </Segment>
          </Segment.Group>
      </Segment.Group>

    </main>
  );
};

export default Artists;
