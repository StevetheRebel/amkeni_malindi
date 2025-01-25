import React, { useEffect, useState } from "react";
import ContactForm from "../ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelopeOpenText,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./../Footer/Footer.jsx";

function Reachout() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-auto top-[154px] xs:top-[160px] sm:top-36 select-none ">
        <h1 className="h1-text text-center text-secondary">Contact Us</h1>

        {/* Google Map */}
        <section className="flex flex-col w-full items-center px-4 lg:px-[6%] gap-2 md:gap-4 ">
          <h2 className="h2-text text-secondary/70 self-start">Our Location</h2>
          <div className="w-[90%] h-[50vh] min-h-[250px] rounded-2xl overflow-hidden md:h-[30vh] md:w-[95%] lg:h-[40vh] lg:w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.563961706868!2d40.10625507588628!3d-3.2085529407505606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18158fead2fdff6f%3A0xb5dfe9eeea6ebb21!2sAmkeni%20Malindi%20Organization!5e0!3m2!1sen!2ske!4v1736760470740!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{
                border: 0,
                pointerEvents: isScrolling ? "none" : "auto",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Amkeni Malindi Organization Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mt-2 px-4 lg:px-[6%] md:mt-4 lg:mt-6">
          <h2 className="h2-text text-secondary/70 ">Get in Touch</h2>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-2 md:items-start ">
            <div className="w-full md:w-[60%]">
              <ContactForm />
            </div>
            <LocalAddress />
          </div>
        </section>

        {/* Subscription */}
        <section className="min-h-screen bg-pride bg-no-repeat bg-cover bg-fixed bg-center flex items-center justify-center">
          <div className="w-[90%] h-[40vh] backdrop-blur-lg bg-muted/20 rounded-2xl ">
            <h3 className="h3-text text-white text-center">
              Subscribe to our Newsletters
            </h3>
            <form action="">
              <input type="email" name="subscriptionMail" id="subscriptionMail" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

const LocalAddress = () => {
  return (
    <section className="font-bodyText flex flex-col items-start gap-2 justify-center my-2 lg:gap-8 ">
      {/* Location */}
      <div className="flex items-center gap-4 justify-center my-2 ">
        <div>
          <FontAwesomeIcon
            icon={faHospital}
            className="w-12 h-12 text-gray-500 md:w-8 md:h-8 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Mtangani Rd, Opposite Kiddie Stars
          </p>
          <p className="text-gray-400 text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            5438 - 80200, Malindi - Kenya
          </p>
        </div>
      </div>

      {/* Phone number */}
      <div className="flex items-center gap-4 justify-center my-2">
        <div>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className="w-12 h-12 text-gray-500 md:w-8 md:h-8 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20"
          />
        </div>
        <div>
          <p className="font-bold text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            +254 796 237 882
          </p>
          <p className="text-gray-400 text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Mon to Fri 9am to 5pm
          </p>
        </div>
      </div>

      {/* Email Contact */}
      <div className="flex items-center gap-4 justify-center my-2">
        <div>
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className="w-12 h-12 text-gray-500 md:w-8 md:h-8 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20"
          />
        </div>
        <div>
          <p className="font-bold text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            info@amkenimalindi.ke
          </p>
          <p className="text-gray-400 text-xs xs:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Send us your query anytime!
          </p>
        </div>
      </div>
      <div className="flex flex-col py-2 gap-2 self-center xs:py-4 xs:gap-3 sm:gap-4 sm:self-start">
        <SocialMediaLinks
          link="https://web.facebook.com/profile.php?id=100017571492191"
          icon={faFacebookF}
          user="Amkeni Org"
        />
        <SocialMediaLinks
          link="https://www.instagram.com/amkeni_org/"
          icon={faInstagram}
          user="@amkeni_org"
        />
        <SocialMediaLinks
          link="https://x.com/Amkeni_Org"
          icon={faXTwitter}
          user="@Amkeni_Org"
        />
        <SocialMediaLinks
          link="https://www.linkedin.com/company/amkeni-malindi/posts/?feedView=all"
          icon={faLinkedin}
          user="@Amkeni_Org"
        />
        <SocialMediaLinks
          link="https://www.tiktok.com/@amkenimalindiorg?_t=ZM-8s2ZxeBlVnp&_r=1"
          icon={faTiktok}
          user="Amkenimalindiorg"
        />
      </div>
    </section>
  );
};

const SocialMediaLinks = ({ link, icon, user }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex gap-2 body-text xs:gap-3 group sm:gap-4"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-6 h-6 xs:w-8 xs:h-8 text-gray-600 group-hover:text-primary "
      />
      <p className="text-gray-600 group-hover:text-black">{user}</p>
    </a>
  );
};

export default Reachout;
