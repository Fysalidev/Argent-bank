import logo from "../assets/argentBankLogo.png";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserLogin, selectUser } from "../utils/redux/selectors"
import { logOut } from "../utils/redux/reducers";

function Header() {
  
  const dispatch = useDispatch()
  const isUserLogIn = useSelector(selectUserLogin)
  const user = useSelector(selectUser)

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
        {!isUserLogIn ? <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          <span> Sign In</span>
        </NavLink>
          :
          <div>
            <NavLink className="main-nav-item" to="/">
              <i className="fa fa-user-circle"></i>
              <span> {user.firstName}</span>
            </NavLink>
            <NavLink className="main-nav-item" to="/">
              <i className="fa-solid fa-right-from-bracket"></i>
              <span onClick={()=> dispatch(logOut())}> Sign Out</span>
            </NavLink>
          </div>
        }
      </div>
    </nav>
  );
}

export default Header;