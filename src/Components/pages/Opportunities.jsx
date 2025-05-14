import React, { useEffect, useMemo, useState } from "react";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faClock,
  faLink,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import { truncateByWords } from "./../../truncateByWords";
import volunteering from "./../../../public/volunteering.webp";
import open from "./../../../public/open.webp";
import closed from "./../../../public/close.webp";
import { useWpPosts } from "../context/WpPostsContext";
import DOMPurify from "dompurify";
import he from "he";
import Rainbow from "../Loader/Rainbow";

function Opportunities() {
  const [openContainerIndex, setOpenContainerIndex] = useState(null);
  const { wpPosts, loading, isFetchingComplete } = useWpPosts();

  // START OF UTILITY FUNCTIONS
  const parseWpDate = (dateString) => {
    const date = new Date(dateString);

    // Set deadline to 5pm EAT (UTC+3) o the 7th day
    const deadline = new Date(date);
    deadline.setDate(date.getDate() + 7);
    deadline.setHours(17, 0, 0, 0); //5pm EAT
    return { postedDate: date, deadline };
  };

  const extractLocation = (title) => {
    const locations = [
      "mombasa",
      "remote",
      "taita taveta",
      "kwale",
      "tana river",
    ];
    const lowerTitle = title.toLowerCase();
    const foundLocation = locations.find((loc) => lowerTitle.includes(loc));
    return foundLocation
      ? foundLocation.charAt(0).toUpperCase() + foundLocation.slice(1)
      : "Kilifi";
  };

  const determinePosition = (title) => {
    return title.toLowerCase().includes("volunteer") ? "Volunteer" : "Staff";
  };

  const isPositionActive = (deadline) => {
    return new Date() < new Date(deadline);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const sanitizeContent = (html) => {
    const decoded = he.decode(html);
    return DOMPurify.sanitize(decoded, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
  };
  // END OF UTILITY FUNCTIONS

  // Process posts when data is available
  const { activePosts, closedPosts } = useMemo(() => {
    const active = [];
    const closed = [];

    if (isFetchingComplete) {
      wpPosts.forEach((post) => {
        const categoryValues = Object.values(post.categories || {});
        const hasOpportunity = categoryValues.some(
          (cat) => cat.name === "OPPORTUNITIES"
        );

        if (hasOpportunity) {
          const { postedDate, deadline } = parseWpDate(post.date);
          const position = determinePosition(post.title);
          const location = extractLocation(post.title);
          const isActive = isPositionActive(deadline);

          const postData = {
            id: post.ID,
            title: post.title,
            excerpt: sanitizeContent(post.excerpt),
            location,
            deadline,
            position,
            isActive,
            formattedDeadline: formatDate(deadline),
            postedDate,
          };

          if (isActive) {
            active.push(postData);
          } else {
            closed.push(postData);
          }
        }
      });

      closed.sort((a, b) => b.postedDate - a.postedDate);
    }

    return { activePosts: active, closedPosts: closed };
  }, [wpPosts, isFetchingComplete]);

  const toggleCard = (index) => {
    setOpenContainerIndex(openContainerIndex === index ? null : index);
  };

  return (
    <div className="relative select-none h-auto scroll-smooth">
      <div className="fixed w-full bg-image3 bg-center bg-fixed bg-no-repeat min-h-screen -z-10"></div>

      {/* New Hiring Position */}

      <section className="h-auto px-4 pb-12 pt-[154px] xs:pt-[160px] sm:pt-36 lg:px-[6%] flex flex-col gap-4 ">
        <h1 className="h1-text text-center text-white ">Join our Team </h1>
        <div className="grid place-items-center grid-cols-1 gap-16 xs:pb-12 s:pb-6 md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-0 lg:grid lg:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 ">
          <HiringCard
            isOpen={openContainerIndex === 0}
            onToggle={() =>
              setOpenContainerIndex(openContainerIndex === 0 ? null : 0)
            }
            title="Volunteer Service Provider"
            summary="The Volunteer Service Providers Registry seeks to establish a pool of qualified, licensed professionals who are willing to offer their services when called upon to support community members."
            link={`https://forms.gle/z6yCMUPEaonAXCKP8`}
            tag="Apply Now..."
            image={volunteering}
            position="Service Provider"
          />
          <HiringCard
            isOpen={openContainerIndex === 1}
            onToggle={() =>
              setOpenContainerIndex(openContainerIndex === 1 ? null : 1)
            }
            title="Pro-Bono Lawyer Registry"
            summary={`The Pro-Bono Lawyer Volunteer Registry aims to build a reliable pool of legal professionals who are willing and ready to offer free legal assistance to our community members when needed.`}
            link="https://forms.gle/qCUvfMS7vYXKBuUE9"
            tag="Apply Now..."
            image={volunteering}
            position="Pro-bono Lawyer"
          />

          {/* Dynamic cards from wordpress */}
          {activePosts.map((post, index) => {
            const cardIndex = index + 2;
            return (
              <HiringCard
                key={post.id}
                isOpen={openContainerIndex === cardIndex}
                onToggle={() => toggleCard(cardIndex)}
                title={post.title}
                summary={post.excerpt}
                location={post.location}
                duration={post.formattedDeadline}
                position={post.position}
                link={`/blog/${post.id}`}
                tag="Read more..."
                image={open}
              />
            );
          })}
        </div>
      </section>

      {/* Closed Vacancies */}
      <section className="h-auto px-4 pb-12 lg:px-[6%] flex flex-col gap-4 ">
        <h1 className="h1-text text-center text-white ">Closed Vacancies </h1>
        {loading ? (
          <div className="w-full grid place-items-center mt-4">
            <Rainbow />
          </div>
        ) : (
          <div className="grid place-items-center grid-cols-1 gap-16 xs:pb-12 s:pb-6 md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-0 lg:grid lg:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 ">
            {closedPosts.map((post, index) => {
              return (
                <HiringCard
                  key={post.id}
                  isOpen={openContainerIndex === `closed-${index}`}
                  onToggle={() => toggleCard(`closed-${index}`)}
                  title={he.decode(post.title)}
                  summary={post.excerpt}
                  location={post.location}
                  duration="Closed"
                  position={post.position}
                  link={`/blog/${post.id}`}
                  tag="View Details"
                  image={closed}
                />
              );
            })}
          </div>
        )}
      </section>

      {/* <section className="bg-light min-h-screen flex flex-col gap-4 justify-center p-4 lg:px-[6%]"></section> */}
      <Footer />
    </div>
  );
}

function HiringCard({
  title,
  summary = "No description available",
  location = "Kilifi",
  duration = "Ongoing",
  position = "Staff",
  link,
  isOpen,
  onToggle,
  tag,
  image = closed,
}) {
  return (
    <>
      <div className="relative w-[80%] aspect-[1/1.35] group [perspective:1000px] s:w-[70%] sx:w-[60%] md:w-auto md:aspect-auto flex justify-center ">
        {/* Mobile and large screen devices */}
        <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] md:hidden lg:block lg:aspect-[1/1.25] ">
          {/* Image */}
          <div className="absolute inset-0 ">
            <img
              src={image}
              alt="hiring picture"
              className="w-full h-full rounded-2xl object-center object-cover shadow-xl shadow-black/40"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col rounded-2xl justify-between w-full inset-0 h-full px-2 pt-2 pb-12 bg-white/30 backdrop-blur-2xl [transform:rotateY(180deg)] [backface-visibility:hidden] xs:px-3 xs:pb-16 xs:pt-8 s:px-3 lg:px-3 lg:pb-12 lg:pt-1">
            <h3 className="h3-text font-bold lg:text-2xl ">
              {truncateByWords(title, 4)}
            </h3>
            <div>
              <span className="h4-text">Brief: </span>
              <span className="body-text xl:text-base">{truncateByWords(summary, 15)}</span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="body-text font-bold">
                <FontAwesomeIcon icon={faLocationCrosshairs} /> Location:{" "}
                <span className="font-normal text-[12px] sx:text-base">
                  {location || `Kilifi`}
                </span>
              </p>
              <p className="body-text font-bold">
                <FontAwesomeIcon icon={faClock} /> Deadline:{" "}
                <span className="font-normal text-[12px] sx:text-base">
                  {duration || `Ongoing`}
                </span>
              </p>
              <p className="body-text font-bold">
                <FontAwesomeIcon icon={faCircleUser} /> Position:{" "}
                <span className="font-normal text-[12px] sx:text-base">
                  {position || `Staff`}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Tablet screens */}
        <div className="hidden md:block lg:hidden w-[90%] xl:">
          <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden flex group">
            {/* Image */}
            <div
              className="inset-0 z-0 w-full max-w-[350px] "
              onClick={onToggle}
            >
              <img src={image} alt="" className="h-full w-full object-cover " />
            </div>

            {/* Content */}
            <div
              className={`w-full h-[inherit] bg-white/50 backdrop-blur-sm flex-col gap-2 p-4 border-black ${
                isOpen ? `flex` : `hidden`
              } max-w-[350px]`}
              onClick={onToggle}
            >
              <h3 className="h4-text font-bold">{truncateByWords(title, 4)}</h3>
              <div>
                <span className="h5-text">Brief: </span>
                <span className="body-text">
                  {truncateByWords(summary, 15)}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="body-text font-bold">
                  <FontAwesomeIcon icon={faLocationCrosshairs} /> Location:{" "}
                  <span className="font-normal">{location || `Kilifi`}</span>
                </p>
                <p className="body-text font-bold">
                  <FontAwesomeIcon icon={faClock} /> Deadline:{" "}
                  <span className="font-normal">{duration || `Ongoing`}</span>
                </p>
                <p className="body-text font-bold">
                  <FontAwesomeIcon icon={faCircleUser} /> Position:{" "}
                  <span className="font-normal">{position || `Staff`}</span>
                </p>
              </div>
              <a
                className="font-button-links text-sm tracking-wider button-type bg-primary/70 text-black/70 place-self-end hover:bg-primary hover:text-black "
                href={link}
                target="_blank"
              >
                {tag || `Read more...`}
              </a>
            </div>
          </div>
        </div>

        {/* Show Highlight Detail for mobile and large devices */}
        <div
          className={`absolute z-30 w-[80%] bottom-0 left-1/2 [perspective:1000px] transform -translate-x-1/2 translate-y-1/2 xs:w-[80%] sx:w-[60%] transition-all duration-500 md:hidden lg:block lg:w-[80%]`}
        >
          <div
            className={`relative w-full aspect-[3/1] rounded-xl transition-transform duration-500 [transform-style:preserve-3d] ${
              isOpen ? "rotate-y-180" : ""
            } group-hover:[transform:rotateY(180deg)] md:group-hover:[transform:rotateY(180deg)]`}
          >
            {/* Front */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center [backface-visibility:hidden]">
              <p className="font-subheading text-center text-black text-base md:text-lg lg:text-xl">
                {truncateByWords(title, 4)}
              </p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-xl flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              {link ? (
                <button className="text-black text-sm font-semibold md:hidden lg:block">
                  <a className="text-sm" href={link} target="_blank">
                    {tag || `Read more...`}
                  </a>
                </button>
              ) : (
                <p className="text-sm tracking-widest md:hidden lg:block">
                  <FontAwesomeIcon icon={faLink} /> Join us...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Show Highlight Details for tablets */}
        <div
          className={`absolute z-30 hidden w-[200px] max-w-[65%] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white/50 rounded-2xl backdrop-blur-sm md:block lg:hidden ${
            isOpen ? `md:hidden` : ``
          } `}
        >
          <p className="font-subheading text-center text-black text-lg p-1">
            {truncateByWords(title, 4)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Opportunities;
