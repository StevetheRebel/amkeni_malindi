import React from "react";
import Footer from "../Footer/Footer";
import backgroundImage from "./../../assets/OpportunitiesPhoto.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Opportunities() {
  return (
    <div className="relative select-none">
      <section className=" bg-image3 bg-center bg-fixed bg-no-repeat min-h-screen px-4 pt-[154px] xs:pt-[160px] sm:pt-36 lg:px-[6%]">
        <h1 className="h1-text text-secondary text-center mb-2 md:mb-4 xl:mb-6 ">
          Opportunities
        </h1>
        <div>
          
        </div>
        
      </section>
      <Footer />
    </div>
  );
}

export default Opportunities;
