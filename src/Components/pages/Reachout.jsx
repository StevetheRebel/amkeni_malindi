import React, { useEffect, useRef, useState } from "react";
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
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./../Footer/Footer.jsx";
import { useForm } from "react-hook-form";
import { Box, Modal, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import amkeni from "./../../../public/Collection/Amkeni Avatar.webp";

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

function Reachout() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [openSubmission, setOpenSubmission] = useState(false);
  const [countDown, setCountDown] = useState(5);
  const [submitMessage, setSubmitMessage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleModalClose = () => setOpenSubmission(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("EMAIL", data.subscriptionMail);
    formData.append("SUBSCRIBED", "Newsletter Subscription");
    formData.append("b_f55ff5eee7cf7f45ff793a98b_5120374c31", "");

    try {
      const response = fetch(
        "https://amkenimalindi.us10.list-manage.com/subscribe/post?u=f55ff5eee7cf7f45ff793a98b&amp;id=5120374c31&amp;f_id=00e4d9e3f0",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      setOpenSubmission(true);
      reset();
    } catch (error) {
      console.log("Submission is not successfull:", error);
    }
  };

  const handleCloseReach = () => {
    setSubmitMessage(false);
    setIsSubmitted(true);
  };

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
      <div className="relative h-auto select-none ">
        <Helmet>
          <title>Contact Us | Amkeni Malindi</title>
          <meta
            name="description"
            content="Reach out to Amkeni Malindi via phone, email, or our online form. Visit us in Malindi, Kenya or connect on social media. Let’s support communities together."
          />
          <meta
            name="keywords"
            content="Contact Amkeni Malindi, community health Malindi, NGO Kilifi, call Amkeni, visit Amkeni office, Amkeni contact form, newsletter"
          />
          <meta name="author" content="Amkeni Malindi" />
          <link rel="canonical" href="https://amkenimalindi.org/contact" />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Contact Amkeni Malindi | We're Here to Help"
          />
          <meta
            property="og:description"
            content="Get in touch with Amkeni Malindi through our contact form, email, phone, or visit us in Malindi. Connect with our team to learn more or partner with us."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://amkenimalindi.org/contact" />
          <meta property="og:image" content={amkeni} />
          <meta
            property="og:image:alt"
            content="Amkeni Malindi Contact Information"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Contact Amkeni Malindi" />
          <meta
            name="twitter:description"
            content="Visit us in Malindi, Kenya, or get in touch online. We’re ready to support and collaborate."
          />
          <meta name="twitter:image" content={amkeni} />

          <script type="application/ld+json">
            {`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "name": "Amkeni Malindi",
      "url": "https://amkenimalindi.org/",
      "logo": "https://amkenimalindi.org/assets/logo.webp",
      "description": "Community-led organization advancing health, advocacy, and empowerment in Kilifi County, Kenya.",
      "foundingDate": "2009",
      "sameAs": [
        "https://web.facebook.com/profile.php?id=100017571492191",
        "https://x.com/Amkeni_Org",
        "https://www.instagram.com/amkeni_org/",
        "https://www.linkedin.com/company/amkeni-malindi/",
        "https://www.tiktok.com/@amkeni_org",
        "https://www.youtube.com/@amkenimalindi"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mtangani Rd, Opposite Kiddie Stars",
        "postalCode": "5438 - 80200",
        "addressLocality": "Malindi",
        "addressRegion": "Kilifi County",
        "addressCountry": "KE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "General Inquiries",
        "telephone": "+254796237882",
        "email": "info@amkenimalindi.ke",
        "availableLanguage": "English",
        "areaServed": "KE",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://amkenimalindi.org/contact",
      "url": "https://amkenimalindi.org/contact",
      "name": "Contact Us",
      "description": "Reach out to Amkeni Malindi via phone, email, contact form, or visit us in person. Subscribe to our newsletter or follow us on social media."
    },
    {
      "@type": "ContactPage",
      "url": "https://amkenimalindi.org/contact"
    }
  ]
}
`}
          </script>
        </Helmet>

        <section className="pt-[154px] xs:pt-[160px] sm:pt-36 bg-image11 bg-fixed bg-cover bg-center min-h-screen ">
          {/* Page Heading */}
          <h1 className="h1-text text-center text-secondary">Contact Us</h1>

          {/* Google Map */}
          <div className="flex flex-col w-full items-center px-4 lg:px-[6%] gap-2 md:gap-4 ">
            <h2 className="h2-text text-primary/70 self-start">Our Location</h2>
            <div className="w-[90%] h-[50vh] mb-4 min-h-[250px] rounded-2xl overflow-hidden md:h-[60vh] md:w-[95%] lg:h-[50vh] lg:w-full ">
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
          </div>
        </section>

        {/* Contact Us */}
        <section className="mt-2 px-4 lg:px-[6%] md:mt-4 lg:mt-6">
          <h2 className="h2-text text-secondary/70 ">Get in Touch</h2>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-2 md:items-center ">
            <div className="w-full md:w-[60%] ">
              {submitMessage ? (
                <div className="w-full md:w-[90%] ">
                  <ContactForm closeReach={handleCloseReach} />
                </div>
              ) : (
                <div className="w-full flex justify-center h-full md:items-center ">
                  <button
                    onClick={() => setSubmitMessage(true)}
                    className="bg-primary/70 py-2 px-4 font-button-links tracking-widest text-xl rounded-2xl text-white hover:bg-primary hover:text-black md:justify-self-center xl:text-3xl transition-all duration-300 "
                  >
                    {`${isSubmitted ? "Message Sent" : "Send us a Message"}`}
                  </button>
                </div>
              )}
            </div>
            <LocalAddress />
          </div>
        </section>

        {/* Subscription */}
        <section className="min-h-[400px] bg-image2 bg-no-repeat bg-cover bg-fixed bg-center grid place-items-center">
          <div className="w-[90%] backdrop-blur-lg bg-white/40 rounded-2xl my-6 xs:p-4 md:w-[70%] md:p-6 md:my-10 lg:w-[50%] ">
            <h2 className="h2-text text-center text-balance ">
              Subscribe to our Newsletters
            </h2>
            <form
              className="flex flex-col items-center gap-4 py-4 xs:pb-0 "
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                name="SUBSCRIBED"
                id="subscribed"
                className="hidden"
              />
              <input
                type="email"
                name="EMAIL"
                id="subscriptionMail"
                className="py-1 px-2 text-black rounded-xl w-[90%] h5-text focus:border-0 focus:outline-none invalid:bg-secondary/70 invalid:text-white"
                placeholder="Enter your Email..."
                {...register("subscriptionMail", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email Address",
                  },
                })}
              />
              {errors.subscriptionMail && (
                <p className="body-text text-secondary/90 w-[90%] ">
                  {errors.subscriptionMail.message}
                </p>
              )}
              <fieldset className="w-[90%]">
                <legend className="legend ">Consent</legend>
                <div className="py-1">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    className="inline-block accent-primary"
                    {...register("consent", {
                      required: "Please confirm consent before submitting",
                    })}
                  />
                  <label htmlFor="consent" className="body-text pl-2 ">
                    I consent to the collection and use of my personal email for
                    the purpose of receiving Organizational Newsletters.
                  </label>
                  {errors.consent && (
                    <p className="body-text text-secondary/90">
                      {errors.consent.message}
                    </p>
                  )}
                </div>
              </fieldset>
              <button
                type="submit"
                className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black"
              >
                Subscribe
              </button>
              <Modal
                open={openSubmission}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="text-center"
                  >
                    Success👏🏽! You've joined the inner Circle!
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                    className="text-center"
                  >
                    Closing in {countDown} seconds...
                  </Typography>
                </Box>
              </Modal>
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

      {/* Social Media Links */}
      <div className="flex py-2 gap-2 self-center xs:py-4 xs:gap-3 sm:gap-4 sm:self-start">
        <SocialMediaLinks
          link="https://web.facebook.com/profile.php?id=100017571492191"
          icon={faFacebookF}
        />
        <SocialMediaLinks
          link="https://www.instagram.com/amkeni_org/"
          icon={faInstagram}
        />
        <SocialMediaLinks link="https://x.com/Amkeni_Org" icon={faXTwitter} />
        <SocialMediaLinks
          link="https://www.linkedin.com/company/amkeni-malindi/posts/?feedView=all"
          icon={faLinkedin}
        />
        <SocialMediaLinks
          link="https://www.youtube.com/channel/UCLO0qkgaXpQ9QK3WFM5S4zQ"
          icon={faYoutube}
        />
        <SocialMediaLinks
          link="https://www.tiktok.com/@amkenimalindiorg?_t=ZM-8s2ZxeBlVnp&_r=1"
          icon={faTiktok}
        />
      </div>
    </section>
  );
};

const SocialMediaLinks = ({ link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex gap-2 body-text xs:gap-3 group sm:gap-4"
    >
      <FontAwesomeIcon
        icon={icon}
        className="w-6 h-6 xs:w-8 xs:h-8 text-gray-600 group-hover:text-primary transition-all duration-300 "
      />
    </a>
  );
};

export default Reachout;
