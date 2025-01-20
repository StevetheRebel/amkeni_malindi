import React, { useState } from "react";
import Footer from "../Footer/Footer";
import portfolioData from "./../../portfolio.json";
import { Link } from "react-router-dom";
import posts from "./../../posts"
import { truncateText } from "../../truncateText";

function NewsBlog() {
  return (
    <div className="relative select-none h-auto top-[154px] xs:top-[160px] sm:top-36 ">
      <section className="px-4 lg:px-[6%]">
        <h1 className="h2-text text-secondary text-center mb-2 md:mb-4">
          Annual Milestones and Achievements
        </h1>
        <EventTimeline />
      </section>
      <section className="px-4 lg:px-[6%]">
        <h1 className="h2-text text-secondary text-center my-2">News & Blog</h1>
        <div className="grid grid-cols-1 gap-y-4 justify-items-center sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4">
          {posts.map((post) => (
            <div key={post.id} className="border-2 w-[80%] min-w-[200px] flex flex-col gap-4 p-2 ">
              <h3 className="h3-text text-secondary/70">{post.title}</h3>
              <p className="body-text">{truncateText(post.content, 100)}</p>
              <Link to={`/blog/${post.id}`} className='py-2 px-4 bg-primary/70 hover:bg-primary self-start rounded-2xl'>Read More</Link>
            </div>
          ))}
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
      <div className="flex flex-col w-full gap-4 sm:flex-row sm:gap-6">
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
                <li key={index} className="bg-light p-1 rounded-md">
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

export default NewsBlog;
