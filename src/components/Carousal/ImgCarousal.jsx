import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Borabora from "../../assets/borabora.jpg";
import Borabora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import "./ImgCarousal.css";

const ImgCarousal = () => {
  return (
    <div name="view" className="container">
      <Carousel className="carousel" showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={Borabora} alt="/" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Borabora2} alt="/" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Maldives} alt="/" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousal;
