import React from "react";
import Destination from "./components/Destination/Destination";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
    </div>
  );
}

export default App;
