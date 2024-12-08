import React from "react";
import Navigation from "./assets/Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/pages/Home";
import About from "./assets/Components/pages/About";
import Program from "./assets/Components/pages/Program";
import Opportunities from "./assets/Components/pages/Opportunities";
import NewsBlog from "./assets/Components/pages/NewsBlog";
import Reachout from "./assets/Components/pages/Reachout";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/program-services" element={<Program />} />
        <Route path="/opportunities-services" element={<Opportunities />} />
        <Route path="/news-blog" element={<NewsBlog />} />
        <Route path="/reachout" element={<Reachout />} />
      </Routes>
    </>
  );
}

export default App;
