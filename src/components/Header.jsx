import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <HeaderWrapper>
      <NavLink to="/">
        <Logo src={logo} />
      </NavLink>
      <Navbar>
        <NavLink to="/signin">Sign in</NavLink>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
`;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const Navbar = styled.nav`
  font-weight: bold;
  & a {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;
