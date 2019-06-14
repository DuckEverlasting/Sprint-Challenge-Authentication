import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/">All the Jokes</NavLink>
    </nav>
  );
};

export default NavBar