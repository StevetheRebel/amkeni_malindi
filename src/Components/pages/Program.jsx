import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Box, Divider, Modal } from "@mui/material";
import condomguide from "./../../../public/Condom Pamphlet.pdf";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "border-radius": "24px",
};

function Program() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

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

  const handleDownload = () => {
    const link = document.createElement("a");
    (link.href = "./../../../public/Condom Pamphlet.pdf"),
      (link.download = "Condom Pamphlet.pdf");
    link.click();
  };

  return (
    <div className="relative h-auto top-[154px] xs:top-[160px] sm:top-36 ">
      <section className="relative flex flex-col gap-4 px-4 sm:px-4  lg:px-[6%]">
        <h1 className="h1-text capitalize text-center text-secondary">
          our programs
        </h1>

        {/* Healthcare Promotion & Service Delivery Start */}
        <div className="flex flex-col items-center">
          <h2 className="h2-text text-secondary/70 text-center">
            Healthcare Promotion & Service Delivery
          </h2>
          <p className="body-text py-4 text-justify sm:text-center ">
            Our <span className="font-bold">HIV Testing Services (HTS)</span>{" "}
            process is designed to provide high-quality, confidential, and
            client-centered care. It begins with{" "}
            <span className="font-bold">pre-test counseling</span>, where
            informed consent is obtained, and clients are prepared for possible
            outcomes. The <span className="font-bold">testing phase</span>{" "}
            follows, using WHO-approved rapid diagnostic tests conducted by
            trained professionals. After testing,{" "}
            <span className="font-bold">post-test counseling</span> is offered
            to ensure emotional support and guidance, whether the results are
            negative or positive. For those who test positive, immediate{" "}
            <span className="font-bold">linkage to care</span> is provided,
            including access to antiretroviral therapy (ART) and psychosocial
            support. Our compassionate and skilled team ensures a respectful,
            stigma-free experience for everyone.
          </p>
          <p className="body-text py-4 text-justify sm:text-center">
            Ready to take charge of your health? Our{" "}
            <span className="font-bold">HIV Testing Services (HTS)</span>{" "}
            process is designed with your comfort and confidentiality in mind.
            We’ve outlined each step—from pre-test counseling to linkage to
            care—so you know exactly what to expect. Whether you're seeking
            peace of mind or proactive health management, our skilled
            practitioners are here to guide you every step of the way.{" "}
          </p>
          <p className="font-bold body-text py-4 text-center">
            Check out the detailed steps below and visit us today to get started
            on your journey to better health!
          </p>{" "}
          <button className="py-2 px-4 bg-primary/50 rounded-full body-text hover:bg-primary">
            Book an Appointment
          </button>
          <div className="flex flex-col gap-4 items-center justify-center py-4 sm:flex-row flex-wrap lg:gap-6 2xl:gap-4 ">

            {/* HIV Testing Services */}
            <div className="w-[80%] aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 px-2 sm:justify-between sm:py-4 sm:px-0 sm:max-w-44 lg:py-6 lg:max-w-60 lg:px-2 xl:max-w-72 xl:px-4 2xl:max-w-80">
              <h4 className="h4-text text-center">HIV Testing Services</h4>
              <button
                className="p-2 body-text bg-primary rounded-full"
                onClick={handleOpen}
              >
                Read More
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="2xl:px-10">
                    <ol className="list-decimal body-text list-outside flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
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
                            <span className="font-bold">Informed Consent</span>:
                            Explain the purpose, process, benefits, and
                            implications of HIV testing. Obtain verbal or
                            written consent.
                          </li>
                          <li>
                            <span className="font-bold">Risk Assessment</span>:
                            Discuss the client's potential risk behaviors and
                            exposure history.
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
                            <span className="font-bold">Selection of Test</span>
                            : Use a WHO-approved testing algorithm, typically
                            involving rapid diagnostic tests (RDTs) or
                            laboratory-based methods.
                          </li>
                          <li>
                            <span className="font-bold">Sample Collection</span>
                            : Collect blood (finger prick or venous) or oral
                            fluid, depending on the test type.
                          </li>
                          <li>
                            <span className="font-bold">Conduct the Test</span>:
                            Perform the test to the manufacturer's instructions,
                            maintaining quality assurance procedures.
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
                                (Pre-Exposure Prophylaxis), and regular testing.
                              </li>
                              <li>
                                <span className="font-bold">
                                  Encourage Healthy Practices
                                </span>
                                : Promote a healthy lifestyle and strategies to
                                remain negative.
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
                                : Allow the client time to process the results;
                                provide empathetic and supportive counseling.
                              </li>
                              <li>
                                <span className="font-bold">
                                  Immediate Next Steps
                                </span>
                                : Explain confirmatory testing (if required) and
                                linkage to care.
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
                            : Confirm that the client is connected to necessary
                            health and support services.
                          </li>
                          <li>
                            <span className="font-bold">Follow-Up</span>:
                            Arrange follow-up visits for additional counseling,
                            treatment, or preventive services as needed.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </Box>
              </Modal>
            </div>

            {/* STI Screening and Treatment */}
            <div className="w-[80%] aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 px-2 sm:justify-between sm:py-4 sm:px-0 sm:max-w-44 lg:py-6 lg:max-w-60 lg:px-2 xl:max-w-72 xl:px-4 2xl:max-w-80">
              <h4 className="h4-text text-center">STI Screening & Treatment</h4>
              <button
                className="p-2 body-text bg-primary rounded-full"
                onClick={handleOpen1}
              >
                Read More
              </button>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 2xl:px-10">
                    <h3 className="h3-text text-accent text-center">
                      Why Choose Our Services?
                    </h3>
                    <ol className="list-decimal body-text list-outside flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                      {/* Gender and Sexual Diverse Friendly */}
                      <li>
                        <h4 className="h4-text">
                          Gender and Sexual Diverse (GSD) Friendly
                        </h4>
                        <ul className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                          <li>
                            We understand the unique healthcare needs of gnder
                            and sexually diverse individuals, including LGBTQIA+
                            communities.
                          </li>
                          <li>
                            Our facility creates a{" "}
                            <span className="font-bold">
                              safe and non-judgemental space
                            </span>{" "}
                            where you can access services without fear of stigma
                            or discrimination.
                          </li>
                          <li>
                            Staff undergo regular{" "}
                            <span className="font-bold">
                              sensitivity training
                            </span>{" "}
                            to ensure respectful interactions with all clients.
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
                            , including physicians, nurses, and counselors, with
                            expertise in sexual and reproductive health.
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
                        <h4 className="h4-text">Comprehensive STI Screening</h4>
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
                            , ensuring your privacy is maintained at every step.
                          </li>
                        </ol>
                      </li>
                      <Divider />

                      {/* Same Day or Prompt Results */}
                      <li>
                        <h4 className="h4-text">Same Day or Prompt Results</h4>
                        <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                          <li>
                            Many of our tests provide{" "}
                            <span className="font-bold">same-day results</span>,
                            minimizing anxiety and enabling quick follow-up
                            care.
                          </li>
                          <li>
                            In cases requiring laboratory analysis, results are
                            delivered promptly, with clear communication about
                            next steps.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                </Box>
              </Modal>
            </div>

            {/* Condom and Lubrican Distribution */}
            <div className="w-[80%] aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 px-2 sm:justify-between sm:py-4 sm:px-0 sm:max-w-44 lg:py-6 lg:max-w-60 lg:px-2 xl:max-w-72 xl:px-4 2xl:max-w-80">
              <h4 className="h4-text text-center">
                Commodity Distribution & Education
              </h4>
              <button
                className="p-2 body-text bg-primary rounded-full"
                onClick={handleOpen2}
              >
                Read More
              </button>
              <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="2xl:px-10">
                    <h3 className="h3-text text-accent">
                      {" "}
                      Explore Our Condom & Lubricant Section
                    </h3>
                    <p className="py-4 body-text">
                      Your sexual health matters, and we're here to help you
                      make every experience safe, comfortable, and enjoyable! As
                      you scroll through this section, you'll find everything
                      you need to know about the{" "}
                      <span className="font-bold">condoms and lubricants</span>{" "}
                      we offer because safer sex starts with the right tools.
                    </p>
                    <Divider />
                    <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
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
                            and reduce discomfort, making your experience safer
                            and more enjoyable.
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
                          <span>downloadable guide</span> on proper condom use,
                          so you'll always know what to do, step by step.
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
                        <h4 className="h4-text text-accent/70">Free & Easy Access</h4>
                        <p className="body-text">Good news! Our condoms and lubricants are available for <span className="font-bold">free</span>. Just drop by our facility or reach out, and we'll provide them with complete privacy and discretion. No judgement, just support. </p>
                        <br />
                        <p className="body-text">Safe sex should be accessible to everyone.</p>
                      </li>
                      <Divider />

                      {/* Stay in the Know */}
                      <li>
                        <h4 className="h4-text text-accent/70">Stay in the Know</h4>
                        <p className="body-text">Explore more of our website to find related services, including:</p>
                        <ol className="list-disc list-inside text-pretty body-text flex flex-col gap-1 md:gap-2 md:pt-1 lg:gap-3 xl:gap-4 2xl:gap-5">
                          <li>STI Screening and Treatment</li>
                          <li>HIV Testing Services</li>
                          <li>Counseling and Support</li>
                        </ol>
                      </li>
                      <Divider />

                      {/* Ready to Stock Up */}
                      <li>
                        <h4 className="h4-text text-accent/70">Ready to Stock Up?</h4>
                        <p className="body-text">Swing by our facility today or contact us for more information. Whether you're here for a few essentials or just browsing, we're happy to help you stay safe while enjoying life to the fullest.</p>
                        <br />
                        <p className="body-text">Keep scrolling, keep exploring, and remember: <span>safe is sexy!</span></p>
                      </li>
                    </ol>
                  </div>
                </Box>
              </Modal>
            </div>

            {/* PrEP and PEP */}
            <div className="w-[80%] aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 px-2 sm:justify-between sm:py-4 sm:px-0 sm:max-w-44 lg:py-6 lg:max-w-60 lg:px-2 xl:max-w-72 xl:px-4 2xl:max-w-80">
              <h4 className="h4-text text-center">PrEP & PEP</h4>
              <button
                className="p-2 body-text bg-primary rounded-full"
                onClick={handleOpen3}
              >
                Read More
              </button>
              <Modal
                open={open3}
                onClose={handleClose3}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="2xl:px-10">
                    <h3 className="h3-text text-accent">Discover Our PrEP & PEP Services</h3>
                    <p className="py-2 body-text">Whether you're thinking ahead or responding to a recent risk, we’re here to help you stay protected. Our <span className="font-bold">PrEP</span> (Pre-Exposure Prophylaxis) and <span className="font-bold">PEP</span> (Post-Exposure Prophylaxis) services are designed to give you peace of mind, empower you to take control of your health, and prevent HIV transmission effectively.</p>
                    <Divider />
                    <ol className="list-decimal body-text list-outside flex flex-col pt-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12" >
                      {/* What is PrEP */}
                      <li>
                        <h4 className="h4-text text-accent/70">What is PrEP?</h4>
                        <p>Think of <span className="font-bold">PrEP</span> as your daily shield. It’s a medication taken <span className="font-bold">before potential exposure to HIV</span>, proven to reduce the risk of transmission by more than 90%.</p>
                        <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                          <li>
                            <span className="font-bold">Who can use it?</span>
                            <p>PrEP is ideal for individuals who:</p>
                            <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5" >
                              <li>Have an HIV-positive Partner.</li>
                              <li>Are sexually active in high-risk settings.</li>
                              <li>Are part of gender and sexually diverse communities seeking added protection.</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-bold">How do I start?</span>
                            <p>Starting PrEP is simple: visit us, get tested, and we’ll guide you through every step, and ongoing support.</p>
                          </li>
                        </ol>
                      </li>
                      <Divider />

                      {/* What is PEP */}
                      <li>
                        <h4 className="h4-text text-accent/70">What is PEP?</h4>
                        <p>Sometimes, life surprises us. <span className="font-bold">PEP</span> is your emergency armor—a medication taken <span className="font-bold">within 72 hours of potential HIV exposure</span> to significantly lower the risk of infection.</p>
                        <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                          <li>
                            <span className="font-bold">Who should take PEP?</span>
                            <p>PEP is recommended if you've:</p>
                            <ol className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                              <li>Had unprotected sex with an unknown or HIV-positive partner.</li>
                              <li>Experienced condom failure during sex.</li>
                              <li>Been exposed to HIV through needle sharing or occupational hazards.</li>
                            </ol>
                          </li>
                          <li>
                            <span className="font-bold">How does it work?</span>
                            <p>After evaluating your risk, our healthcare professionals will initiate PEP, which involves a 28-day course of antiretroviral medications, along with follow-up testing and care.</p>
                          </li>
                        </ol>
                      </li>
                      <Divider />

                      {/* Why choose our PrEP & PEP Services */}
                      <li>
                        <h4 className="h4-text text-accent/70">Why Choose Our PrEP & PEP Services</h4>
                        <ol className="list-lower-alpha list-inside text-pretty body-text flex flex-col gap-2 md:gap-4 md:pt-2 lg:gap-6 xl:gap-8 2xl:gap-10">
                          <li>
                            <span className="font-bold">GSD-Friendly Care</span>
                            <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                              <li>Our services are inclusive and welcoming to <span className="font-bold">gender and sexually diverse individuals</span>, ensuring that everyone feels safe and respected.</li>
                              <li>
                              Our team is trained in providing <span className="font-bold">non-judgmental and compassionate care</span> tailored to your unique needs.
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-bold">Qualified Practitioners</span>
                            <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                              <li>Our healthcare professionals have extensive experience in <span className="font-bold">HIV prevention</span> and will provide personalized advice, monitoring, and support throughout your PrEP or PEP journey.</li>
                            </ul>
                          </li>
                          <li>
                            <span className="font-bold">Affordable and Accessible</span>
                            <ul className="list-disc list-inside text-pretty body-text indent-6 flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                              <li>We believe prevention should be accessible to all. That's why we offer <span className="font-bold">free aceess</span> to PrEP and PEP for eligible individuals.</li>
                              </ul>
                          </li>
                        </ol>
                      </li>
                      <Divider />

                      {/* Your Next Step to Protection */}
                      <h4 className="h4-text text-accent/70">Your Next Step to Protection</h4>
                      <p>Taking charge of your health is easy. Whether you're interested in starting PrEP or need PEP urgently, our doors are open. We ensure complete <span className="font-bold">privacy</span> and offer <span className="font-bold">same-day initiation</span> for PEP to act fast when you need it most.</p>
                      <p className="font-bold text-center">Ready to protect yourself? Visit us today, book an appointment or contact us for more information!</p>
                    </ol>
                  </div>
                </Box>
              </Modal>
            </div>

            {/* ART */}
            <div className="w-[80%] aspect-square bg-muted rounded-2xl flex flex-col items-center justify-center gap-4 px-2 sm:justify-between sm:py-4 sm:px-0 sm:max-w-44 lg:py-6 lg:max-w-60 lg:px-2 xl:max-w-72 xl:px-4 2xl:max-w-80">
              <h4 className="h4-text text-center">ART</h4>
              <button
                className="p-2 body-text bg-primary rounded-full"
                onClick={handleOpen4}
              >
                Read More
              </button>
              <Modal
                open={open4}
                onClose={handleClose4}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div></div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        {/* Healthcare Promotion & Service Delivery End */}
      </section>
      <Footer />
    </div>
  );
}

const DownloadButton = () => {
  return (
    <a
      href="./../../../public/Condom Pamphlet.pdf"
      download="Condom Pamphlet.pdf"
      className="bg-primary/50 mt-4 px-4 py-2 rounded-full hover:bg-primary body-text"
    >
      Download Guide
    </a>
  );
};

export default Program;
