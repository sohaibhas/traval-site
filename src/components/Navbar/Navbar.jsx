import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destination</li>
        <li>Traval</li>
        <li>Book</li>
        <li>Views</li>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icons" />
        <BsPerson className="icons" />
      </div>
      <div className="humburger">
          <HiOutlineMenuAlt4 className="icons"/>
      </div>
    </div>
  );
};

export default Navbar;
