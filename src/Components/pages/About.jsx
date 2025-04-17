import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import staff from "./../../assets/Our Staff.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile1 from "./../../assets/Profiles/Profile1.webp";
import profile5 from "./../../assets/Profiles/Profile5.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import programData from "./../../pillars.json";
import secretariat from "./../../secretariat.json";
import Marquee from "react-fast-marquee";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import OrgHis from "./../../OrgHistory.json";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";

const aboutData = [
  {
    title: "our vision",
    description: "An Empowered, Just and Inclusive Society",
  },
  {
    title: "our mission",
    description:
      "To improve the quality of life of sexual and gender diverse communities through an integrated approach to health service provision, social and economic empowerment, knowledge generation and strategic advocacy.",
  },
  {
    title: "our values",
    description:
      "ACCOUNTABILITY, EXCELLENCE, NON-DISCRIMINATION & GENDER-MAINSTREAM",
  },
];

function About() {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-auto select-none ">
      {/* Mission, Vision and Our Values✅ */}
      <section className="bg-image10 bg-fixed bg-center bg-no-repeat flex flex-col pt-[150px] min-h-screen gap-6 items-center xs:justify-around xs:pt-[160px] sm:pt-36 md:pt-40 md:gap-12 md:py-8 md:px-14 lg:px-20 xl:px-28 2xl:gap-24 ">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-around p-1 bg-muted/45 backdrop-blur-sm min-h-[120px] max-h-[220px] w-[80%] rounded-xl md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 "
          >
            <h1 className="h1-text capitalize text-center text-secondary">
              {item.title}
            </h1>
            <p className="text-center body-text text-white ">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Our History✅ */}
      <section className="bg-light px-4 pb-6 flex flex-col gap-1 xs:pb-8 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
        <h1 className="h1-text capitalize text-center text-secondary ">
          our history
        </h1>
        <div className="p-8 rounded-3xl shadow-custom-shadow lg:p-6 xl:p-8 ">
          {bundleTextIntoParagraphs(
            OrgHis.organizationHis[0].description,
            3
          ).map((para, index) => (
            <ScrollAnimation
              key={index}
              animateIn="fadeIn"
              animateOut="fadeOut"
              offset={100}
            >
              <p className="text-justify sm:text-center body-text ">
                {para}
                <br />
                <br />
              </p>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Combine the Organization Work and Organigram to "Our Areas of Work" */}
      <section className="bg-image6 bg-cover bg-no-repeat bg-fixed flex flex-col items-center justify-around py-4 px-4 gap-4 md:px-14 md:gap-6 md:py-6 lg:px-20 lg:gap-8 lg:py-8 xl:px-28 xl:gap-10 xl:py-10 ">
        {/* Organizational Work */}
        <div className="bg-white/50 rounded-3xl backdrop-blur-lg h-auto w-[100%] flex flex-col justify-center ">
          <h1 className="h1-text text-center capitalize text-secondary">
            areas of work
          </h1>
          <div className="p-4">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 10000 }}
              spaceBetween={30}
              slidesPerView={1}
              loop
              speed={500}
              className="h-full rounded-2xl"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {programData.pillars.map((pillar, index) => (
                <SwiperSlide key={index}>
                  <CarouselSlide
                    title={pillar.title}
                    focusArea={pillar.focusAreas.map((area, index) => (
                      <ul
                        key={index}
                        className="list-disc list-inside indent-2"
                      >
                        <li>{area}</li>
                      </ul>
                    ))}
                    highlights={pillar.highlights}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Organigram */}
        <div className="bg-white/50 rounded-3xl backdrop-blur-lg w-[100%] h-auto flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
          <h1 className="h1-text capitalize text-center mt-4 text-secondary">
            our organizational structure
          </h1>
          <div className="px-1">
            <ScrollAnimation
              animateIn="zoomIn"
              animateOut="zoomOut"
              offset={100}
            >
              <LazyLoadImage
                src={staff}
                alt="our organogram"
                className="w-full"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* The Board of Directors */}
      {/* Add Authentication to access this */}
      <section className="py-6 flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
          <h1 className="h1-text capitalize text-center text-secondary">
            our board of directors
          </h1>
        </ScrollAnimation>
        <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ">
          {secretariat.BodMem.map((bod, index) => (
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              duration={1}
              key={index}
            >
              <Card title={bod.Position} name={bod.Name} image={profile5} />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* The Staff Team */}
      <section className="py-6 flex flex-col gap-1 md:gap-2 lg:px-20 lg:gap-3 xl:px-28 xl:gap-4 2xl:gap-5">
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
          <h1 className="h1-text capitalize text-center text-secondary">
            our staff
          </h1>
        </ScrollAnimation>
        <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {secretariat.Staffs.map((staff, index) => (
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeOut"
              key={index}
            >
              <Card
                key={index}
                title={staff.Position}
                name={staff.Name}
                image={staff.Image}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* The Volunteers Team */}
      <section className=" ">
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
          <h1 className="h1-text capitalize text-center text-secondary">
            our volunteers
          </h1>
        </ScrollAnimation>
        <div className="">
          <Marquee pauseOnHover gradient gradientWidth={50}>
            {secretariat.Volunteers.map((vol, index) => (
              <Card
                key={index}
                title={vol.Position}
                name={vol.Name}
                image={vol.Image}
                link={vol.LinkedIn}
              />
            ))}
          </Marquee>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Carousel Slides for the Organization Work
function CarouselSlide({ title, focusArea, highlights }) {
  return (
    <div className="flex flex-col min-h-[400px] justify-around pb-6 xs:px-0 md:gap-1 lg:gap-4 xl:gap-5 2xl:gap-10 ">
      <h3 className="h3-text capitalize text-center text-pretty text-secondary/70 ">
        {title}
      </h3>
      <div className="body-text self-center ">
        <p>Our Areas of focus are:</p>
        {focusArea}
      </div>
      <p className="body-text italic text-center text-muted">"{highlights}"</p>
    </div>
  );
}

// Cards component for the board, staff and volunteer display
function Card({ title, name, link, image }) {


  return (
    <>
      <div className="relative w-48 m-4 flex-wrap gap-4 aspect-[1/1.5] rounded-xl md:w-48 lg:w-52 2xl:w-72 overflow-hidden group ">
        {/* Display the image or a placeholder */}
        {image ? (
          // Show the image if image path is valid
          <LazyLoadImage
            src={image}
            alt={`${name} ${title}`}
            className="absolute h-full z-10 group-hover:scale-125 group-hover:blur-sm group-hover:brightness-50 group-hover:transition-all group-hover:duration-1000 group-hover:z-0"
            placeholder={
              <div className="flex items-center justify-center bg-gray-300 h-full">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            }
          />
        ) : (
          // Show a placeholder if no image is found
          <LazyLoadImage
            src={profile1}
            alt={`${name} ${title}`}
            className="absolute h-full z-10 group-hover:scale-125 group-hover:blur-sm group-hover:transition-all group-hover:duration-1000 group-hover:z-0"
            placeholder={
              <div className="flex items-center justify-center bg-gray-300 h-full">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            }
          />
        )}

        <div className="absolute flex flex-col h-full justify-center opacity-0 gap-10 px-4 group-hover:z-10 group-hover:opacity-100 group-hover:animate-slideIn ">
          <h4 className="h4-text capitalize text-white">{title}</h4>
          <p className="body-text font-bold text-white">{name}</p>
          <a
          onClick={() => {console.log(link);
          }}
            href={link}
            target="_blank"
            className="w-16 grid place-items-center button-text button-type self-start bg-primary/70 hover:bg-primary hover:text-black rounded-3xl "
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
