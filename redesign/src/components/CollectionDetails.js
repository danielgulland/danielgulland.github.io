import React from "react";
import styled from "styled-components";
import CollectionMenu from "./CollectionMenu";
import { Segment, Icon} from 'semantic-ui-react';

const Heading1 = styled.h1`
  color: #5597AB;
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
  text-align:center;
`;

const CollectionDetails = () => {
  return (
    <main>
    <Segment.Group>
        <Segment>
          <Heading1> <Icon name='chevron right'/>  Cult Movies  <Icon name='chevron left'/> </Heading1>
        </Segment>
        <Segment.Group>
          <Segment>
            <CollectionMenu></CollectionMenu>
          </Segment>
        </Segment.Group>
    </Segment.Group>
  </main>
  );
};

export default CollectionDetails;
