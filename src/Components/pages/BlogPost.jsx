import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import posts from "./../../posts";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === postId);

  const scrollWithOffset = (el) => {
    const yOffset = -130;
    const yPosition =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="relative select-none ">

      {/* Blog container */}
      <div className=" flex flex-col gap-4">

        {/* header image container */}
        <div className="w-full h-[50svh] min-h-[280px] relative xs:max-h-[280px] z-10 sm:min-h-[400px] 2xl:min-h-[500px] ">
          <LazyLoadImage
            src={post.image_url}
            alt={post.title}
            className="w-full h-full object-cover absolute brightness-[.4]"
          />
          <div className="absolute px-2 h-full flex flex-col justify-between py-4 z-10 md:px-6 lg:px-[6%]">
            <h1 className="h1-text text-white text-center sm:px-10">
              {post.title}
            </h1>
            <p className="body-text text-white h-1/3 flex items-end pb-2">{`Date: ${post.date} Time: ${post.time}`}</p>

            {/* Navigation Options */}
            <div className="flex w-1/2 justify-between md:w-1/4 2xl:w-1/5">
              <button
                className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <HashLink 
              smooth 
              to={"/news-blog#blogSpot"}
              scroll={scrollWithOffset} 
              className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black">
                News & Blog
              </HashLink>
            </div>
          </div>
        </div>

        {/* content container */}
        <div className="px-4 lg:px-[6%] ">
          {bundleTextIntoParagraphs(post.content, 4).map((para, index) => (
            <p key={index} className="body-text text-justify">
              {para}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
