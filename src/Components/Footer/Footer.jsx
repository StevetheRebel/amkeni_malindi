import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/Amkeni Document Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <div className="bg-light/50 py-4">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:gap-4 ">
          {/* First part of the Footer */}
          <div className="flex flex-col gap-1 items-center pb-2 sm:items-start ">
            {/* Footer Logo */}
            <div className="w-[70%] sm:w-52">
              <img src={logo} alt="amkeni logo" />
              <p className="uppercase font-heading text-[10px] tracking-wider sm:tracking-widest text-center sm:text-[8px] ">
                an empowered, just and inclusive society
              </p>
            </div>
            <h4 className="font-subheading capitalize font-bold text-lg tracking-wider ">
              subscribe for updates
            </h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-light p-2 rounded-xl focus:outline-none focus:bg-accent/60 focus:text-muted"
              />
              <button className="bg-primary/50 text-dark p-2 rounded-xl hover:bg-primary hover:font-bold sm:w-fit sm:px-4 ">
                Subscribe
              </button>
            </form>
          </div>

          {/* Second part of the Footer */}
          <div className="flex flex-col items-center sm:items-start ">
            <h5 className="font-subheading capitalize font-bold text-xl tracking-wider">
              Our Organization
            </h5>
            <ul className="capitalize font-bodyText flex flex-col gap-1 py-2 text-muted items-center sm:items-start ">
              <li className="hover:text-black">
                <Link to="/about">about amkeni malindi</Link>
              </li>
              <li className="hover:text-black">
                <Link to="/opportunities-services">opportunities</Link>
              </li>
              <li className="hover:text-black">
                <Link to="/opportunities-services">events</Link>
              </li>
              <li className="hover:text-black">
                <Link to="/about">where we work</Link>
              </li>
            </ul>
          </div>

          {/* Third part of the Footer */}
          <div className="flex flex-col items-center sm:items-start">
            <h5 className="font-subheading capitalize font-bold text-xl tracking-wider ">
              support
            </h5>
            <ul className="capitalize font-bodyText flex flex-col gap1 py-2 items-center text-muted sm:items-start">
              <li className="hover:text-black">
                <Link to="/reachout">Reach Out</Link>
              </li>
              <li className="hover:text-black">
                <Link to="/reachout">FAQ</Link>
              </li>
              <li className="hover:text-black">
                <a href="https://www.privacypolicies.com/live/48b650f2-e9b6-4546-bd73-a4c878e9ba8e">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* copyrights and socials link */}
        <div className="flex flex-col justify-between items-center gap-2 sm:flex-row sm:px-[5%] lg:px-[9%] xl:px-[10%] 2xl:px-[12%] ">
          <p className="font-bodyText text-xs sm:text-sm 2xl:text-base">
            Copyright &copy;{year} Amkeni Malindi. All Rights Reserved.
          </p>
          <div className="flex gap-2 sm:gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=100017571492191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="text-base hover-text sm:text-lg xl:text-2xl"
              />
            </a>
            <a
              href="https://www.instagram.com/amkeni_org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-base hover-text sm:text-lg xl:text-2xl"
              />
            </a>
            <a
              href="https://x.com/Amkeni_Org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-base hover-text sm:text-lg xl:text-2xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/amkeni-malindi/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-base hover-text sm:text-lg xl:text-2xl"
              />
            </a>
            <a
              href="https://www.tiktok.com/@amkenimalindiorg?_t=ZM-8s2ZxeBlVnp&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-base hover-text sm:text-lg xl:text-2xl"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
