import { React, lazy } from "react";
import Navigation from "./../src/Components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./../src/Components/pages/Home";

const About = lazy(() => import("./../src/Components/pages/About"));
const Program = lazy(() => import("./../src/Components/pages/Program"));
const Opportunities = lazy(() =>
  import("./../src/Components/pages/Opportunities")
);
const NewsBlog = lazy(() => import("./../src/Components/pages/NewsBlog"));
const Reachout = lazy(() => import("./../src/Components/pages/Reachout"));

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
