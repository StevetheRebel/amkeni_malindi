import React, { useEffect, useRef, useState } from "react";
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
import { useForm } from "react-hook-form";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  maxHeight: "400px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "24px",
  p: 3,
};

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [openSubmission, setOpenSubmission] = useState(false);
  const [countDown, setCountDown] = useState(5);

  const handleModalClose = () => setOpenSubmission(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    console.log("date:", data);
    setOpenSubmission(true);

    reset();
  };

  useEffect(() => {
      let timer;
  
      if (openSubmission) {
        setCountDown(5);
  
        timer = setInterval(() => {
          setCountDown((prev) => {
            if (prev <= 1) {
              clearInterval(timer); 
              handleModalClose(); 
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
  
      return () => {
        clearInterval(timer);
      };
    }, [openSubmission]);

  return (
    <>
      <div className="bg-gradient-bottom-top py-4">
        <div className="flex flex-col sm:flex-row sm:justify-around sm:gap-4 ">
          {/* First part of the Footer */}
          <div className="flex flex-col gap-1 items-center pb-2 sm:items-start ">
            {/* Footer Logo */}
            <div className="w-[50%] sm:w-52">
              <img src={logo} alt="amkeni logo" />
            </div>
            <h4 className="font-subheading capitalize font-bold text-lg tracking-wider ">
              subscribe for updates
            </h4>

            {/* Form submission */}
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
              name="subscriber"
              id="subscriber"
              autoComplete="yes"
              ref={form}
            >
              <input
                type="email"
                name="subscriberEmail"
                id="subscriberEmail"
                placeholder="Enter your email"
                className="bg-light p-2 rounded-xl focus:outline-none focus:bg-accent/60 focus:text-muted"
                {...register("subscriberEmail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.subscriberEmail && (
                <p className="text-[10px] text-secondary">
                  {errors.subscriberEmail.message}
                </p>
              )}
              <button
                type="submit"
                className="bg-primary/50 text-dark p-2 rounded-xl hover:bg-primary hover:font-bold sm:w-fit sm:px-4 "
              >
                Subscribe
              </button>
              <Modal
                open={openSubmission}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                ario-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Your have subscribed for Organizational Updates!
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Closing in {countDown} seconds...
                  </Typography>
                </Box>
              </Modal>
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
                <a
                  href="https://www.privacypolicies.com/live/48b650f2-e9b6-4546-bd73-a4c878e9ba8e"
                  target="_blank"
                >
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
