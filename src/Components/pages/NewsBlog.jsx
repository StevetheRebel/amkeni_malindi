import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import portfolioData from "./../../portfolio.json";
import { Link } from "react-router-dom";
import { truncateByWords } from "../../truncateByWords";
import { LazyLoadImage } from "react-lazy-load-image-component";
import pic1 from "./../../assets/Office Pics/Office1.webp";
import DOMPurify from "dompurify";
import he from "he";
import Rainbow from "../Loader/Rainbow";
import { useWpPosts } from "../context/WpPostsContext";

function NewsBlog() {
  const {wpPosts, loading, isFetchingComplete } = useWpPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const [isPageChanging, setIsPageChanging] = useState(false);
  const blogSpotRef = useRef(null);

  useEffect(() => {
    if (blogSpotRef.current) {
      const offset = 135;

      const topPos =
        blogSpotRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topPos - offset,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(wpPosts.length / postPerPage);

  const startIndex = (currentPage - 1) * postPerPage;
  const currentWpPosts = wpPosts.slice(startIndex, startIndex + postPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setIsPageChanging(true);
      setCurrentPage(page);

      setTimeout(() => {
        setIsPageChanging(false);
      }, 3000);
    }
  };

  const getPaginationRange = () => {
    const rangeSize = 5;
    let start = Math.max(1, currentPage - Math.floor(rangeSize / 2));
    let end = Math.min(totalPages, start + rangeSize - 1);

    if (end - start + 1 < rangeSize) {
      start = Math.max(1, end - rangeSize + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="select-none ">
      <section className="bg-image12 pb-4 bg-fixed bg-cover bg-no-repeat min-h-screen px-4 pt-[154px] xs:pt-[160px] sm:pt-36  lg:px-[6%]">
        <h1 className="h2-text text-secondary text-center mb-2 md:mb-4">
          Annual Milestones and Achievements
        </h1>
        <EventTimeline id="blogSpot" />
      </section>

      {/* Blog Spot */}
      <section
        className="bg-light pt-4 pb-4 px-4 lg:px-[6%] h-auto flex flex-col items-center justify-center"
        id="blogSpot"
        ref={blogSpotRef}
      >
        <h2 className="h2-text text-center text-secondary">Blog Spot</h2>

        {(isPageChanging || loading) && <div className="flex items-center justify-center my-12">
          <Rainbow />
          </div>}

        {!loading && (!isPageChanging && (
          <>
            {/* Pagination */}
            <div className="flex justify-center items-center my-6 space-x-2">
              <button
                className="px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {getPaginationRange().map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 border rounded-lg ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
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

            {/* Blog grid */}
            <div className="w-full grid place-items-center gap-y-4 lg:grid-cols-2 lg:gap-x-8 ">
              {currentWpPosts.map((post, index) => {
                const sanitizedContent = DOMPurify.sanitize(post.content);
                const firstAttachmentKey = Object.keys(post.attachments)[0];
                const imageUrl =
                  post.attachments[firstAttachmentKey]?.URL || pic1;

                return (
                  <BlogPost
                    key={index}
                    pic={imageUrl}
                    title={he.decode(post.title)}
                    date={post.date}
                    time={post.date}
                    blogpiece={truncateByWords(sanitizedContent, 11)}
                    link={`/blog/${post.ID}`}
                  />
                );
              })}
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
              {getPaginationRange().map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 border rounded-lg ${
                    currentPage === page
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
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
          </>
        ))}
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
      <div className=" bg-white/40 backdrop-blur-sm flex flex-col w-full gap-4 py-4 px-2 rounded-2xl sm:flex-row sm:gap-6 md:p-4 xl:py-2 2xl:min-h-[400px]">
        {/* Render Button for Each Year */}
        <div className="grid gap-2 grid-cols-3 justify-center py-2 sm:flex-col sm:gap-5 md:flex xl:gap-4 2xl:gap-2 2xl:w-[30%] 2xl:grid 2xl:items-center ">
          {sortedData.map((item) => (
            <button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              className={`px-1 py-1 button-text rounded-2xl text-nowrap ${
                selectedYear === item.year ? "bg-primary" : "bg-primary/50"
              } xs:px-1 xs:py-2`}
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
const BlogPost = ({ pic, title, date, blogpiece, link }) => {
  // Date format
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Time format
  const formattedTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Function to remove images and unwanted tags from the content
  const removeImages = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Remove all <img> tags
    const images = doc.querySelectorAll("img");
    images.forEach((img) => img.remove());

    // Remove all <figure> tags (often used to wrap images in Wordpress)
    const figures = doc.querySelectorAll("figures");
    figures.forEach((figure) => figure.remove());

    return doc.body.innerHTML;
  };

  // Sanitize the HTML content
  const sanitizedContent = DOMPurify.sanitize(removeImages(blogpiece));

  const displayContent =
    sanitizedContent.trim() === "" ? "Read more..." : sanitizedContent;

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = pic1;
  };

  return (
    <div className="bg-[linear-gradient(145deg,_#c8d6d4,_#eefffb)] w-[80%] aspect-[1/1.7] p-2 shadow-neomorph-shadow rounded-[2rem] overflow-hidden flex flex-col md:flex-row relative group md:w-full md:h-80 md:p-6 xl:h-96 lg:p-2 lg:rounded-2xl lg:shadow-neomorph-soft">
      <LazyLoadImage
        src={pic}
        alt={title}
        className="w-full h-[40%] rounded-2xl object-cover md:h-full md:group-hover:brightness-50"
        onError={handleImageError}
        placeholder={
          <div className="flex items-center justify-center bg-gray-300 h-full">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        }
      />
      <div className="w-full px-2 z-10 flex flex-col justify-around h-[60%] md:pb-4 md:h-full md:absolute md:right-[100%] md:top-0 md:group-hover:right-0 md:group-hover:animate-slideIn max-h-none md:p-6">
        <h4 className="h3-text text-black px-2 md:text-white">{title}</h4>
        <div className="text-black flex gap-4 px-2 text-xs md:text-white ">
          <p>{formattedDate}</p>
          <p>{formattedTime}</p>
        </div>
        {/* Render sanitized HTML content */}
        <div
          className="px-2 text-muted body-text md:text-white"
          dangerouslySetInnerHTML={{ __html: displayContent }}
        />
        <Link
          to={link}
          className="button-type self-start button-text bg-primary/70 hover:bg-primary hover:text-black px-4 py-2 ml-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsBlog;
