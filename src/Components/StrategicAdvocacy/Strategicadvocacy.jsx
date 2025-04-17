import React from "react";
import programData from "../../pillars.json";
import { AdvocacyImg } from "../../assets/Pillar Pictures";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import ScrollAnimation from "react-animate-on-scroll";

function Strategicadvocacy({ id }) {
  return (
    <>
      <section
        className="bg-light flex flex-col gap-4 justify-center p-4 lg:px-[6%]"
        id={id}
      >
        {/* Program Heding */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutRight"
          offset={100}
          animateOnce
        >
          <h2 className="h2-text font-bold text-center text-secondary/70">
            {programData.pillars[1].title}
          </h2>
        </ScrollAnimation>

        {/* Heading and Overview with Highlight */}
        <div className="flex flex-col gap-2 items-center shadow-custom-shadow rounded-2xl p-4 xs:px-5 md:mb-4 xl:mb-8 ">
          {/* Description */}
          <div className="relative w-full flex flex-col items-center gap-4 pt-2">
            <img
              src={AdvocacyImg}
              alt="Advocacy Image"
              className="w-2/3 rounded-2xl sm:h-[90%] sm:absolute sm:top-0 sm:z-0 sm:opacity-20 xl:w-1/2 xl:top-10 2xl:w-[20%]"
            />
            <div className="sm:z-10">
              {bundleTextIntoParagraphs(
                programData.pillars[1].description,
                4
              ).map((para, index) => (
                <ScrollAnimation
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  offset={100}
                  key={index}
                >
                  <p className="body-text text-justify">
                    {para}
                    <br />
                    <br />
                  </p>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="w-full sm:w-[70%] lg:w-[60%] ">
            <Swiper
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
                depth: 600,
                modifier: 1,
                slideShadows: true,
              }}
            >
              {programData.pillars[1].focusAreasDescription.map(
                (area, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-2 min-h-[380px] text-center rounded-2xl xs:p-4  ">
                      <h3 className="h3-text" data-swiper-parallax="-200">
                        {area.title}
                      </h3>
                      <div
                        className="flex flex-col-reverse justify-around gap-3 items-center py-2"
                        data-swiper-parallax="-100"
                      >
                        <p className="body-text text-center">
                          {area.description}
                        </p>
                        <img
                          src={AdvocacyImg}
                          alt={area.title}
                          className="h-auto object-cover sm:w-[70%]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Program Highlight */}
          <ScrollAnimation animateIn="fadeInLeft" animateOnce offset={50} animateOnce>
            <p className="body-text italic text-center">
              {programData.pillars[1].highlights}
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}

export default Strategicadvocacy;
