import React from "react";
import styled from "styled-components";
import { Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Pagination } from "semantic-ui-react";

const Heading = styled.h1`
  color: hotpink;
  padding: 0px 50px;
  text-shadow: 1px 1px gray;
  text-align: center;
  text-transform: uppercase;
`;

const Grid = styled.ul`
  margin-left: -15px;
  margin-bottom: -15px;
  display: grid;
  padding: 0 125px;
  margin: 0 auto;
  max-width: 1250px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  justify-items: center;
`;

const GridItem = styled.li`
  @media only screen and (max-width: 750px) {
    margin-bottom: 15px;
  }
`;

const CollectionItem = styled.div`
  @media only screen and (min-width: 750px) {
    margin-bottom: 15px;
  }
`;

const CollectionItem_Link = styled(Link)`
  color: #df3882;
  text-decoration: none;
  background-color: transparent;
  transition: all ease 0.7s;
  position: relative;
  text-align: center;
  color: white;
`;

const BackgroundImage = styled.img`
  min-height: 250px;
  min-width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background: no-repeat;
  max-width: 100%;
  border: 0;
  filter: brightness(70%);

  &:hover {
    filter: brightness(40%);
    transform: scale(0.95);
  }
`;

const CollectionTitle = styled.div`
  text-align: center;
  top: 50%;
  color: white;
  font-size: 25px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: 100ms cubic-bezier(0.44, 0.13, 0.48, 0.87);
  text-shadow: 0 0 4px rgb(0 0 0 / 40%);
  hyphens: auto;
`;

const Collections = () => {
  return (
    <main>
      <Segment.Group>
        <Segment>
          <Heading>
            <Icon name="chevron right" />
            All Collections
            <Icon name="chevron left" />
          </Heading>
        </Segment>
        <Segment.Group padded raised>
          <Segment>
            <Grid>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_53a33957-892d-4807-891b-5be444b43ed7.jpg?v=1611184848"
                      alt="80s-anime"
                      sizes="320px"
                    />
                    <CollectionTitle>80s Anime</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_ce49b96c-1f28-4c9a-9a0e-b5beabe7fa5f.png?v=1611186152"
                      alt="80s-cartoons"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>80s Cartoons</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_dd752d5d-d29a-4a72-8705-dd5322e4a17f_540x.png?v=1611185447"
                      alt="80s-horror"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>80s Horror</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_4db03abc-90d2-43b8-adf2-a6e309b698ea_540x.jpg?v=1611185707"
                      alt="80s-tv"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>80s TV</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_8ba85557-c6c9-4c2e-a430-7ceaafde9c65.jpg?v=1611185332"
                      alt="80s-video-games"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>80s Videogames</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_2cb8a73e-dc9d-4012-ba20-c05a690d9fb0.png?v=1611184913"
                      alt="90s-anime"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>90s Anime</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_90596a79-3051-4aad-afa6-1e83e31d3139.jpg?v=1611185630"
                      alt="90s-horror"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>90s Horror</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_7f4c6613-40bd-41d8-b0cc-615c1389bffa.png?v=1611185044"
                      alt="90s-sci-fi"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>90s Sci Fi</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
              <GridItem>
                <CollectionItem>
                  <CollectionItem_Link>
                    <BackgroundImage
                      data-parent-fit="cover"
                      src="https://cdn.shopify.com/s/files/1/0278/2835/5139/collections/temp_02398a7d-8d01-49fe-9e2d-4e8153a6fc0b.jpg?v=1611185836"
                      alt="90s-tv"
                      sizes="320px"
                      style={{ width: "320px", height: "320px" }}
                    />
                    <CollectionTitle>90s TV</CollectionTitle>
                  </CollectionItem_Link>
                </CollectionItem>
              </GridItem>
            </Grid>
          </Segment>
          <Segment>
              <Pagination
                defaultActivePage={5}
                totalPages={10}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              />
          </Segment>
        </Segment.Group>
      </Segment.Group>
    </main>
  );
};

export default Collections;
