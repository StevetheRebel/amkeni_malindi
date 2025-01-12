import React from "react";
import Footer from "../Footer/Footer";
import backgroundImage from "./../../assets/OpportunitiesPhoto.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Opportunities() {
  return (
    <div className="relative h-auto top-[154px] xs:top-[160px] sm:top-36 select-none">
      <section className="px-4 md:h-[60vh] md:max-h-[500px] lg:px-[6%] relative md:mb-2 lg:mb-4 ">
        <h1 className="h1-text text-secondary text-center mb-2 md:mb-4 xl:mb-6 ">
          Opportunities
        </h1>
        <div className="relative rounded-lg max-h-[350px] h-[40vh] sm:min-h-[300px] sm:h-[30vh] md:min-h-[400px] md:h-[40vh] lg:min-h-[300px] lg:h-[40vh] ">
          <LazyLoadImage
            src={backgroundImage}
            alt="queer legos background"
            className="w-full h-full object-cover rounded-lg relative "
            placeholder={
              <div className="flex items-center justify-center bg-gray-300 h-full">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            }
          />
        </div>
        <div className="md:border-2 md:p-4 md:bg-white md:absolute md:w-[80%] md:right-[5%] md:bottom-0 lg:right-[7%] rounded-xl">
          <h4 className="h4-text text-secondary/70 text-center sm:text-start">
            At present, there's no available opportunties. We encourage you to
            check back regularly and stay connected through our social media
            platforms for timely updates.
          </h4>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Opportunities;
