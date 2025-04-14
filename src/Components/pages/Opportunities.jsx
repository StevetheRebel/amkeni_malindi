import React from "react";
import Footer from "../Footer/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RainbowLego from "./../../assets/OpportunitiesPhoto.jpg"

function Opportunities() {
  return (
    <div className="relative select-none">
      <section className=" bg-image3 bg-center bg-fixed bg-no-repeat min-h-screen px-4 pt-[154px] xs:pt-[160px] sm:pt-36 lg:px-[6%]">
        <h1 className="h1-text text-secondary text-center mb-2 md:mb-4 xl:mb-6 ">
          Opportunities
        </h1>
        <div className="relative flex flex-col gap-4 py-4 w-full md:py-0">
          <div className="rounded-3xl w-full h-[40dvh] md:h-[50vh] ">
            <LazyLoadImage src={RainbowLego} alt="queer lego background" className="w-full grayscale h-full object-cover rounded-2xl md:rounded-3xl hover:grayscale-0 transition-all duration-300 " />
          </div>
          <div className="bg-white/40 p-2 backdrop-blur-sm rounded-2xl md:bg-white md:w-[80%] md:absolute md:top-[90%] md:right-10 md:px-4 lg:px-8 ">
            <h5 className="h5-text text-secondary text-pretty">
              Current, there are no available opportunities. We encourage you
              to check back regularly and stay connected through our social
              media platforms for timely updates.
            </h5>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Opportunities;
