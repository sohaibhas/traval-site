import React from "react";
import ImgCarousal from "./components/Carousal/ImgCarousal";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Select from "./components/Select/Select";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <ImgCarousal />
      <Footer />
    </div>
  );
}

export default App;
