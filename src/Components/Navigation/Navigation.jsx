import React, { useEffect, useState } from "react";
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
import { NavLink } from "react-router-dom";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 select-none bg-white/20 backdrop-blur-md transform transition-opacity duration-500 ${isScrolled ? "bg-gradient-top-bottom opacity-100 shadow-md" : "bg-transparent opacity-80 text-white"}`}>
      {/* Navigation banner */}
      <div className="flex py-2 flex-col items-center gap-4 sm:flex-row sm:justify-between sm:px-10 lg:px-[6%]">
        {/* Logo */}
        <div className="w-[50%] sm:w-48">
          <img src={logo} alt="amkeni logo" className="" />
        </div>

        {/* Sign in and social media links */}
        <div className="flex gap-4 text-sm">
          <p className="capitalize font-subheading font-bold hover:underline">sign in</p>
          <a
            href="https://web.facebook.com/profile.php?id=100017571492191"
            target="_blank"
            rel="noopener noreferrer"
            className=""
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
            className=""
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
            className=""
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
            className=""
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
            className=""
          >
            <FontAwesomeIcon icon={faTiktok} className="text-base hover-text" />
          </a>
        </div>
      </div>

      {/* Navigation humberger menu button */}
      <div
        className="sm:hidden text-3xl text-end pr-4 pt-2 "
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      {/* Menu items */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:block sm:backdrop-blur-none sm:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <ul className="uppercase font-subheading flex flex-col items-end pr-4 gap-4 py-4 sm:flex-row sm:px-0 sm:gap-0 sm:justify-around sm:items-center lg:justify-between lg:px-[6%]">
          <li className="hover-text">
            <NavLink to="/" onClick={closeMenu}>
              home
            </NavLink>
          </li>
          <li className="hover-text">
            <NavLink to="/about" onClick={closeMenu}>
              about us
            </NavLink>
          </li>
          <li className="hover-text">
            <NavLink to="/program-services" onClick={closeMenu}>
              programs & services
            </NavLink>
          </li>
          <li className="hover-text">
            <NavLink to="/opportunities-services" onClick={closeMenu}>
              opportunities & events
            </NavLink>
          </li>
          <li className="hover-text">
            <NavLink to="/news-blog" onClick={closeMenu}>
              news & blog
            </NavLink>
          </li>
          <li className="px-2 py-1 rounded-3xl border-2 border-black shadow-md hover:shadow-inner ">
            <NavLink to="/reachout" onClick={closeMenu}>
              reach out
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
