import React, { useState, useEffect } from "react";
import "../styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 200;
  border-bottom-color: #dc4d8c;
  /* background-color: #de3163; */
  background-color: #d72483;

  @media only screen and (min-width: 750px) {
    padding: 0px;
  }
`;

const GridContainer = styled.div`
  zoom: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 11;
  position: relative;
  background-color: #d72483;

  display: flex;
  table-layout: fixed;
  width: 100%;
  margin-left: 0;

  ::after {
    content: "";
    display: table;
    clear: both;
  }

  @media (max-width: 804px) {
    height: 60px;
  }
`;

const LogoGridItem = styled.div`
  padding-left: 0;
  float: none;
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  margin: auto 0;

  @media only screen and (min-width: 804px) {
    width: 25%;
  }
`;

const Site_Header_Logo = styled.h1`
  margin: 0;
  padding: 8px 0 8px 55px;
  letter-spacing: 0;
  font-weight: 600;

  @media only screen and (min-width: 750px) {
    padding: 8px 0 8px 55px;
  }

  @media only screen and (max-width: 749px) {
    padding-left: 22px;
    text-align: left;
  }
`;

const HomeLink = styled(Link)`
  margin: 0 auto;
  display: block;
`;

const Logo = styled.img`
  max-width: 200px !important;
  width: 100%;
  height: auto;
  border: none;
  display: block;

  @media (max-width: 804px) {
    max-width: 100px !important;
  }
`;

const Navbar = styled.nav`
  float: none;
  display: table-cell;
  vertical-align: middle;
  padding-left: 0;

  @media only screen and (max-width: 804px) {
    width: 100%;
    display: none !important;
  }

  @media only screen and (min-width: 750px) {
    width: 100%;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  position: static;
  padding: 0;
  text-align: center;
`;

const NavMenuItem = styled.li`
  list-style: none;
  padding: 17px 0;
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  color: #000;
  position: relative;
`;

const NavLink = styled(Link)`
  color: #ffff;
  text-decoration: none;
  touch-action: manipulation;
  background-color: transparent;
  font-size: 18px;
  font-weight: 600;
  padding: 3px 10px;
  -webkit-transition: all ease 0.4s;
  transition: all ease 0.1s;
  display: block;
  white-space: nowrap;

  &:hover {
    color: white;
  }
`;

const NavMenuItem_HasDropDown = styled.li`
  position: static;
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  padding: 17px 0;
`;

const NavLinkButton = styled.button`
  color: #fff;
  font-size: 18px;
  border: none;
  background-color: transparent;
  padding: 3px 10px;
  display: block;
  white-space: nowrap;
  cursor: pointer;
  font: inherit;
  margin: 0;
  font-weight: 600;

  @media only screen and (max-width: 989px) {
    font-size: 18px;
  }

  &:focus {
    outline: none;
    border-bottom-color: transparent;
  }
`;

const NavLabel = styled.span`
  border-bottom: 1px solid transparent;
  &:hover {
    text-decoration: underline;
    border-bottom-color: #fff;
    border-bottom: 1px solid transparent;
  }
`;

const NavText = styled.span`
  &:hover {
    text-decoration: underline;
    border-bottom-color: #fff;
    border-bottom: 1px solid transparent;
  }
`;

const IconDown = styled.svg`
  width: calc(8em / 16);
  height: calc(8em / 16);
  margin-left: 0.5rem;

  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
`;

const SiteNavDropDownMenu = styled.div`
  left: 0;
  right: 0;
  padding: 0;
  top: 80px;
  width: 90%;
  border: none;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
  position: absolute;
  margin: auto;
  z-index: 7;
  text-align: left;
  background: white;
  display: none;

  @media only screen and (max-width: 2000px) {
    top: 67px;
  }

  @media only screen and (max-width: 1440px) {
    top: 67px;
  }

  @media only screen and (max-width: 990px) {
    top: 67px;
  }
`;

const Collections = styled.div`
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CollectionsCategories = styled.li`
  background-color: #eee;
  padding: 10px 30px 30px 60px;
  /* display: grid; */
  float: left;
  background-color: #eee;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 749px) {
    padding-left: 22px;
  }
`;

const CollectionsList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

const Heading = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding: 20px 0 20px 0;
  color: black;
  background-color: #eee;
  color: #df3882;
`;

const FeatureHeading = styled.p`
  background-color: #fff;
  padding: 30px 0 10px 0;
  font-weight: bold;
  font-size: 18px;
  padding: 20px 0 20px 0;
  color: black;
  color: #df3882;
`;

const Category = styled.p`
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  height: 27px;
  display: block;
  padding-right: 13px;
  cursor: pointer;
  color: black;
  margin: 0 0 0.5rem 0;
`;

const CategoryLink = styled(Link)`
  color: #000;
  font-weight: bold;
  font-size: 16px;
  padding: 0;
  text-decoration: none;

  &:hover {
    color: #df3882;
  }
`;

const FeaturedCollections = styled.li`
  padding: 10px 30px 30px 60px;
  float: right;
`;

const FeaturedList = styled.ul`
  display: grid;
  padding: 0;
  margin: 0;
  display: grid;

  @media only screen and (min-width: 990px) {
    width: 100%;
  }
`;

const ArtistDropDownMenu = styled.li`
  &:hover,
  &:focus {
    display: block;
  }
`;

const HeaderIcons = styled.div`
  padding-left: 0;
  float: none;
  display: table-cell;
  vertical-align: middle;
  position: relative;
  white-space: nowrap;
  text-align: right !important;
  margin: auto 0;

  @media only screen and (min-width: 750px) {
    width: 25%;
  }

  @media (max-width: 804px) {
    padding-right: 5px;
    width: auto;
  }
`;

const HeaderIconsWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  white-space: nowrap;

  @media only screen and (min-width: 750px) {
    padding-right: 5px;
  }
`;

const SearchButton = styled.button`
  color: #fff;
  transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
  background-color: transparent;
  border: 0;
  margin: 0 auto;
  color: black;
  text-align: left;
  cursor: pointer;
  position: relative;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 750px) {
    padding: 9px 11px 10px 11px;
  }
`;

const SearchIcon = styled.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: #ffff;
  overflow: hidden;
  text-align: left;

  @media only screen and (min-width: 750px) {
    margin-right: 3px;
  }
`;

const AccountLink = styled(Link)`
  margin: 0 auto;
  position: relative;
  color: #fff;
  transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);

  @media only screen and (min-width: 400px) {
    padding: 10px 11px;
  }
`;

const AccountIcon = styled.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: #ffff;
  overflow: hidden;
`;

const CartLink = styled(Link)`
  margin: 0 auto;
  position: relative;
  color: #fff;
  transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);

  @media only screen and (min-width: 400px) {
    padding: 10px 11px;
  }

  @media only screen and (max-width: 749px) {
    display: inline-block;
    padding: 10px 11px;
    margin: 0;
  }
`;

const CartIcon = styled.svg`
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: #ffff;
  overflow: hidden;
`;

const CartCount = styled.div`
  right: 0;
  top: 0.2rem;
  background-color: #000;
  height: calc(19em / 16);
  color: white;
  border-radius: 50%;
  min-width: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;

  @media only screen and (max-width: 749px) {
    font-size: 1em;
  }
`;

const Count = styled.span`
  padding: 0.25em calc(6em / 16);
  font-size: 12px;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(11em / 16);
  line-height: 1;
`;

const MobileNavToggle = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0;
  color: white;
  text-align: left;
  cursor: pointer;

  @media only screen and (min-width: 804px) {
    display: none;
  }
`;

const Hamburger = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
  vertical-align: middle;
`;

const Close = styled.svg`
  padding: 2px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  fill: currentColor;
`;

const MobileNav = styled.nav`
  background-color: #eee;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 400ms cubic-bezier(0.29, 0.63, 0.44, 1);
  overflow: hidden;
  width: 100%;
  max-height: 77vh !important;
  overflow-y: auto !important;

  @media only screen and (min-width: 804px) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  background-color: #eee;
  box-shadow: 0 5px 10px 0 rgb(0 0 0 / 50%);
  display: block;
  transform: translate3d(0, 0, 0);
  transition: all 400ms cubic-bezier(0.29, 0.63, 0.44);
`;

const MobileNavItem = styled.li`
  border-bottom: 1px solid #fff;
  display: block;
  width: 100%;
`;

const MobileNavLink = styled(Link)`
  padding: 15px 25px;
  position: relative;
  display: block;
  width: 100%;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  /* border-bottom-color: #000; */

  &:hover {
    color: #df3882;
    text-decoration: underline;
  }
`;

const CollectionsAccordion = styled.div`
  padding: 15px 25px;
  position: relative;
  display: block;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  color: black;
  font-weight: bold;

  &:hover {
    color: #df3882;
  }
`;

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  margin: -6px 0 0 -7px;
  width: 30px;
  color: #df3882;
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  transform: translate(0, 0);
`;

const CollectionItemsList = styled.ul`
  padding-left: 40px;
`;

const CollectionItem = styled.li`
  padding-top: 2px;
`;

const CollectionLink = styled(MobileNavLink)`
  padding: 0 0 8px 0;
  font-size: 14px;

  &:hover {
    color: #df3882;
    text-decoration: underline;
  }
`;

const Nav = () => {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <Header role="banner">
      <GridContainer>
        <LogoGridItem>
          <Site_Header_Logo>
            <HomeLink to="/">
              <Logo
                data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"
                data-aspectratio="3.9682539682539684"
                data-sizes="auto"
                alt="ShirtPunch"
                data-srcset="//cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_180x.png?v=1589397281 180w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_360x.png?v=1589397281 360w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_540x.png?v=1589397281 540w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_720x.png?v=1589397281 720w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_900x.png?v=1589397281 900w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1080x.png?v=1589397281 1080w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1296x.png?v=1589397281 1296w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1512x.png?v=1589397281 1512w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1728x.png?v=1589397281 1728w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_2048x.png?v=1589397281 2048w"
                sizes="200px"
                srcSet="//cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_180x.png?v=1589397281 180w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_360x.png?v=1589397281 360w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_540x.png?v=1589397281 540w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_720x.png?v=1589397281 720w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_900x.png?v=1589397281 900w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1080x.png?v=1589397281 1080w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1296x.png?v=1589397281 1296w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1512x.png?v=1589397281 1512w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_1728x.png?v=1589397281 1728w, //cdn.shopify.com/s/files/1/0278/2835/5139/files/logo_2048x.png?v=1589397281 2048w"
              />
            </HomeLink>
          </Site_Header_Logo>
        </LogoGridItem>

        <Navbar id="AccessibleNav" role="navigation">
          <NavMenu id="SiteNav">
            <NavMenuItem>
              <NavLink to="/all-tees">
                <NavText>Shop</NavText>
              </NavLink>
            </NavMenuItem>

            <NavMenuItem_HasDropDown className="site-nav--has-dropdown">
              <NavLinkButton className="site-nav--has-dropdown">
                <Link
                  to="/collections"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}>
                  <NavLabel>Collections</NavLabel>
                </Link>

                <IconDown
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  class="icon icon-chevron-down"
                  viewBox="0 0 9 9">
                  <path
                    d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z"
                    fill="#fff"></path>
                </IconDown>
              </NavLinkButton>
              <SiteNavDropDownMenu className="site-nav__dropdown">
                <Collections>
                  <CollectionsCategories>
                    <Heading>Shop by Collections</Heading>
                    <CollectionsList>
                      <Category class="category" id="all-collections">
                        <CategoryLink to="/collections" onClick={toggleClass}>
                          Shop All Collections
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="cult-movies">
                        <CategoryLink to="" onClick={toggleClass}>
                          Cult Movies
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="animated-films">
                        <CategoryLink to="" onClick={toggleClass}>
                          Animated Films
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="anime">
                        <CategoryLink to="#" onClick={toggleClass}>
                          Anime
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="sci-fi">
                        <CategoryLink to="" onClick={toggleClass}>
                          Sci Fi
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="comic-books">
                        <CategoryLink to="" onClick={toggleClass}>
                          Comic Books
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="videogames">
                        <CategoryLink to="" onClick={toggleClass}>
                          Videogames
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="horror">
                        <CategoryLink to="" onClick={toggleClass}>
                          Horror
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="tv">
                        <CategoryLink to="" onClick={toggleClass}>
                          TV
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="cartoons">
                        <CategoryLink to="" onClick={toggleClass}>
                          Cartoons
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="magic-and-fantasy">
                        <CategoryLink to="" onClick={toggleClass}>
                          Magic And Fantasy
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="themes">
                        <CategoryLink to="" onClick={toggleClass}>
                          Themes
                        </CategoryLink>
                      </Category>
                    </CollectionsList>
                  </CollectionsCategories>
                  <FeaturedCollections>
                    <FeatureHeading>Featured Collections</FeatureHeading>
                    <FeaturedList>
                      <Category class="category" id="cult-90s-classics">
                        <CategoryLink to="" onClick={toggleClass}>
                          Cult 90s Classics
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="neo-tokyo">
                        <CategoryLink to="" onClick={toggleClass}>
                          Neo Tokyo
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="crystal-lake">
                        <CategoryLink to="" onClick={toggleClass}>
                          Crystal Lake
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="80s-sci-fi">
                        <CategoryLink to="" onClick={toggleClass}>
                          80s Sci-Fi
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="dark-knight">
                        <CategoryLink to="" onClick={toggleClass}>
                          Dark Knight
                        </CategoryLink>
                      </Category>
                      <Category class="category" id="pc-gaming">
                        <CategoryLink to="" onClick={toggleClass}>
                          PC Gaming
                        </CategoryLink>
                      </Category>
                    </FeaturedList>
                  </FeaturedCollections>
                </Collections>
              </SiteNavDropDownMenu>
              <ArtistDropDownMenu></ArtistDropDownMenu>
            </NavMenuItem_HasDropDown>

            <NavMenuItem>
              <NavLink to="/artists">
                <NavText>Artists</NavText>
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink to="/sale">
                <NavText>Sale</NavText>
              </NavLink>
            </NavMenuItem>
          </NavMenu>
        </Navbar>

        <HeaderIcons>
          <HeaderIconsWrapper>
            <SearchButton type="button">
              <SearchIcon
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 37 40">
                <path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path>
                <span
                  class="icon__fallback-text"
                  style={{
                    position: "absolute !important",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                  }}>
                  Search
                </span>
              </SearchIcon>
            </SearchButton>

            <AccountLink to="/account/login">
              <AccountIcon
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-login"
                viewBox="0 0 28.33 37.68">
                <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
                <span
                  class="icon__fallback-text"
                  style={{
                    position: "absolute !important",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                  }}>
                  Log in
                </span>
              </AccountIcon>
            </AccountLink>

            <CartLink to="/cart" data-no-instant>
              <CartIcon
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-cart"
                viewBox="0 0 37 40">
                <path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
                <span
                  class="icon__fallback-text"
                  style={{
                    position: "absolute !important",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                  }}>
                  Cart
                </span>
              </CartIcon>
              <CartCount id="CartCount" data-cart-count-bubble="">
                <Count data-cart-count="">1</Count>
                <span
                  class="icon__fallback-text medium-up--hide"
                  style={{
                    position: "absolute !important",
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                    height: "1px",
                    width: "1px",
                    margin: "-1px",
                    padding: "0",
                    border: "0",
                  }}>
                  item
                </span>
              </CartCount>
            </CartLink>

            <MobileNavToggle
              type="button"
              className={isActive ? "mobile-nav--close" : "mobile-nav--open"}
              aria-expanded={isActive ? "true" : "false"}
              aria-label="Menu"
              onClick={toggleClass}>
              <Hamburger
                className="icon-hamburger"
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 37 40">
                <path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
              </Hamburger>

              <Close
                className="icon-close"
                aria-hidden="true"
                focusable="false"
                role="presentation"
                viewBox="0 0 40 40">
                <path d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"></path>
              </Close>
            </MobileNavToggle>
          </HeaderIconsWrapper>
        </HeaderIcons>
      </GridContainer>

      <MobileNav
        className={
          isActive
            ? "mobile-nav-wrapper medium-up--hide js-menu--is-open"
            : "mobile-nav-wrapper medium-up--hide is-transitioning"
        }
        role="navigation"
        style={
          isActive
            ? { transform: "translateY(60px)" }
            : { transform: "translateY(-100%)" }
        }>
        <MobileNavList>
          <MobileNavItem onClick={toggleClass}>
            <MobileNavLink to="/all-tees">Shop</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            {/* <MobileNavLink to="/collections">Collections</MobileNavLink> */}
            <CollectionsAccordion onClick={toggleAccordion}>
              <Arrow
                className={show ? "fa fa-caret-down" : "fa fa-caret-right"}
              />
              Collections
            </CollectionsAccordion>
            <CollectionItemsList
              style={show ? { display: "block" } : { display: "none" }}>
              <CollectionItem>
                <CollectionLink to="/collections" onClick={toggleClass}>
                  Shop All Collections
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/animated-films" onClick={toggleClass}>
                  Animated Films
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/sci-fi" onClick={toggleClass}>
                  Sci Fi
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/video-games" onClick={toggleClass}>
                  VideoGames
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/tv" onClick={toggleClass}>
                  TV
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/magic-and-fantasy" onClick={toggleClass}>
                  Magic And Fantasty
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/cult-movies" onClick={toggleClass}>
                  Cult Movies
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/anime" onClick={toggleClass}>
                  Anime
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/comic-books" onClick={toggleClass}>
                  Comic Books
                </CollectionLink>
                <CollectionLink to="/horror" onClick={toggleClass}>
                  Horror
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/cartoons" onClick={toggleClass}>
                  Cartoons
                </CollectionLink>
              </CollectionItem>
              <CollectionItem>
                <CollectionLink to="/themes" onClick={toggleClass}>
                  Themes
                </CollectionLink>
              </CollectionItem>
            </CollectionItemsList>
          </MobileNavItem>
          <MobileNavItem onClick={toggleClass}>
            <MobileNavLink to="/artists">Artists</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem onClick={toggleClass}>
            <MobileNavLink to="/sale">Sale</MobileNavLink>
          </MobileNavItem>
        </MobileNavList>
      </MobileNav>
    </Header>
  );
};

export default Nav;
