import React, { useRef } from "react";
import programData from "./../../pillars.json";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";
import { SustainableLivelihoodImg } from "../../assets/Pillar Pictures";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "animate.css";
import {
  IncomeGen,
  SkillsTraining,
  ScholarshipOpp,
  ExchangeProg,
  LeadershipProg,
  SelfImprovInit,
} from "./../../assets/Sustainable Livelihoods";
import ScrollAnimation from "react-animate-on-scroll";

function Sustainablelivelihoods({ id }) {
  const imageMap = {
    "IncomegeneratingProjects.webp": IncomeGen,
    "SkillstrainingPrograms.webp": SkillsTraining,
    "Scholarshipopportunities.webp": ScholarshipOpp,
    "Exchangeprograms.webp": ExchangeProg,
    "Leadershipdevelopment.webp": LeadershipProg,
    "SelfimprovementInitiatives.webp": SelfImprovInit,
  };

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const slides = swiperRef.current?.swiper.slides;

    slides.forEach((slide, index) => {
      const image = slide.querySelector("img");
      if (index === swiperRef.current.swiper.activeIndex) {
        // Add rotateIn animation to active slide
        image?.classList.remove("animate__rotateIn");
        image?.classList.add("animate__animated", "animate__rotateIn");
      } else {
        // Add rotateOut animation to inactive slides
        image?.classList.remove("animate__rotateIn");
        image?.classList.add("animate__animated", "animate__rotateIn");
      }
    });
  };

  const handleTransitionEnd = () => {
    const slides = swiperRef.current?.swiper.slides;
    slides.forEach((slide) => {
      const image = slide.querySelector("img");
      if (image) {
        image.classList.remove("animate__animated", "animate__rotateIn");
      }
    });
  };

  return (
    <>
      <section
        className="p-4 lg:px-[6%] bg-image6 min-h-screen bg-fixed bg-cover bg-no-repeat bg-center"
        id={id}
      >

        {/* Description Docus Areas and Highlight of the Program */}
        <div className="flex flex-col items-center rounded-2xl bg-muted/50 backdrop-blur- p-4 xs:px-5 md:mb-4 md:rounded-tr-2xl md:rounded-br-2xl lg:px-8 xl:mb-8">
        {/* Program Heading */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutRight"
          offset={100}
          animateOnce
        >
          <h2 className="h2-text text-primary/80 text-center mb-2 md:mb-4 2xl:mb-6">
            {programData.pillars[2].title}
          </h2>
        </ScrollAnimation>
          <div className="relative w-full flex flex-col items-center gap-4 pt-2">
            {/* Description of the Program */}
            <div>
              {bundleTextIntoParagraphs(programData.pillars[2].description).map(
                (para, index) => (
                  <ScrollAnimation
                    key={index}
                    animateIn="fadeIn"
                    animateOut="fadeOut"
                    offset={100}
                  >
                    <p key={index} className="text-justify body-text text-white px-3 s:px-4 md:px-6">
                      {para}
                      <br />
                      <br />
                    </p>
                  </ScrollAnimation>
                )
              )}
            </div>

            {/* Program Image and Fic */}
            <div className="w-full flex flex-col items-center justify-center">
              {/* Program Image */}
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOut="fadeOutRight"
                offset={100}
                className="flex justify-center"
                animateOnce
              >
                <img
                  src={SustainableLivelihoodImg}
                  alt="Sustainable Livelihoods"
                  className="w-2/3 rounded-2xl sm:hidden"
                />
              </ScrollAnimation>

              {/* Focus Areas */}
              <div className="w-full sm:w-[70%] lg:w-[60%] ">
                <Swiper
                  ref={swiperRef}
                  modules={[Autoplay, Pagination, EffectCoverflow]}
                  effect={"coverflow"}
                  centeredSlides={true}
                  grabCursor={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  loop
                  spaceBetween={40}
                  slidesPerView={"auto"}
                  className="w-full py-2"
                  autoplay={{ delay: 10000 }}
                  speed={1000}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 10,
                    depth: 700,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  onSlideChangeTransitionStart={handleSlideChange}
                  onSlideChangeTransitionEnd={handleTransitionEnd}
                >
                  {programData.pillars[2].focusAreasDescription.map(
                    (area, index) => (
                      <SwiperSlide key={index}>
                        <div className="p-2 min-h-[380px] text-center rounded-2xl xs:p-4  ">
                          <h3 className="h3-text text-primary/80 " data-swiper-parallax="-200">
                            {area.title}
                          </h3>
                          <div
                            className="flex flex-col-reverse justify-around gap-3 items-center py-2"
                            data-swiper-parallax="-100"
                          >
                            <p className="body-text text-center text-white/80">
                              {area.description}
                            </p>
                            <img
                              src={imageMap[area.image[0].src]}
                              alt={area.title}
                              className="h-auto object-cover sm:w-[70%] rounded-2xl"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>

              {/* Program Highlight */}
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOut="fadeOutRight"
                offset={100}
                animateOnce
              >
                <p className="body-text italic text-center text-white/60">
                  {programData.pillars[2].highlights}
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sustainablelivelihoods;
