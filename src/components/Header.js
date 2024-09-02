import React from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="navbar">
        <div class="nav-menu">
          <a href="#" class="logo">
            Travel
          </a>
          <a href="#" id="items">
            Home
          </a>
          <Link id="items" to="/">
            About
          </Link>
          {/* <a href="#" id="items">
            About
          </a> */}
          <a href="#" id="items">
            Discover
          </a>
          <a href="#" id="items">
            Places
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
