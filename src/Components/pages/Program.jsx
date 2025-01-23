import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Box, Divider, Modal } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../AppointmentForm";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from "../../assets/Program Pics";
import { LazyLoadImage } from "react-lazy-load-image-component";
import programData from "./../../pillars.json";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";
import {
  AdvocacyImg,
  SustainableLivelihoodImg,
} from "../../assets/Pillar Pictures";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination as SlidePagination,
} from "swiper/modules";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "24px",
};

function Program() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const handleOpen6 = () => setOpen6(true);
  const handleClose6 = () => setOpen6(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    (link.href = "./../../../public/Condom Pamphlet.pdf"),
      (link.download = "Condom Pamphlet.pdf");
    link.click();
  };

  return (
    <div className="relative h-auto select-none scroll-smooth ">

      {/* Integrated and Intersectional Health Promotion and Access */}
      <section className="relative min-h-screen bg-image4 bg-fixed bg-no-repeat bg-cover pt-[154px] xs:pt-[160px] sm:pt-36 flex flex-col gap-4 px-4 sm:px-4 lg:gap-6 lg:px-[6%] xl:gap-8 2xl:gap-10">
        <h1 className="h1-text capitalize text-center text-secondary">
          our programs
        </h1>

        <div className="flex flex-col items-center mb-4 md:mb-6">
          {
            <h2 className="h2-text font-bold text-center text-secondary/70">
              {programData.pillars[0].title}
            </h2>
          }
          {bundleTextIntoParagraphs(programData.pillars[0].description, 5).map(
            (para, index) => (
              <p key={index} className="text-justify body-text text-white">
                {para}
                <br />
                <br />
              </p>
            )
          )}
          <p className="font-bold body-text text-white py-4 text-center">
            Check out the detailed steps below and visit us today to get started
            on your journey to better health!
          </p>
          <button
            className="button-type button-text bg-primary/50 rounded-full hover:bg-primary"
            onClick={handleOpen6}
          >
            Book an Appointment
          </button>
          <Modal
            open={open6}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="2xl:px-10 relative flex flex-col pb-4">
                <div className="sticky self-end top-2 right-2">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={handleClose6}
                    className="body-text p-2 z-30 bg-black rounded-full text-white hover:text-secondary"
                  />
                </div>
                <h2 className="h2-text text-secondary/70 text-center pb-2 md:pb-4">
                  Book An Appointment
                </h2>
                <AppointmentForm handleFormClose={handleClose6} />
              </div>
            </Box>
          </Modal>
          <div className="flex flex-col gap-4 items-center justify-center py-4 sm:flex-row flex-wrap lg:gap-6 w-full 2xl:gap-4 ">
            {/* HIV Testing Services */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo1}
                alt="HIV Testing Services"
                className="absolute h-full z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 flex flex-col h-full w-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4 ">
                <h4 className="h4-text text-white text-center">
                  HIV Testing Services
                </h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen}
                >
                  Read More
                </button>
                <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="2xl:px-10 relative flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <ol className="list-decimal body-text list-outside flex flex-col gap-4 px-8 pb-4 md:gap-6 lg:gap-8 lg:px-12 xl:gap-10 2xl:gap-12">
                        {/* Pre-Testing counseling */}
                        <li>
                          <h3 className="h3-text text-accent">
                            Pre-Test Counseling
                          </h3>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10 ">
                            <li>
                              <span className="font-bold">
                                Introduction and Rapport Building
                              </span>
                              : Establish trust and non-judgmental environment.
                            </li>
                            <li>
                              <span className="font-bold">
                                Informed Consent
                              </span>
                              : Explain the purpose, process, benefits, and
                              implications of HIV testing. Obtain verbal or
                              written consent.
                            </li>
                            <li>
                              <span className="font-bold">Risk Assessment</span>
                              : Discuss the client's potential risk behaviors
                              and exposure history.
                            </li>
                            <li>
                              <span className="font-bold">
                                Preparation for Result
                              </span>
                              : Address the possibility of both negative and
                              positive outcomes and their implications.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* HIV Test */}
                        <li>
                          <h3 className="h3-text text-accent">HIV Testing</h3>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10 ">
                            <li>
                              <span className="font-bold">
                                Selection of Test
                              </span>
                              : Use a WHO-approved testing algorithm, typically
                              involving rapid diagnostic tests (RDTs) or
                              laboratory-based methods.
                            </li>
                            <li>
                              <span className="font-bold">
                                Sample Collection
                              </span>
                              : Collect blood (finger prick or venous) or oral
                              fluid, depending on the test type.
                            </li>
                            <li>
                              <span className="font-bold">
                                Conduct the Test
                              </span>
                              : Perform the test to the manufacturer's
                              instructions, maintaining quality assurance
                              procedures.
                            </li>
                            <li>
                              <span className="font-bold">
                                Result Interpretation
                              </span>
                              : Follow the testing protocol for reading and
                              interpreting results.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Post-Testing Counseling */}
                        <li>
                          <h3 className="h3-text text-accent">
                            Post-Test Counseling
                          </h3>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold h4-text">
                                For HIV-Negative Result:
                              </span>
                              <ol className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 md:p-2 lg:gap-4 xl:gap-6 2xl:gap-8">
                                <li>
                                  <span className="font-bold">
                                    Risk Reduction Counseling
                                  </span>
                                  : Educate about safer sex practices, PrEP
                                  (Pre-Exposure Prophylaxis), and regular
                                  testing.
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Encourage Healthy Practices
                                  </span>
                                  : Promote a healthy lifestyle and strategies
                                  to remain negative.
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Provide Referrals
                                  </span>
                                  : If needed, for further prevention services.
                                </li>
                              </ol>
                            </li>

                            <li>
                              <span className="font-bold h4-text">
                                For HIV-Positive Result:
                              </span>
                              <ol className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 md:p-2 lg:gap-4 xl:gap-6 2xl:gap-8">
                                <li>
                                  <span className="font-bold">
                                    Emotional Support
                                  </span>
                                  : Allow the client time to process the
                                  results; provide empathetic and supportive
                                  counseling.
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Immediate Next Steps
                                  </span>
                                  : Explain confirmatory testing (if required)
                                  and linkage to care.
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Linkage to Care and Treatment
                                  </span>
                                  : Refer the client to antiretroviral therapy
                                  (ART) services and psychosocial support.
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Disclosure and Partner Testing
                                  </span>
                                  : Encourage safe disclosure to partners and
                                  family and provide partner notification
                                  services.
                                </li>
                              </ol>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Documentation and Follow-up */}
                        <li>
                          <h3 className="h3-text text-accent">
                            Documentation and Follow-Up
                          </h3>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">Record-Keeping</span>:
                              Ensure all tests and counseling sessions are
                              documented while maintaining confidentiality.
                            </li>
                            <li>
                              <span className="font-bold">
                                Referrals and Linkages
                              </span>
                              : Confirm that the client is connected to
                              necessary health and support services.
                            </li>
                            <li>
                              <span className="font-bold">Follow-Up</span>:
                              Arrange follow-up visits for additional
                              counseling, treatment, or preventive services as
                              needed.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>

            {/* STI Screening and Treatment */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo2}
                alt="STI Screening"
                className="absolute w-full h-full object-cover z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 flex flex-col h-full w-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4">
                <h4 className="h4-text text-white text-center">
                  STI Screening & Treatment
                </h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen1}
                >
                  Read More
                </button>
                <Modal
                  open={open1}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose1}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <h3 className="h3-text text-accent px-8 pb-4 lg:px-12">
                        Why Choose Our Services?
                      </h3>
                      <ol className="list-decimal body-text list-outside flex flex-col gap-4 px-8 pb-4 md:gap-6 lg:gap-8 lg:px-12 xl:gap-10 2xl:gap-12">
                        {/* Gender and Sexual Diverse Friendly */}
                        <li>
                          <h4 className="h4-text">
                            Gender and Sexual Diverse (GSD) Friendly
                          </h4>
                          <ul className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              We understand the unique healthcare needs of
                              gender and sexually diverse individuals, including
                              LGBTQIA+ communities.
                            </li>
                            <li>
                              Our facility creates a{" "}
                              <span className="font-bold">
                                safe and non-judgemental space
                              </span>{" "}
                              where you can access services without fear of
                              stigma or discrimination.
                            </li>
                            <li>
                              Staff undergo regular{" "}
                              <span className="font-bold">
                                sensitivity training
                              </span>{" "}
                              to ensure respectful interactions with all
                              clients.
                            </li>
                          </ul>
                        </li>
                        <Divider />

                        {/* Qualified and Compassionate Practitioners */}
                        <li>
                          <h4 className="h4-text">
                            Qualified and Compassionate Practitioners
                          </h4>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              Our team comprises{" "}
                              <span className="font-bold">
                                highly trained healthcare providers
                              </span>
                              , including physicians, nurses, and counselors,
                              with expertise in sexual and reproductive health.
                            </li>
                            <li>
                              We use the latest{" "}
                              <span className="font-bold">
                                evidence-based guidelines
                              </span>{" "}
                              to ensure accurate diagnosis and effective
                              treatment.
                            </li>
                            <li>
                              Practitioners are skilled in providing{" "}
                              <span className="font-bold">
                                gender-affirming care
                              </span>
                              , with a focus on maintaining dignity and
                              confidentiality.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Comprehensive STI Screening */}
                        <li>
                          <h4 className="h4-text">
                            Comprehensive STI Screening
                          </h4>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              We offer screening for a wide range of sexually
                              transmitted infections, including:
                            </li>
                            <ol className="list-lower-roman list-inside indent-6">
                              <li>Syphilis</li>
                              <li>Gonorrhea</li>
                              <li>Chlamydia</li>
                              <li>Hepatitis B & C</li>
                              <li>Human Papillomavirus (HPV)</li>
                              <li>Trichomaniasis and more</li>
                            </ol>
                            <li>
                              Screening and Tests are conductein a{" "}
                              <span className="font-bold">
                                discreet and professional manner
                              </span>
                              , ensuring your privacy is maintained at every
                              step.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Same Day or Prompt Results */}
                        <li>
                          <h4 className="h4-text">
                            Same Day or Prompt Results
                          </h4>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              Many of our tests provide{" "}
                              <span className="font-bold">
                                same-day results
                              </span>
                              , minimizing anxiety and enabling quick follow-up
                              care.
                            </li>
                            <li>
                              In cases requiring laboratory analysis, results
                              are delivered promptly, with clear communication
                              about next steps.
                            </li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>

            {/* Condom and Lubrican Distribution */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo3}
                alt="Condom and Lubricants"
                className="absolute h-full z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 flex flex-col h-full w-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4">
                <h4 className="h4-text text-white text-center">
                  Commodity Distribution & Education
                </h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen2}
                >
                  Read More
                </button>
                <Modal
                  open={open2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="2xl:px-10 relative flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose2}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <h3 className="h3-text text-accent px-8 pb-4 lg:px-12">
                        {" "}
                        Explore Our Condom & Lubricant Section
                      </h3>
                      <p className="py-4 body-text px-8 pb-4 lg:px-12">
                        Your sexual health matters, and we're here to help you
                        make every experience safe, comfortable, and enjoyable!
                        As you scroll through this section, you'll find
                        everything you need to know about the{" "}
                        <span className="font-bold">
                          condoms and lubricants
                        </span>{" "}
                        we offer because safer sex starts with the right tools.
                      </p>
                      <Divider />
                      <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 px-8 pb-4 lg:px-12 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                        {/* What is in Stock */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            What's in Stock?
                          </h4>
                          <p className="body-text">
                            We've got you covered with a wide range of{" "}
                            <span className="font-bold">
                              condoms and lubricants
                            </span>
                            , tailored to suit your needs:
                          </p>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">Condoms</span>:
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  Male condoms in different sizes and textures.
                                </li>
                                <li>
                                  Female/Internal condoms for added flexibility
                                  and comfort.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-bold">Lubricants</span>:
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  <span className="font-bold">
                                    Water-based lubricant
                                  </span>{" "}
                                  (perfect for any condom type).
                                </li>
                                <li>
                                  <span className="font-bold">
                                    Silicon-based lubricant
                                  </span>
                                  (long-lasting and ideal for more adventurous
                                  play).
                                </li>
                                <li>
                                  Fun options like{" "}
                                  <span className="font-bold">
                                    flavored, warming or cooling
                                  </span>{" "}
                                  lubes!
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Why Should You Use Condoms and lubricants */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Why Should You Use Condoms & Lubricants
                          </h4>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              Condoms are your first line of defense against{" "}
                              <span className="font-bold">
                                HIV, STIs and unintended pregnancies
                              </span>
                              .
                            </li>
                            <li>
                              Lubricants aren't just about pleasure - they help
                              prevent{" "}
                              <span className="font-bold">condom breakage</span>{" "}
                              and reduce discomfort, making your experience
                              safer and more enjoyable.
                            </li>
                            <li>
                              Want to learn more?{" "}
                              <span className="font-bold">Keep scrolling</span>{" "}
                              for pro tips on how to get the most out of these
                              essential products.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Master the Art of Proper Condom Use */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Master the Art of Proper Condom Use
                          </h4>
                          <p className="body-text">
                            Using condoms correctly is key to ensuring maximum
                            protection. We've made it easy by providing a{" "}
                            <span>downloadable guide</span> on proper condom
                            use, so you'll always know what to do, step by step.
                          </p>
                          <button
                            className="bg-primary/50 mt-2 px-4 py-2 rounded-full hover:bg-primary body-text"
                            onClick={handleDownload}
                          >
                            Download PDF
                          </button>
                        </li>
                        <Divider />

                        {/* Free & Easy access */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Free & Easy Access
                          </h4>
                          <p className="body-text">
                            Good news! Our condoms and lubricants are available
                            for <span className="font-bold">free</span>. Just
                            drop by our facility or reach out, and we'll provide
                            them with complete privacy and discretion. No
                            judgement, just support.{" "}
                          </p>
                          <br />
                          <p className="body-text">
                            Safe sex should be accessible to everyone.
                          </p>
                        </li>
                        <Divider />

                        {/* Stay in the Know */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Stay in the Know
                          </h4>
                          <p className="body-text">
                            Explore more of our website to find related
                            services, including:
                          </p>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-1 md:gap-2 md:pt-1 lg:gap-3 xl:gap-4 2xl:gap-5">
                            <li>STI Screening and Treatment</li>
                            <li>HIV Testing Services</li>
                            <li>Counseling and Support</li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Ready to Stock Up */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Ready to Stock Up?
                          </h4>
                          <p className="body-text">
                            Swing by our facility today or contact us for more
                            information. Whether you're here for a few
                            essentials or just browsing, we're happy to help you
                            stay safe while enjoying life to the fullest.
                          </p>
                          <br />
                          <p className="body-text">
                            Keep scrolling, keep exploring, and remember:{" "}
                            <span>safe is sexy!</span>
                          </p>
                        </li>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>

            {/* PrEP and PEP */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo4}
                alt="PrEP and PEP"
                className="absolute h-full w-full object-cover z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 flex flex-col w-full h-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4">
                <h4 className="h4-text text-white text-center">PrEP & PEP</h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen3}
                >
                  Read More
                </button>
                <Modal
                  open={open3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="2xl:px-10 relative flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose3}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <h3 className="h3-text text-accent px-8 pb-4 lg:px-12">
                        Discover Our PrEP & PEP Services
                      </h3>
                      <p className="py-2 body-text px-8 pb-4 lg:px-12">
                        Whether you're thinking ahead or responding to a recent
                        risk, we’re here to help you stay protected. Our{" "}
                        <span className="font-bold">PrEP</span> (Pre-Exposure
                        Prophylaxis) and <span className="font-bold">PEP</span>{" "}
                        (Post-Exposure Prophylaxis) services are designed to
                        give you peace of mind, empower you to take control of
                        your health, and prevent HIV transmission effectively.
                      </p>
                      <Divider />
                      <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 px-8 pb-4 lg:px-12 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                        {/* What is PrEP */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            What is PrEP?
                          </h4>
                          <p>
                            Think of <span className="font-bold">PrEP</span> as
                            your daily shield. It’s a medication taken{" "}
                            <span className="font-bold">
                              before potential exposure to HIV
                            </span>
                            , proven to reduce the risk of transmission by more
                            than 90%.
                          </p>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">Who can use it?</span>
                              <p>PrEP is ideal for individuals who:</p>
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>Have an HIV-positive Partner.</li>
                                <li>
                                  Are sexually active in high-risk settings.
                                </li>
                                <li>
                                  Are part of gender and sexually diverse
                                  communities seeking added protection.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-bold">How do I start?</span>
                              <p>
                                Starting PrEP is simple: visit us, get tested,
                                and we’ll guide you through every step, and
                                ongoing support.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* What is PEP */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            What is PEP?
                          </h4>
                          <p>
                            Sometimes, life surprises us.{" "}
                            <span className="font-bold">PEP</span> is your
                            emergency armor—a medication taken{" "}
                            <span className="font-bold">
                              within 72 hours of potential HIV exposure
                            </span>{" "}
                            to significantly lower the risk of infection.
                          </p>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">
                                Who should take PEP?
                              </span>
                              <p>PEP is recommended if you've:</p>
                              <ol className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  Had unprotected sex with an unknown or
                                  HIV-positive partner.
                                </li>
                                <li>Experienced condom failure during sex.</li>
                                <li>
                                  Been exposed to HIV through needle sharing or
                                  occupational hazards.
                                </li>
                              </ol>
                            </li>
                            <li>
                              <span className="font-bold">
                                How does it work?
                              </span>
                              <p>
                                After evaluating your risk, our healthcare
                                professionals will initiate PEP, which involves
                                a 28-day course of antiretroviral medications,
                                along with follow-up testing and care.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Why choose our PrEP & PEP Services */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Why Choose Our PrEP & PEP Services
                          </h4>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">
                                GSD-Friendly Care
                              </span>
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  Our services are inclusive and welcoming to{" "}
                                  <span className="font-bold">
                                    gender and sexually diverse individuals
                                  </span>
                                  , ensuring that everyone feels safe and
                                  respected.
                                </li>
                                <li>
                                  Our team is trained in providing{" "}
                                  <span className="font-bold">
                                    non-judgmental and compassionate care
                                  </span>{" "}
                                  tailored to your unique needs.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-bold">
                                Qualified Practitioners
                              </span>
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  Our healthcare professionals have extensive
                                  experience in{" "}
                                  <span className="font-bold">
                                    HIV prevention
                                  </span>{" "}
                                  and will provide personalized advice,
                                  monitoring, and support throughout your PrEP
                                  or PEP journey.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-bold">
                                Affordable and Accessible
                              </span>
                              <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                <li>
                                  We believe prevention should be accessible to
                                  all. That's why we offer{" "}
                                  <span className="font-bold">free aceess</span>{" "}
                                  to PrEP and PEP for eligible individuals.
                                </li>
                              </ul>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Your Next Step to Protection */}
                        <h4 className="h4-text text-accent/70">
                          Your Next Step to Protection
                        </h4>
                        <p>
                          Taking charge of your health is easy. Whether you're
                          interested in starting PrEP or need PEP urgently, our
                          doors are open. We ensure complete{" "}
                          <span className="font-bold">privacy</span> and offer{" "}
                          <span className="font-bold">same-day initiation</span>{" "}
                          for PEP to act fast when you need it most.
                        </p>
                        <p className="font-bold text-center">
                          Ready to protect yourself? Visit us today, book an
                          appointment or contact us for more information!
                        </p>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>

            {/* ART */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo5}
                alt="ART Services"
                className="absolute w-full h-full object-cover z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 w-full flex flex-col h-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4 ">
                <h4 className="h4-text text-white text-center">ART</h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen4}
                >
                  Read More
                </button>
                <Modal
                  open={open4}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="2xl:px-10 relative flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose4}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <h3 className="h3-text text-accent px-8 pb-4 lg:px-12">
                        Explore Our ART (Antiretroviral Therapy) Services
                      </h3>
                      <p className="body-text py-4 px-8 pb-4 lg:px-12">
                        Living a healthy, fulfilling life with HIV is possible,
                        and Antiretroviral Therapy (ART) plays a crucial role in
                        achieving that. At our facility, we offer comprehensive
                        ART services, ensuring that individuals living with HIV
                        receive the best care, support, and guidance on their
                        journey toward a strong, healthy future.
                      </p>
                      <Divider />

                      <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 px-8 pb-4 lg:px-12 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                        {/* What is ART? */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            What is ART?
                          </h4>
                          <p>
                            <span className="font-bold">
                              Antiretroviral Therapy (ART)
                            </span>{" "}
                            involves taking a combination of medications that
                            suppress the HIV virus, helping to:
                          </p>
                          <ul className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">
                                Reduce the viral load
                              </span>{" "}
                              in your body to undetectable levels.
                            </li>
                            <li>
                              <span className="font-bold">
                                Prevent transmission
                              </span>{" "}
                              of HIV to sexual partners.
                            </li>
                            <li>
                              <span className="font-bold">
                                Restore and protect your immune system
                              </span>
                              , improving overall health and quality of life.
                            </li>
                          </ul>
                        </li>
                        <Divider />

                        {/* Why Choose Our ART Services */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Why Choose Our ART Services?
                          </h4>
                          <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <li>
                              <span className="font-bold">
                                Expert Care & Monitoring
                              </span>
                              <p>
                                Our experienced healthcare professionals will
                                work with you to create a personalized treatment
                                plan, ensuring you’re on the most effective and
                                tolerable medication. Regular follow-ups help
                                monitor your progress and manage any side
                                effects.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Inclusive & Non-judgemental Environment
                              </span>
                              <p>
                                We provide{" "}
                                <span className="font-bold">
                                  GSD-friendly care
                                </span>
                                , ensuring that gender and sexually diverse
                                individuals feel comfortable and respected at
                                every step of their treatment journey.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Holistic Support
                              </span>
                              <p>
                                Beyond medication, we offer:
                                <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                                  <li>
                                    <span className="font-bold">
                                      Counseling services
                                    </span>{" "}
                                    to support mental and emotional well-being.
                                  </li>
                                  <li>
                                    <span className="font-bold">
                                      Peer support groups
                                    </span>
                                    , where you can connect with others living
                                    with HIV.
                                  </li>
                                  <li>
                                    <span className="font-bold">
                                      Nutritional guidance
                                    </span>{" "}
                                    to help maintain a healthy lifestyle.
                                  </li>
                                </ul>
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Confidential & Accessible
                              </span>
                              <p>
                                Your privacy is our priority. Whether it’s your
                                first visit or a regular follow-up, we ensure
                                that every interaction is confidential. Our
                                services are also free.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Starting ART */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Starting ART
                          </h4>
                          <p>
                            Starting ART as soon as possible after an HIV
                            diagnosis is critical for long-term health. Here’s
                            how we can help you get started:
                          </p>
                          <ol className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                            <li>
                              <span className="font-bold">Assessment</span> –
                              We’ll begin by conducting tests to determine your
                              overall health and readiness for ART.
                            </li>
                            <li>
                              <span className="font-bold">
                                Treatment Initiation
                              </span>{" "}
                              – Once you’re ready, we’ll prescribe the right
                              combination of antiretroviral medications for you.
                            </li>
                            <li>
                              <span className="font-bold">Ongoing Support</span>{" "}
                              – Our team will provide regular follow-ups to
                              ensure your treatment is effective, with
                              adjustments made if necessary.
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Undetectable = Untransmittable */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Undetectable = Untransmittable (U=U)
                          </h4>
                          <p className="pt-2 pb-4">
                            Achieving an undetectable viral load through ART
                            means you cannot transmit HIV to others. This is a
                            powerful motivator to stay on treatment and live
                            openly without fear or stigma.
                          </p>
                        </li>
                        <Divider />

                        <h4 className="h4-text text-accent">
                          Your Health, Our Commitment
                        </h4>
                        <p>
                          Whether you’re newly diagnosed or already on ART,
                          we’re here to offer you ongoing care and support.
                          Let’s work together to keep you healthy and thriving.
                        </p>
                        <p className="font-bold text-center">
                          Ready to start or continue ART? Book an appointment,
                          visit us or contact us today!
                        </p>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>

            {/* Mental Health and Psychosocial Support */}
            <div className="relative overflow-hidden w-[80%] aspect-[1/1.25] rounded-2xl sm:max-w-44 lg:max-w-60 xl:max-w-72 2xl:max-w-80 group">
              <LazyLoadImage
                src={photo6}
                alt="Mental Health"
                className="absolute w-full h-full object-cover z-10 group-hover:brightness-50 group-hover:z-0"
                placeholder={
                  <div className="flex items-center justify-center bg-gray-300 h-full">
                    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                  </div>
                }
              />
              <div className="absolute right-[100%] z-10 flex flex-col h-full w-full items-center justify-center gap-4 px-2 group-hover:animate-slideIn group-hover:right-0 sm:justify-between sm:py-4 sm:px-0 lg:py-6 lg:px-2 xl:px-4">
                <h4 className="h4-text text-white text-center">
                  Mental Health & Psychosocial Support
                </h4>
                <button
                  className="button-type button-text bg-primary/70 hover:bg-primary rounded-full"
                  onClick={handleOpen5}
                >
                  Read More
                </button>
                <Modal
                  open={open5}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="2xl:px-10 relative flex flex-col select-none">
                      <div className="sticky self-end top-2 right-2">
                        <FontAwesomeIcon
                          icon={faXmark}
                          onClick={handleClose5}
                          className="body-text p-2 bg-black rounded-full text-white hover:text-secondary"
                        />
                      </div>
                      <h3 className="h3-text text-accent px-8 pb-4 lg:px-12">
                        Your Mental Health Matters: Psychosocial Support
                        Services
                      </h3>
                      <p className="body-text pt-2 pb-4 px-8 lg:px-12">
                        We understand that mental health is key to overall
                        well-being, especially when navigating health challenges
                        or life’s uncertainties. That’s why we offer{" "}
                        <span className="font-bold">
                          mental health and psychosocial support services
                        </span>{" "}
                        with a dedicated psychologist who is here to listen,
                        guide, and help you build resilience.
                      </p>
                      <Divider />

                      <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 px-8 pb-4 lg:px-12 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                        {/* What we Offer */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            What we Offer
                          </h4>
                          <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                            <li>
                              <span className="font-bold">
                                One-on-One Counseling Sessions
                              </span>
                              <p>
                                Sometimes, life can feel overwhelming. Our
                                experienced psychologist provides{" "}
                                <span className="font-bold">
                                  confidential, individualized counseling
                                </span>{" "}
                                to help you manage stress, anxiety, depression,
                                trauma, or any other mental health concerns.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Group Therapy & Peer Support
                              </span>
                              <p>
                                You’re not alone. Join our{" "}
                                <span className="font-bold">
                                  support groups
                                </span>{" "}
                                where individuals facing similar challenges come
                                together to share experiences, offer mutual
                                support, and foster a sense of community.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Crisis Itervention
                              </span>
                              <p>
                                If you’re experiencing a mental health crisis,
                                our psychologist is trained to provide immediate
                                care, helping you stabilize and connect with
                                long-term support services.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Psychosocial Support for People Living with HIV
                                (PLHIV)
                              </span>
                              <p>
                                We offer tailored mental health services for
                                individuals living with HIV, recognizing the
                                unique emotional and psychological challenges
                                that can come with managing the condition. Our
                                goal is to promote{" "}
                                <span className="font-bold">
                                  positive mental health, adherence to treatment
                                </span>
                                , and overall well-being.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Why Choose Our Psychosocial Support Services */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Why Choose Our Psychosocial Support Services?
                          </h4>
                          <ol className="list-disc body-text list-inside flex flex-col pt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <li>
                              <span className="font-bold">
                                Non-judgemental, Inclusive Care
                              </span>
                              <p>
                                We’re proud to provide a safe, welcoming space
                                for everyone, including{" "}
                                <span className="font-bold">
                                  gender and sexually diverse (GSD) communities
                                </span>
                                . Our psychologist and support staff are trained
                                in offering GSD-sensitive services, ensuring you
                                feel respected and understood.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Qualified Mental Health Practitioners
                              </span>
                              <p>
                                Our team includes a licensed psychologist with
                                years of experience in{" "}
                                <span className="font-bold">
                                  clinical counseling, trauma care
                                </span>
                                , and{" "}
                                <span className="font-bold">
                                  stress management
                                </span>
                                . You’ll receive professional, compassionate
                                support tailored to your unique needs.
                              </p>
                            </li>
                            <li>
                              <span className="font-bold">
                                Holistic Approach to Wellness
                              </span>
                              <p>
                                We believe in treating the whole person. Beyond
                                individual counseling, we integrate psychosocial
                                support with our health services, such as{" "}
                                <span className="font-bold">
                                  HIV care, STI treatment, and economic
                                  empowerment programs
                                </span>
                                , to promote complete well-being.
                              </p>
                            </li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Common Issues We Address */}
                        <li>
                          <h4 className="h4-text text-accent/70">
                            Common Issues We Address
                          </h4>
                          <ol className="list-disc body-text list-inside flex flex-col pt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <li>Anxiety, depression, and stress management.</li>
                            <li>
                              Coping with chronic illness and health-related
                              anxiety.
                            </li>
                            <li>Addiction counseling</li>
                            <li>Trauma and grief counseling.</li>
                            <li>
                              Relationship challenges and identity issues.
                            </li>
                            <li>Building self-esteem and personal growth.</li>
                          </ol>
                        </li>
                        <Divider />

                        {/* Book Your Session Today */}
                        <h3 className="h3-text text-accent">
                          Book Your Session Today
                        </h3>
                        <p className="body-text">
                          Your mental health is just as important as your
                          physical health. Whether you need someone to talk to,
                          tools to manage daily stress, or ongoing support, our
                          psychologist is here to help.
                        </p>
                        <p className="body-text font-bold text-center">
                          Ready to take the next step? Schedule a session with
                          our psychologist today!
                        </p>
                      </ol>
                    </div>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Integrated and Intersectional Health Promotion and Access End */}


      {/* Start Strategic Advocacy and Justice */}
      <section className="bg-light flex flex-col gap-4 justify-center p-4 lg:px-[6%]">
        {/* Program Heading */}
        <h2 className="h2-text font-bold text-center text-secondary/70">
          {programData.pillars[1].title}
        </h2>
        {/* Heading and Overview with highlight */}
        <div className="flex flex-col gap-2 items-center shadow-custom-shadow rounded-2xl p-4 xs:px-5 md:mb-4 xl:mb-8 ">
          <div className="relative w-full flex flex-col items-center gap-4 pt-2">
            <img
              src={AdvocacyImg}
              alt="Advocacy image"
              className="w-2/3 rounded-2xl sm:h-[90%] sm:absolute sm:top-0 sm:z-0 sm:opacity-20"
            />
            <div className="sm:z-10">
              {bundleTextIntoParagraphs(
                programData.pillars[1].description,
                4
              ).map((para, index) => (
                <p key={index} className="body-text text-justify">
                  {para}
                  <br />
                  <br />
                </p>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div className="w-full sm:w-[70%] lg:w-[60%] ">
            <Swiper
              modules={[EffectCoverflow, SlidePagination, Autoplay]}
              effect={"coverflow"}
              centeredSlides={true}
              grabCursor={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop
              spaceBetween={40}
              slidesPerView={"auto"}
              className="w-full sm:w-[100%] py-2 "
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
                          className="h-auto object-cover sm:w-[70%] "
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>

          {/* Porgram Highlight */}
          {
            <p className="body-text italic text-center">
              {programData.pillars[1].highlights}
            </p>
          }
        </div>
      </section>
      {/* Strategic Advocacy and Justice End */}



      {/* Start of Improved Quality and Sustainable Livelihoods */}
      <section className="p-4 lg:px-[6%] md:pl-0 bg-image6 min-h-screen bg-fixed bg-cover bg-no-repeat bg-center">
        {/* Program Heading */}
        <h2 className="h2-text text-secondary/70 text-center">
          {programData.pillars[2].title}
        </h2>

        {/* Description Focus Areas and Highlight of the Program */}
        <div className="flex flex-col items-center rounded-2xl bg-white/70 backdrop-blur- p-4 xs:px-5 md:mb-4 md:rounded-tr-2xl md:rounded-br-2xl lg:px-8 xl:mb-8 ">
          <div className="relative w-full flex flex-col items-center gap-4 pt-2">
            {/* Description of the Program */}
            <div className="text-justify body-text">
              {bundleTextIntoParagraphs(programData.pillars[2].description).map(
                (para, index) => (
                  <p>
                    {para}
                    <br />
                    <br />
                  </p>
                )
              )}
            </div>

            {/* Program Image and Focus Areas */}
            <div className="w-full flex flex-col items-center sm:flex-row justify-center">
              {/* Program Image */}
              <img
                src={SustainableLivelihoodImg}
                alt="Advocacy image"
                className="w-2/3 rounded-2xl sm:hidden animate-fadeIn"
              />

              {/* Focus Areas */}
              <div className="w-full sm:w-[70%] lg:w-[60%] ">
                <Swiper
                  modules={[EffectCoverflow, SlidePagination, Autoplay]}
                  effect={"coverflow"}
                  centeredSlides={true}
                  grabCursor={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  loop
                  spaceBetween={40}
                  slidesPerView={"auto"}
                  className="w-full sm:w-[100%] py-2 "
                  autoplay={{ delay: 10000 }}
                  speed={1000}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 10,
                    depth: 700,
                    modifier: 1,
                    slideShadows: true,
                  }}
                >
                  {programData.pillars[2].focusAreasDescription.map(
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
                              src={SustainableLivelihoodImg}
                              alt={area.title}
                              className="h-auto object-cover sm:w-[70%] "
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Improved Quality and Sustainable Livelihood End */}



      <Footer />
    </div>
  );
}

export default Program;
