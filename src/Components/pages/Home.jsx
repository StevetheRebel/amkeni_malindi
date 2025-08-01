import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/Office Pics";
import donorLogos from "../../assets/Donor Organization";
import Marquee from "react-fast-marquee";
import Footer from "../Footer/Footer";
import { truncateByWords } from "../../truncateByWords";
import programData from "./../../pillars.json";
import {
  AdvocacyImg,
  HealthPromotionImg,
  SustainableLivelihoodImg,
  SystemStrengtheningImg,
} from "../../assets/Pillar Pictures";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import he from "he";
import pic1 from "./../../assets/Office Pics/Office1.webp";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import "swiper/css/effect-fade";
import ALogo from "./../../assets/Amkeni A.webp";
import Typewriter from "../Typewriter";
import RainbowSlider from "../RainbowSlider";
import Rainbow from "../Loader/Rainbow";
import LatestYoutubeVideo from "../Youtube/LatestYoutubeVideo";
import { Helmet } from "react-helmet-async";
import amkeniHome from "./../../assets/Office Pics/Amkeni_001.webp";

function Home() {
  const [posts, setPosts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  const [postLimit, setPostLimit] = useState(() => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth > -768) return 3;
    return 5;
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/amkenimalindi.wordpress.com/posts"
        );
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) return setPostLimit(4);
      if (window.innerWidth >= 768) return setPostLimit(3);
      return setPostLimit(5);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const officeImages = Object.values(images);

  const imagesMap = {
    "HealthPromotion.jpg": HealthPromotionImg,
    "Advocacy.jpg": AdvocacyImg,
    "SustainableLivelihood.jpg": SustainableLivelihoodImg,
    "System-Strengthening.jpg": SystemStrengtheningImg,
  };

  const navMap = [
    "/program-services#health-promotion",
    "/program-services#strategic-advocacy",
    "/program-services#sustainable-livelihoods",
    "/program-services#systems-strengthening",
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setTypingComplete(false);
  };

  return (
    <div className="relative h-auto select-none scroll-smooth ">
      <Helmet>
        <title>Amkeni Malindi | Empowering Communities</title>
        <meta
          name="description"
          content="Amkeni Malindi is a community-led organization advancing health, rights, and economic empowerment for sexual and gender diverse (SGD) individuals in Kenya."
        />
        <meta
          name="keywords"
          content="Amkeni Malindi, SGD rights Kenya, health services Kenya, HIV prevention Kilifi, empowerment programs, community wellness Kenya"
        />
        <meta name="author" content="Amkeni Malindi" />
        <link rel="canonical" href="https://amkenimalindi.org/" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Amkeni Malindi | Health, Rights & Empowerment for SGD Communities"
        />
        <meta
          property="og:description"
          content="Join Amkeni Malindi in transforming lives through inclusive health services, legal advocacy, and sustainable development for SGD communities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amkenimalindi.org/" />
        <meta property="og:image" content={amkeniHome} />
        <meta property="og:image:alt" content="Amkeni Malindi Safe Space" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Amkeni Malindi | Health & Rights for SGD Communities in Kenya"
        />
        <meta
          name="twitter:description"
          content="Empowering sexual and gender diverse communities through health services, advocacy, and livelihoods."
        />
        <meta name="twitter:image" content={amkeniHome} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "NGO",
            "name": "Amkeni Malindi",
            "url": "https://amkenimalindi.org/",
            "logo": "https://amkenimalindi.org/assets/logo.webp",
            "description": "Amkeni Malindi empowers SGD communities in Kenya through health, advocacy, and economic opportunities.",
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
            "@type": "WebSite",
            "url": "https://amkenimalindi.org/",
            "name": "Amkeni Malindi",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://amkenimalindi.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      }
    `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-dvh overflow-hidden flex items-center justify-center pt-40 lg:pt-36 lg:px-[6%] ">
        {/* Background Images carousel */}
        <div className="fixed inset-0 -z-10">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            loop={true}
            speed={2000}
            className="h-full w-full"
          >
            {officeImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="fixed inset-0 bg-black/40 -z-10"></div>
        {/* Background Images carousel */}

        {/* Landing container */}
        <div className="w-full grid grid-cols-1 gap-y-8 gap-x-12 place-items-center lg:grid-cols-5 xl:grid-cols-6  ">
          {/* Carousel */}
          <div className="relative w-[90%] h-[300px] grid-span-1 lg:col-span-3 xl:col-span-4 rounded-2xl overflow-hidden lg:w-full lg:h-auto lg:self-start xl:self-center ">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
                waitForTransition: true,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              allowTouchMove={false}
              noSwiping={true}
              onSlideChange={handleSlideChange}
              init={false}
              onAfterInit={(swiper) => {
                swiper.init();
                swiper.slideTo(0, 0);
              }}
              className="h-full w-full"
            >
              {/* Logo */}
              <SwiperSlide>
                <RainbowSlider />
                <div>
                  <h1 className=" h1-text px-2 bg-black/40 text-white tracking-tight xs:tracking-widest w-fit s:tracking-tight md:tracking-widest lg:tracking-wide xl:text-7xl 2xl:text-8xl 2xl:tracking-widest ">
                    Welcome to
                    <Typewriter text="..." delay={1000} />
                  </h1>
                </div>
                <div className="mt-6 flex items-end bg-white/20 backdrop-blur-sm rounded-b-2xl xs:justify-center">
                  <img
                    src={ALogo}
                    alt=""
                    className="w-32 animate__animated animate_fadeIn s:w-36 md:w-56 lg:w-44 xl:w-60 "
                  />
                  <h1 className="mb-3 text-5xl font-heading tracking-wider xs:text-6xl s:text-7xl md:text-9xl lg:text-8xl xl:text-9xl xl:mb-[18px] 2xl:text-[10rem] 2xl:mb-3 ">
                    <Typewriter text="MKENI" delay={1000} />
                  </h1>
                </div>
              </SwiperSlide>

              {/* Vision */}
              <SwiperSlide>
                <RainbowSlider />
                <div>
                  <h2 className=" h1-text px-2 bg-black/40 text-white tracking-tight xs:tracking-widest w-fit s:tracking-tight md:tracking-widest lg:tracking-wide xl:text-7xl 2xl:text-8xl  2xl:tracking-widest ">
                    Our Vision
                    <Typewriter text="..." delay={1000} />
                  </h2>
                  <p className="py-2 font-subheading font-bold text-3xl mt-6 w-full text-center h-fit bg-white/20 backdrop-blur-sm rounded-b-2xl xs:text-4xl xs:py-4 xs:px-2 s:px-6 md:text-6xl lg:text-5xl 2xl:text-7xl 2xl:tracking-widest 2xl:py-8 2xl:px-16 ">
                    <Typewriter
                      text="An Empowered, Just and Inclusive Society."
                      delay={100}
                    />
                  </p>
                </div>
              </SwiperSlide>

              {/* Mission */}
              <SwiperSlide>
                <RainbowSlider />
                <div>
                  <h2 className=" h1-text px-2 bg-black/40 text-white tracking-tight xs:tracking-widest w-fit s:tracking-tight md:tracking-widest lg:tracking-wide xl:text-7xl 2xl:text-8xl  2xl:tracking-widest ">
                    Our Mission
                    <Typewriter text="..." delay={1000} />
                  </h2>
                  <p className="mt-6 py-2 font-subheading font-bold w-full text-center px-1 h-fit bg-white/30 backdrop-blur-sm rounded-b-2xl xs:px-4 xs:text-base s:text-lg s:py-4 md:text-2xl md:px-6 2xl:text-4xl 2xl:tracking-wider ">
                    <Typewriter
                      text="To improve the quality of life of sexual and gender diverse communities through an integrated approach to health service provision, social and economic empowerment, knowledge genaration and strategic advocacy."
                      delay={30}
                    />
                  </p>
                </div>
              </SwiperSlide>

              {/* Values */}
              <SwiperSlide>
                <RainbowSlider />
                <div>
                  <h2 className=" h1-text px-2 bg-black/40 text-white tracking-tight xs:tracking-widest w-fit s:tracking-tight md:tracking-widest lg:tracking-wide xl:text-7xl 2xl:text-8xl  2xl:tracking-widest ">
                    Our Values
                    <Typewriter text="..." delay={1000} />
                  </h2>
                  <div className="mt-6 py-2 font-bold w-full text-start px-1 h-fit bg-white/30 backdrop-blur-sm rounded-b-2xl xs:px-4 md:px-6 2xl:text-4xl 2xl:tracking-wider ">
                    <ul className="font-subheading list-disc list-inside flex flex-col indent-4">
                      <li className="text-base tracking-widest py-1 s:text-lg md:text-2xl 2xl:py-2 2xl:text-4xl">
                        Accountability
                      </li>
                      <li className="text-base tracking-widest py-1 s:text-lg md:text-2xl 2xl:py-2 2xl:text-4xl animate__animated animate__fadeIn animate__delay-2s animate__slow ">
                        Excellence
                      </li>
                      <li className="text-base tracking-widest py-1 s:text-lg md:text-2xl 2xl:py-2 2xl:text-4xl animate__animated animate__fadeIn animate__delay-3s animate__slow ">
                        Non-Discrimination
                      </li>
                      <li className="text-base tracking-widest py-1 s:text-lg md:text-2xl 2xl:py-2 2xl:text-4xl animate__animated animate__fadeIn animate__delay-4s animate__slow">
                        Gender-Mainstream
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Blog posts */}
          <div className="flex flex-col items-center w-[90%] bg-muted/30 backdrop-blur-md rounded-3xl px-4 pb-4 mb-4 grid-span-1 lg:col-span-2 lg:h-[60vh] lg:min-h-[500px] lg:self-start lg:mb-0 lg:pb-0 xl:col-span-2 xl:min-h-[550px] 2xl:min-h-[75vh]  ">
            <h4 className="h4-text text-white text-center w-full ">
              Latest Posts...
            </h4>

            {/* Blog Spot */}
            {loading ? (
              <div className="h-full flex items-center mt-6 md:mt-8 lg:mt-0 ">
                <Rainbow />
              </div>
            ) : (
              <div className="flex flex-col gap-4 h-full sm:flex-row lg:flex-col lg:gap-0 lg:py-4 lg:px-1 lg:justify-between xl:px-2 xl:py-4 2xl:px-4 2xl:gap-4">
                {posts.slice(0, postLimit).map((post, index) => {
                  const firstAttachmentKey = Object.keys(post.attachments)[0];
                  const imageUrl =
                    post.attachments[firstAttachmentKey]?.URL || pic1;

                  return (
                    <div
                      key={index}
                      className={`relative overflow-hidden group w-full rounded-xl h-[88px] xs:h-[112px] md:h-[110px] lg:h-[100px] xl:h-[108px] 2xl:h-[145px] ${
                        post.hiddenClass || ""
                      }`}
                    >
                      <LazyLoadImage
                        src={imageUrl}
                        alt={he.decode(post.title)}
                        className="group-hover:grayscale group-hover:brightness-50 object-cover "
                      />
                      <div className="body-text flex flex-col justify-around h-full w-full font-bold text-white p-2 absolute top-[100%] group-hover:animate-slideUp lg:py-2">
                        <h4 className="body-text">
                          {truncateByWords(he.decode(post.title), 4)}
                        </h4>
                        <Link
                          to={`/blog/${post.ID}`}
                          className="button-type button-text self-end bg-primary/70 hover:bg-primary hover:text-black"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="pt-6 pb-12 bg-light">
        {/* title */}
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <h2 className="font-heading capitalize h1-text text-center text-secondary">
            what we do
          </h2>
        </ScrollAnimation>

        {/* Carousel Container */}
        <div className="mt-6 relative flex flex-col items-center justify-center group ">
          <div className="bg-light h-auto w-[80%] rounded-2xl sm:w-[85%] xl:w-[80%] xl:py-4 2xl:w-[70%] 2xl:py-6 shadow-custom-shadow">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, dynamicBullets: true }}
              autoplay={{ delay: 10000 }}
              spaceBetween={30}
              slidesPerView={1}
              loop
              speed={500}
              className="h-full rounded-2xl"
              onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
            >
              {programData.pillars.map((pillar, index) => (
                <SwiperSlide key={index}>
                  <CarouselSlide
                    title={pillar.title}
                    description={truncateByWords(pillar.description, 30)}
                    link={navMap[index % navMap.length]}
                    imagePath={imagesMap[pillar.image[0].src]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:px-[5%] 2xl:px-[10%]">
            <button
              onClick={() => secondSwiperRef.current?.slidePrev()}
              className="bg-accent/50 text-white p-2 md:p-3 rounded-full hover:bg-accent focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => secondSwiperRef.current?.slideNext()}
              className="bg-accent/50 text-white p-2 md:p-3 rounded-full hover:bg-accent focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>

      {/* Youtube and Carousel Donor Logos Marquee */}
      <section className="pt-6 pb-12 bg-image1 bg-center bg-cover bg-fixed flex flex-col gap-4 items-center">
        <h2 className="h1-text text-center text-white ">Youtube Videos</h2>
        <div className="rounded-2xl w-[90%] aspect-[16/9] overflow-hidden shadow-[10px_13px_34px_3px_rgba(0,0,0,0.65)] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[30%] ">
          <LatestYoutubeVideo />
        </div>
        <h2 className="h1-text text-center text-white mt-20">
          Donors and Partners
        </h2>
        <Marquee pauseOnHover>
          {Object.values(donorLogos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Donor logo ${index}`}
              className="w-24 my-8 mx-4 md:w-32 md:mx-6 lg:w-40 lg:mx-8 xl:w-48 xl:mx-10 2xl:w-56 2xl:mx-12 hover:scale-125 drop-shadow-white-custom"
            />
          ))}
        </Marquee>
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

function CarouselSlide({ title, description, link, imagePath }) {
  const scrollWithOffset = (el) => {
    const yOffset = -130;
    const yPosition =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="h-fit w-full rounded-2xl flex flex-col items-center pt-4 pb-8 gap-4 sm:flex-row sm:gap-4 sm:px-4 sm:pb-0 lg:gap-8 lg:px-8 lg:items-start 2xl:gap-12 2xl:px-12">
      <div className="w-[90%] aspect-square rounded-xl lg:w-auto lg:h-40 2xl:h-64 2xl:self-center">
        <img
          src={imagePath}
          alt={title}
          className="w-full h-full rounded-xl bg-cover animate__animated animate__fadeIn animate__slow "
        />
      </div>
      <div className="flex flex-col h-[390px] py-4 justify-between md:h-[300px] md:py-6 2xl:h-[350px] 2xl:py-8 ">
        <h3 className="text-secondary/70 px-[5%] h3-text text-center sm:text-start sm:px-0 ">
          {title}
        </h3>
        <p className="font-bodyText text-center text-balance px-[5%] sm:px-0 md:text-start lg:text-lg 2xl:text-xl">
          {description}
        </p>

        <HashLink
          smooth
          to={link}
          scroll={scrollWithOffset}
          className="bg-accent/50 button-type button-text hover:bg-accent focus:outline-none self-end mr-[5%]"
          style={{ cursor: "pointer" }}
        >
          Learn More
        </HashLink>
      </div>
    </div>
  );
}

export default Home;
