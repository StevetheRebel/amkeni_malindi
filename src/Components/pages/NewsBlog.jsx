import React, { useState } from "react";
import Footer from "../Footer/Footer";
import portfolioData from "./../../portfolio.json";
import { Link } from "react-router-dom";
import posts from "./../../posts.json";
import { truncateByWords } from "../../truncateByWords";
import { LazyLoadImage } from "react-lazy-load-image-component";

function NewsBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 9;

  const totalPages = Math.ceil(posts.length / postPerPage);

  const startIndex = (currentPage - 1) * postPerPage;
  const currentPosts = [...posts].reverse().slice(startIndex, startIndex + postPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  console.log(currentPosts);

  return (
    <div className="select-none ">
      <section className="bg-image12 pb-4 bg-fixed bg-cover bg-no-repeat min-h-screen px-4 pt-[154px] xs:pt-[160px] sm:pt-36  lg:px-[6%]">
        <h1 className="h2-text text-secondary text-center mb-2 md:mb-4">
          Annual Milestones and Achievements
        </h1>
        <EventTimeline />
      </section>

      {/* Blog Spot */}
      <section
        className="bg-light pt-4 pb-4 px-4 lg:px-[6%] min-h-screen"
        id="blogSpot"
      >
        <h2 className="h2-text text-center text-secondary">Blog Spot</h2>

        {/* Blog grid */}
        <div className="w-full grid place-items-center gap-y-4">
          {currentPosts.map((post, index) => (
            <BlogPost
              index={index}
              pic={post.image_url}
              title={post.title}
              date={post.date}
              time={post.time}
              blogpiece={post.content}
              link={`/blog/${post.id}`}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            className="px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages).keys()].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Template for the Annual Milestones and Achievements
const EventTimeline = () => {
  const sortedData = [...portfolioData.portfolio].sort((a, b) => {
    const getYear = (year) => {
      return typeof year === "string" ? parseInt(year.split(" ")[0], 10) : year;
    };

    return getYear(b.year) - getYear(a.year);
  });

  const [selectedYear, setSelectedYear] = useState(sortedData[0].year);

  return (
    <>
      <div className=" bg-white/40 backdrop-blur-sm flex flex-col w-full gap-4 p-4 rounded-2xl sm:flex-row sm:gap-6">
        {/* Render Button for Each Year */}
        <div className="flex gap-2 flex-wrap justify-center py-2 sm:flex-col sm:gap-5 xl:gap-6 ">
          {sortedData.map((item) => (
            <button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              className={`px-2 py-1 body-text rounded-2xl text-nowrap ${
                selectedYear === item.year ? "bg-primary" : "bg-primary/50"
              } xs:px-4 xs:py-2`}
            >
              Year {item.year}
            </button>
          ))}
        </div>

        {/* Display events for the selected year */}
        <div className="w-full">
          <h2 className="h2-text text-secondary/70 text-center">
            Events {selectedYear}
          </h2>
          <ul className="body-text list-disc list-inside flex flex-col gap-2 border-2 rounded-md p-2 md:gap-4 md:py-4 md:rounded-3xl ">
            {sortedData
              .find((item) => item.year === selectedYear)
              .events.map((event, index) => (
                <li key={index} className="bg-light p-1 rounded-md text-pretty">
                  {event}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// Template for the Blog posts
const BlogPost = ({ pic, title, date, time, blogpiece, link }) => {
  return (
    <>
      <div className=" w-[80%] aspect-[1/1.5] p-2 shadow-custom-shadow rounded-2xl overflow-hidden flex relative group md:w-full md:h-80">
        <LazyLoadImage
          src={pic}
          alt={title}
          className="w-full rounded-2xl object-cover h-full group-hover:brightness-50"
          placeholder={
            <div className="flex items-center justify-center bg-gray-300 h-full">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          }
        />
        <div className="w-full h-full px-2 pb-4 absolute right-[100%] group-hover:right-0 group-hover:animate-slideIn z-10 flex flex-col justify-around ">
          <h4 className="h3-text text-white px-2">{title}</h4>
          <div className="text-white flex gap-4 px-2 text-xs">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <p className="px-2 text-white body-text">
            {truncateByWords(blogpiece, 15)}
          </p>
          <Link
            to={link}
            className="button-type self-start button-text bg-primary/70 hover:bg-primary hover:text-black px-4 py-2 ml-2"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsBlog;
