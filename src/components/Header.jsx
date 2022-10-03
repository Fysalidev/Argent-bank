import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";

function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;