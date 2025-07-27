import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import staff from "./../../assets/Our Staff.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedin,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  aboutusLapBackground,
  aboutusMobiBackground,
  aboutusTabBackground,
} from "../../../public/Backgrounds";
import { Helmet } from "react-helmet-async";

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
  const [selectedProfile, setSelectedProfile] = useState(null);

  const lapImages = Object.values(aboutusLapBackground);
  const tabImages = Object.values(aboutusTabBackground);
  const mobiImages = Object.values(aboutusMobiBackground);

  useEffect(() => {
    if (selectedProfile !== null) {
      const sectionRef =
        selectedProfile.type === "bod"
          ? bodSectionRef.current
          : staffSectionRef.current;
      sectionRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setTimeout(() => {
        lastViewedSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [selectedProfile]);

  const bodSectionRef = useRef(null);
  const staffSectionRef = useRef(null);
  const lastViewedSectionRef = useRef(null);
  const profileViewRef = useRef(null);

  return (
    <div className="relative h-auto select-none ">
      <Helmet>
        <title>About Us | Amkeni Malindi</title>
        <meta
          name="description"
          content="Explore the vision, mission, values, and journey of Amkeni Malindi—a community-led organization advancing health, rights, and opportunity in Kilifi County, Kenya."
        />
        <meta
          name="keywords"
          content="Amkeni Malindi, Kilifi organization, community health, rights-based work, mission-driven NGO Kenya, health equity, empowerment"
        />
        <meta name="author" content="Amkeni Malindi" />
        <link rel="canonical" href="https://amkenimalindi.org/about-us" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Amkeni Malindi | Vision, Mission & Community Roots"
        />
        <meta
          property="og:description"
          content="Learn about Amkeni Malindi’s vision, mission, history, and areas of work—dedicated to advancing dignity and opportunity through community-led action."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amkenimalindi.org/about-us" />
        {lapImages.map((img, index) => (
          <meta key={index} property="og:image" content={img[1]} />
        ))}
        <meta property="og:image:alt" content="Amkeni Malindi Team" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Amkeni Malindi | Who We Are"
        />
        <meta
          name="twitter:description"
          content="Discover our values, history, and commitment to community empowerment in Kilifi and beyond."
        />
        {lapImages.map((img, index) => (
          <meta key={index} name="twitter:image" content={img[1]} />
        ))}

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Amkeni Malindi",
        "url": "https://amkenimalindi.org/",
        "logo": "https://amkenimalindi.org/assets/logo.webp",
        "description": "Amkeni Malindi is a community-led organization working to promote health, dignity, and economic empowerment through rights-based programming in Kenya.",
        "foundingDate": "2009",
        "sameAs": [
          "https://web.facebook.com/profile.php?id=100017571492191",
          "https://x.com/Amkeni_Org",
          "https://www.instagram.com/amkeni_org/",
          "https://www.linkedin.com/company/amkeni-malindi/"
        ],
        "address": {
          "@type": "PostalAddress",
          "postalCode": "80200",
          "addressRegion": "Kilifi County",
          "addressCountry": "Kenya"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://amkenimalindi.org/about-us",
        "url": "https://amkenimalindi.org/about-us",
        "name": "About Us - Amkeni Malindi",
        "description": "Learn more about Amkeni Malindi’s mission, vision, values, and areas of work as a community-led organization advancing health and dignity in Kilifi County, Kenya."
      }
    ]
  }
`}
        </script>
      </Helmet>

      {/* Mission, Vision and Our Values✅ */}
      <section className="flex flex-col pt-[150px] min-h-screen gap-6 items-center xs:justify-around xs:pt-[160px] sm:pt-36 md:pt-40 md:gap-12 md:py-8 md:px-14 lg:px-20 xl:px-28 2xl:gap-24 ">
        {/* Background Images carousel */}
        <div className="fixed inset-0 -z-10">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 15000, disableOnInteraction: false }}
            loop
            speed={2000}
            className="h-full w-full"
          >
            {Array.from({
              length: Math.max(
                lapImages.length,
                tabImages.length,
                mobiImages.length
              ),
            }).map((_, index) => {
              const lapImg = lapImages[index % lapImages.length];
              const tabImg = tabImages[index % tabImages.length];
              const mobiImg = mobiImages[index % mobiImages.length];

              return (
                <SwiperSlide key={index}>
                  <picture className="block w-full h-full">
                    {/* Mobile First */}
                    <source media="(max-width: 639px)" srcSet={mobiImg} />
                    <source media="(max-width: 1023px)" srcSet={tabImg} />
                    <img
                      src={lapImg}
                      alt={`about background ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </picture>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="fixed inset-0 bg-black/50 -z-10"></div>
        {/* Background Images carousel */}

        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-around p-1 bg-muted/45 backdrop-blur-sm min-h-[120px] max-h-[220px] w-[80%] rounded-xl md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 "
          >
            <h1 className="h1-text capitalize text-center text-primary">
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
        <div className="bg-muted/50 rounded-3xl backdrop-blur-lg h-auto w-[100%] flex flex-col justify-center ">
          <h1 className="h1-text text-center capitalize text-primary">
            areas of work
          </h1>
          <div className="p-4 lg:px-12 ">
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
        <div className="bg-muted/50 rounded-3xl backdrop-blur-lg w-[100%] h-auto flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
          <h1 className="h1-text capitalize text-center mt-4 text-primary">
            our organizational structure
          </h1>
          <div className="px-1">
            <ScrollAnimation
              animateIn="zoomIn"
              animateOut="zoomOut"
              offset={100}
              animateOnce
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

      <section className="bg-light">
        {/* The Board of Directors */}
        <div
          ref={bodSectionRef}
          className="scroll-mt-[130px] xs:scroll-mt-[140px] s:scroll-mt-[150px] sx:scroll-mt-[160px] py-6 flex flex-col gap-1 md:gap-2 md:px-14 md:scroll-mt-32 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 "
        >
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutRight"
            animateOnce
          >
            <h1 className="h1-text capitalize text-center text-secondary xs:px-3 ">
              our board of directors
            </h1>
          </ScrollAnimation>
          {selectedProfile?.type === "bod" ? (
            <div className="flex justify-center mb-4">
              <Profile
                image={profile5}
                name={secretariat.BodMem[selectedProfile.index].Name}
                tags={
                  secretariat.BodMem[selectedProfile.index].Profile.Expertise
                }
                text={
                  secretariat.BodMem[selectedProfile.index].Profile.Description
                }
                onBack={() => setSelectedProfile(null)}
                scrollRef={profileViewRef}
                socialMedia={
                  secretariat.BodMem[selectedProfile.index].SocialMedia
                }
              />
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
              {secretariat.BodMem.map((bod, index) => (
                <ScrollAnimation
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  key={index}
                  animateOnce
                >
                  <Card
                    title={bod.Position}
                    name={bod.Name}
                    image={profile5}
                    type="bod"
                    index={index}
                    onShowProfile={(type, idx) => {
                      profileViewRef.current =
                        type === "bod"
                          ? bodSectionRef.current
                          : lastViewedSectionRef.current;
                      setSelectedProfile({ type, index: idx });
                    }}
                  />
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>

        {/* The Staff Team */}
        <div
          ref={staffSectionRef}
          className="scroll-mt-[130px] xs:scroll-mt-[140px] s:scroll-mt-[150px] sx:scroll-mt-[160px] py-6 flex flex-col gap-1 md:gap-y-8 md:scroll-mt-32 lg:px-20 lg:gap-3 xl:px-28 xl:gap-4 2xl:gap-5"
        >
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutRight"
            animateOnce
          >
            <h1 className="h1-text capitalize text-center text-secondary">
              our staff
            </h1>
          </ScrollAnimation>

          {/* Senior Management Team */}
          <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 md:mx-4 lg:mx-0">
            {selectedProfile?.type === "smt" ? (
              <div className="flex justify-center mb-4">
                <Profile
                  image={secretariat.SMT[selectedProfile.index].Image}
                  name={secretariat.SMT[selectedProfile.index].Name}
                  tags={
                    secretariat.SMT[selectedProfile.index].Profile?.Expertise ||
                    ""
                  }
                  text={
                    secretariat.SMT[selectedProfile.index].Profile
                      ?.Description || ""
                  }
                  scrollRef={profileViewRef}
                  onBack={() => setSelectedProfile(null)}
                  socialMedia={
                    secretariat.SMT[selectedProfile.index].SocialMedia
                  }
                />
              </div>
            ) : (
              <>
                <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                  {secretariat.SMT.map((smt, index) => (
                    <ScrollAnimation
                      animateIn="fadeIn"
                      animateOut="fadeOut"
                      key={index}
                    >
                      <Card
                        title={smt.Position}
                        name={smt.Name}
                        image={smt.Image}
                        type="smt"
                        index={index}
                        onShowProfile={(type, idx) => {
                          profileViewRef.current =
                            type === "smt"
                              ? staffSectionRef.current
                              : lastViewedSectionRef.current;
                          setSelectedProfile({ type, index: idx });
                        }}
                      />
                    </ScrollAnimation>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Amkeni Staff */}
          <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {secretariat.Staffs.map((staff, index) => (
              <ScrollAnimation
                animateIn="fadeIn"
                animateOut="fadeOut"
                key={index}
                animateOnce
              >
                <Card
                  key={index}
                  title={staff.Position}
                  name={staff.Name}
                  image={staff.Image}
                  showProfileButton={false}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* The Volunteers Team */}
        <div className="pb-6">
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOut="fadeOutRight"
            animateOnce
          >
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
                  showProfileButton={false}
                />
              ))}
            </Marquee>
          </div>
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
      <h3 className="h3-text capitalize text-center text-pretty text-primary/70 ">
        {title}
      </h3>
      <div className="body-text text-white self-center ">
        <p>Our Areas of focus are:</p>
        {focusArea}
      </div>
      <p className="body-text italic text-center text-white/60">
        "{highlights}"
      </p>
    </div>
  );
}

// Cards component for the board, staff and volunteer display
function Card({
  title,
  name,
  link,
  image,
  type,
  index,
  onShowProfile,
  showProfileButton = true,
}) {
  return (
    <>
      <div className=" mb-8 md:mb-0 relative w-48 m-4 flex-wrap gap-4 aspect-[1/1.5] rounded-xl md:w-48 lg:w-52 2xl:w-72 overflow-hidden group shadow-profile-shadow ">
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
          {!showProfileButton && (
            <a
              onClick={() => {
                console.log(link);
              }}
              href={link}
              target="_blank"
              className="w-16 grid place-items-center button-text button-type self-start bg-primary/70 hover:bg-primary hover:text-black rounded-3xl transition-all duration-300 "
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
          {showProfileButton && (
            <button
              onClick={() => onShowProfile(type, index)}
              className="button-type bg-primary/70 self-start button-text hover:text-black hover:bg-primary transition-all duration-300 "
            >
              Show profile
            </button>
          )}
        </div>
      </div>
    </>
  );
}

function Profile({ image, name, text, tags, onBack, scrollRef, socialMedia }) {
  return (
    <>
      <div
        ref={scrollRef}
        className="scroll-mt-[150px] s:scroll-mt-[156px] xs:scroll-mt-[160px] relative flex w-[90%] min-h-[700px] items-center justify-center flex-col shadow-neomorph-other rounded-3xl overflow-hidden xs:w-[80%] md:scroll-mt-40 md:flex-row md:h-[350px] md:min-h-[400px] md:mb-8 md:w-full animate__animated animate__fadeIn xl:w-[75%] 2xl:w-[65%] 2xl:min-h-[450px] shadow-profile-shadow "
      >
        {/* Profile picture */}
        <div className="w-full h-[300px] overflow-hidden md:h-full md:w-[40%] xs:h-[350px] s:h-[400px] lg:w-[30%]  ">
          <img
            src={image}
            alt={`image-${name}`}
            className="w-full h-full object-cover "
          />
        </div>

        {/* Show profile details */}
        <div className="w-full h-[100vh] bg-white  md:h-full md:w-[60%] flex flex-col justify-start lg:w-[70%] ">
          {/* header */}
          <div className=" bg-primary h-[25%] xs:h-[18%] s:h-[18%] md:h-[40%] xl:px-4 ">
            <h3 className="h3-text px-2 ">{name}</h3>
            <h5 className=" p-2 text-bold ">
              Tags:{" "}
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-xs ${
                    index !== tags.length - 1 ? `border-r-2` : ``
                  } border-black px-1 text-muted s:text-sm md:px-2 xl:text-base `}
                >
                  {tag}{" "}
                </span>
              ))}{" "}
            </h5>
          </div>

          {/* Profile content */}
          <div className="overflow-y-auto h-[70%] pt-4 xs:h-[79%] s:h-[80%] ">
            {bundleTextIntoParagraphs(text, 3).map((p, index) => (
              <p
                className="body-text text-justify px-4 s:text-left xs:text-balance lg:px-6 lg:text-pretty "
                key={index}
              >
                {p} <br /> <br />
              </p>
            ))}

            {/* social media links */}
            <div className="flex gap-2 items-center justify-center mb-2 s:gap-4 ">
              {socialMedia?.Facebook && (
                <a
                  href={socialMedia.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="p-2 bg-primary w-4 aspect-square rounded-full hover:bg-inherit hover:text-[#4267B2]"
                  />
                </a>
              )}
              {socialMedia?.LinkedIn && (
                <a
                  href={socialMedia.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="p-2 bg-primary w-4 aspect-square rounded-full hover:bg-inherit hover:text-[#0077B5]"
                  />
                </a>
              )}
              {socialMedia?.X && (
                <a
                  href={socialMedia.X}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="p-2 bg-primary w-4 aspect-square rounded-full hover:bg-inherit hover:text-black"
                  />
                </a>
              )}
              {socialMedia?.Instagram && (
                <a
                  href={socialMedia.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="p-2 bg-primary w-4 aspect-square rounded-full hover:bg-inherit hover:text-[#f56040]"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Back button */}
        <div
          onClick={onBack}
          className="grid place-items-center absolute right-3 top-3 h-8 w-8 rounded-full bg-black text-white md:text-black md:bg-inherit"
        >
          <FontAwesomeIcon icon={faXmark} className="md:text-2xl " />
        </div>

        {/* Ends with links to social pages */}
        <div></div>
      </div>
    </>
  );
}

export default About;
