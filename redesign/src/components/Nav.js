import React from "react";
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
  background-color: transparent;

  display: table;
  table-layout: fixed;
  width: 100%;
  margin-left: 0;

  ::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const LogoGridItem = styled.div`
  padding-left: 0;
  float: none;
  display: table-cell;
  vertical-align: middle;

  @media only screen and (min-width: 750px) {
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
`;

const HomeLink = styled(Link)`
  margin: 0 auto;
`;

const Logo = styled.img`
  max-width: 200px !important;
  width: 100%;
  height: auto;
  border: none;
`;

const Navbar = styled.nav`
  float: none;
  display: table-cell;
  vertical-align: middle;
  padding-left: 0;

  @media only screen and (min-width: 750px) {
    width: 50%;
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

const NavText = styled.span`
  &:hover {
    text-decoration: underline;
    border-bottom-color: #fff;
    border-bottom: 1px solid transparent;
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

  @media only screen and (min-width: 750px) {
    width: 25%;
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
    padding: 0 55px 0 0;
  }
`;

const SearchButton = styled.button`
  color: #fff;
  transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
  background-color: transparent;
  border: 0;
  margin: 0;
  color: black;
  text-align: left;
  cursor: pointer;
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

  @media only screen and (min-width: 750px) {
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

  @media only screen and (min-width: 750px) {
    padding: 10px 11px;
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
  right: 0.1em;
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
`;

const Count = styled.span`
  padding: 0.25em calc(6em / 16);
  font-size: 12px;
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: calc(11em / 16);
  line-height: 1;
`;

const MobileNavToggle = styled.button`
  display: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  color: black;
  text-align: left;
  cursor: pointer;
`;

const MobileNav = styled.nav``;

const Nav = () => {
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
              <NavLink to="/daily_deals">
                <NavText>Daily Deals</NavText>
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink to="/collections">
                <NavText>Collections</NavText>
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink to="/artists">
                <NavText>Artists</NavText>
              </NavLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavLink to="/collections/last-chance-tees">
                <NavText>Last Chance Tees</NavText>
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

            <MobileNavToggle type="button">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-hamburger"
                viewBox="0 0 37 40">
                <path d="M33.5 25h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0-11.5h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2zm0 23h-30c-1.1 0-2-.9-2-2s.9-2 2-2h30c1.1 0 2 .9 2 2s-.9 2-2 2z"></path>
              </svg>

              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                class="icon icon-close"
                viewBox="0 0 40 40">
                <path
                  d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
                  class="layer"></path>
              </svg>
            </MobileNavToggle>
          </HeaderIconsWrapper>
        </HeaderIcons>
      </GridContainer>

      <MobileNav></MobileNav>
    </Header>
  );
};

export default Nav;
