import { React, lazy, useState } from "react";
import Navigation from "./../src/Components/Navigation/Navigation";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./../src/Components/pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";
import { useNavigationLoading } from "./Hook/useNavigationLoading";
import { WpPostsProvider } from "./Components/context/WpPostsContext";
import RainbowLoader from "./Components/Loader/RainbowLoader";

const About = lazy(() => import("./../src/Components/pages/About"));
const Program = lazy(() => import("./../src/Components/pages/Program"));
const Opportunities = lazy(() =>
  import("./../src/Components/pages/Opportunities")
);
const NewsBlog = lazy(() => import("./../src/Components/pages/NewsBlog"));
const Reachout = lazy(() => import("./../src/Components/pages/Reachout"));
const BlogPost = lazy(() => import("./Components/pages/BlogPost"));

function App() {
  const location = useLocation();
  const { isLoading, isVisible } = useNavigationLoading(3000);

  return (
    <>
      {location.pathname.startsWith("/blog") ? null : <Navigation />}
      <ScrollToTop>
        {(isLoading || isVisible) && <RainbowLoader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program-services" element={<Program />} />
          <Route
            path="/opportunities-services"
            element={
              <WpPostsProvider>
                <Opportunities />
              </WpPostsProvider>
            }
          />
          <Route
            path="/news-blog"
            element={
              <WpPostsProvider>
                <NewsBlog />
              </WpPostsProvider>
            }
          />
          <Route path="/reachout" element={<Reachout />} />
          <Route
            path="/blog/:postId"
            element={
              <WpPostsProvider>
                <BlogPost />
              </WpPostsProvider>
            }
          />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
