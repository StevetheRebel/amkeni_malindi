import React, { useState } from "react";
import logo from "./../../assets/Amkeni Document Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="fixed w-full z-50 sm:bg-white">
      <div className="border-b-2 py-2 bg-white flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:px-10 lg:px-[6%]">
        <div className="w-[50%] sm:w-48">
          <img src={logo} alt="amkeni logo" />
          <p className="uppercase font-heading text-[8px] tracking-wide sm:tracking-wider text-center">
            an empowered, just and inclusive society
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <p className="capitalize font-heading hover:underline">sign in</p>
          <a
            href="https://web.facebook.com/profile.php?id=100017571492191"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-base hover-text"
            />
          </a>
          <a
            href="https://www.instagram.com/amkeni_org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-base hover-text"
            />
          </a>
          <a
            href="https://x.com/Amkeni_Org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-base hover-text"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/amkeni-malindi/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-base hover-text"
            />
          </a>
          <a
            href="https://www.tiktok.com/@amkenimalindiorg?_t=ZM-8s2ZxeBlVnp&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className="text-base hover-text" />
          </a>
        </div>
      </div>
      <div
        className="sm:hidden text-3xl text-end pr-4 pt-2 bg-white"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:block bg-white/30 backdrop-blur-md sm:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <ul className="uppercase font-subheading flex flex-col items-end pr-4 gap-4 py-4 sm:flex-row sm:px-0 sm:gap-0 sm:justify-around sm:items-center lg:justify-between lg:px-[6%]">
          <li className="hover-text">
            <Link to="/" onClick={closeMenu}>
              home
            </Link>
          </li>
          <li className="hover-text">
            <Link to="/about" onClick={closeMenu}>
              about us
            </Link>
          </li>
          <li className="hover-text">
            <Link to="/program-services" onClick={closeMenu}>
              program & services
            </Link>
          </li>
          <li className="hover-text">
            <Link to="/opportunities-services" onClick={closeMenu}>
              opportunities & events
            </Link>
          </li>
          <li className="hover-text">
            <Link to="/news-blog" onClick={closeMenu}>
              news & blog
            </Link>
          </li>
          <li className="bg-light px-2 py-1 rounded-3xl hover:bg-primary">
            <Link to="/reachout" onClick={closeMenu}>
              reach out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;