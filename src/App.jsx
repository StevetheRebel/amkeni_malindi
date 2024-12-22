import React from "react";
import Navigation from "./../src/Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./../src/Components/pages/Home";
import About from "./../src/Components/pages/About";
import Program from "./../src/Components/pages/Program";
import Opportunities from "./../src/Components/pages/Opportunities";
import NewsBlog from "./../src/Components/pages/NewsBlog";
import Reachout from "./../src/Components/pages/Reachout";

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
