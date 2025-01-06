import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../assets/Office Pics";
import { Link } from "react-router-dom";
import donorLogos from "../../assets/Donor Organization";
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import Footer from "../Footer/Footer";

function Home() {
  const blogPosts = [
    { topic: "Apply Now: Program Coordinator for...", author: "Author" },
    { topic: "Creating a Mentally Healthy Workplace...", author: "Author" },
    { topic: "Do Condoms Expire? How Can You Tell?", author: "Author" },
    {
      topic: "Peer Education Training",
      author: "Author",
      hiddenClass: "flex sm:hidden xl:flex",
    },
    {
      topic: "Sexual Assault Awareness Month",
      author: "Author",
      hiddenClass: "flex sm:hidden 2xl:flex",
    },
  ];

  const DonorLogos = ({ donoLogos }) => {
    const [gradientWidth, setGradientWidth] = useState(50)

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setGradientWidth(width > 1024 ? 100 : 50)
      }

      window.addEventListener('resize', handleResize)

      handleResize()

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  }

  const officeImages = Object.values(images);
  const firstSwiperRef = useRef(null);
  const secondSwiperRef = useRef(null);

  // Responsive gradientWidth logic
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  const gradientWidth = isSmallScreen
    ? 20
    : isMediumScreen
    ? 50
    : isLargeScreen
    ? 100
    : 0;

  return (
    <div className="relative h-auto top-36 sm:top-32 select-none">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 items-center sm:gap-6 lg:items-start lg:px-[6%] lg:flex-row lg:gap-10 lg:h-auto lg:pb-10">
        {/* Carousel */}
        <div className="relative w-[90%] h-[60vh] border-2 mt-4 rounded-2xl lg:w-2/3 group">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            speed={500}
            className="h-full rounded-2xl"
            onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
          >
            {officeImages.map((image, index) => (
              <SwiperSlide key={index} className="h-full">
                <img
                  src={image}
                  alt={`Office ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation Buttons */}
          <div className="absolute inset-0 z-10 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => firstSwiperRef.current?.slidePrev()}
              className="bg-black/50 text-white p-3 rounded-full hover:bg-black focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => firstSwiperRef.current?.slideNext()}
              className="bg-black/50 text-white p-3 rounded-full hover:bg-black focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Separator */}
        <div className="border-2 w-[90%] border-black/80 lg:w-0 lg:h-[60vh] sm:mt-4"></div>

        {/* Blog Posts */}
        <div className="flex flex-col gap-4 mb-4 items-center lg:h-[60vh] sm:w-[90%] sm:gap-0 sm:justify-between sm:flex-row lg:w-auto lg:flex-col lg:mt-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`flex gap-4 w-[90%] sm:w-full items-center ${
                post.hiddenClass || ""
              }`}
            >
              <div className="w-24 h-24 aspect-square border-2 rounded-xl"></div>
              <div className="flex flex-col justify-between">
                <h6 className="font-subheading text-secondary">Topic</h6>
                <h4 className="font-heading">{post.topic}</h4>
                <h5 className="font-bodyText text-accent">{post.author}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-6">
        <h2 className="font-heading capitalize text-4xl text-center lg:text-5xl 2xl:text-6xl text-secondary">
          what we do
        </h2>
        <div className="mt-6 relative flex flex-col items-center justify-center group">
          <div className="bg-light h-auto w-[80%] rounded-2xl sm:w-[85%] xl:w-[80%] xl:py-4 2xl:w-[70%] 2xl:py-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 10000 }}
              spaceBetween={30}
              slidesPerView={1}
              loop
              speed={500}
              className="h-full rounded-2xl"
              onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
            >
              <SwiperSlide>
                <CarouselSlide
                  title="Health Promotion & Service Delivery"
                  description="Comprehensive Sexual and Reproductive Health Promotion and Care: Providing testing, treatment, contraception, STI screening, health education, and counselling. We empower individuals with knowledge and resources for healthier, inclusive communities, promoting well-being for all."
                  link="/program-services"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselSlide
                  title="Community Social & Economic Empowerment"
                  description="We empower communities through peer-led initiatives, mentorship, and capacity building. By promoting personal development, fostering income-generating activities, and linking individuals to opportunities, we drive self-reliance and sustainable growth. Collaborations with stakeholders ensure holistic support..."
                  link="/program-services"
                />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselSlide
                  title="Research, Advocacy & Policy Reforms"
                  description="We drive change through awareness campaigns, partnerships, and media engagement. Collaborating with research organizations and human rights advocates, we empower LGBTI communities to influence research agendas and policy development. Together, we champion inclusive reforms and amplify..."
                  link="/program-services"
                />
              </SwiperSlide>
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

      {/* Carousel Donor Logos Marquee */}
      <section className="py-12">
      <Marquee gradient gradientWidth={gradientWidth} pauseOnHover className="overflow-hidden">
        {Object.values(donorLogos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Donor logo ${index}`}
            className="w-24 mx-4 md:w-32 md:mx-6 lg:w-40 lg:mx-8 xl:w-48 xl:mx-10 2xl:w-56 2xl:mx-12 hover:scale-150"
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

function CarouselSlide({ title, description, link }) {
  return (
    <div className="h-fit w-full bg-light rounded-2xl flex flex-col items-center pt-4 pb-8 gap-4 sm:flex-row sm:gap-4 sm:px-4 sm:pb-0 lg:gap-8 lg:px-8 lg:items-start 2xl:gap-12 2xl:px-12">
      <div className="w-[90%] aspect-square rounded-xl border-2 border-black/20 lg:w-auto lg:h-40 2xl:h-48"></div>
      <div className="flex flex-col gap-2 sm:gap-4 mb-4">
        <h3 className="text-secondary/70 font-subheading font-bold text-2xl px-[5%] text-center sm:text-start sm:px-0 lg:text-3xl 2xl:text-4xl">
          {title}
        </h3>
        <p className="font-bodyText text-pretty px-[5%] sm:px-0 lg:text-lg 2xl:text-xl">
          {description}
        </p>

        <Link
          to={link}
          className="bg-accent/50 text-white p-2 hover:bg-accent rounded-full focus:outline-none self-end mr-[5%]"
          style={{ cursor: "pointer" }}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Home;
