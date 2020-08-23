import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../../utils/img/logo.svg";
import './index.css'

function Header () {
  return (
    <header className="navBar">
      <div className="logo">
        <img src={logo} width={60} alt="logo of the movie finder"/>
      </div>
      <ul className="nav__items">
        <li className="nav__item"><NavLink to="/">Home</NavLink></li>
        <li className="nav__item"><NavLink to="/choose">Choose For Me</NavLink></li>
        <li className="nav__item"><NavLink to="/subscribe">Subscribe</NavLink></li>
      </ul>
    </header>
  )
}

export default Header