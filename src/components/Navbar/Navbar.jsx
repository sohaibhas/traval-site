import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
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
        <BiSearch className="icons" style={{ marginRight: "1rem" }} />
        <BsPerson className="icons" />
      </div>
      <div className="humburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>
      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <li>Home</li>
          <li>Destination</li>
          <li>Traval</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icon">
            <button>Seacrch</button>
            <button>Account</button>
          </div>
          <div className="social-icon">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
