import React from "react";
import Video from "../../assets/maldivesVideo.mp4";
import "./Hero.css";
import {AiOutlineSearch} from "react-icons/ai";

const Hero = () => {
  return (
    <div name="home" className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay">
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Location Worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations"/>
          </div>
          <div>
            <button><AiOutlineSearch className="icon"/></button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Hero;
