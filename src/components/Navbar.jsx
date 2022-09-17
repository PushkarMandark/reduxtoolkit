import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className={"main_nav_container"}>
      <span>React Redux</span>

      <ul>
        <li>
          {/* we can pass function in className in Navlink to get isActive value in Boolean and use to Display the css when using css module*/}
          <NavLink to="/" className={"navLink"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={"navLink"}>
            Cart
          </NavLink>
        </li>
      </ul>
      <span className={"nav__cart"}>Cart item : 0</span>
    </div>
  );
};

export default Navbar;
