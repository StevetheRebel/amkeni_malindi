import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import staff from "./../../assets/Our Staff.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile1 from "./../../assets/Profiles/Profile1.webp";
import profile2 from "./../../assets/Profiles/Profile2.webp";
import profile3 from "./../../assets/Profiles/Profile3.webp";
import profile4 from "./../../assets/Profiles/Profile4.webp";
import profile5 from "./../../assets/Profiles/Profile5.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const aboutData = [
  {
    title: "our vision",
    description: "An Empowered, Just and Inclusive Society",
  },
  {
    title: "our mission",
    description:
      "To improve the quality of life of sexual and gender diverse communities through an integrated approach to health service provision, social and economic empowerment, knowledge generation and strategic advocacy.",
  },
  {
    title: "our values",
    description:
      "ACCOUNTABILITY, EXCELLENCE, NON-DISCRIMINATION & GENDER-MAINSTREAM",
  },
];

function About() {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-auto top-[154px] xs:top-[160px] sm:top-36 ">
      {/* Mission, Vision and Our Values */}
      <section className="flex flex-col gap-6 p-4 md:gap-12 md:py-8 md:px-14 lg:px-20 xl:px-28 2xl:gap-24 2xl:py-20 ">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 "
          >
            <h1 className="h1-text capitalize text-center text-secondary">{item.title}</h1>
            <p className="text-center body-text ">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Our History */}
      <section className="pt-8 px-4 flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
        <h1 className="h1-text capitalize text-center text-secondary ">our history</h1>
        <p className="font-bodyText text-justify sm:text-center md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">
          Amkeni Malindi began in 2009 as a small support group dedicated to
          creating a safe space for men who have sex with men in Malindi, Kilifi
          County. What started as a community gathering soon blossomed into a
          powerful movement with a mission to advocate for the rights and health
          of LGBT individuals in the region. In 2010, a partnership with KEMRI
          enabled Amkeni to offer a secure environment for community meetings,
          expanding our reach and deepening our commitment to providing
          comprehensive services. Through peer education, we began actively
          championing human rights and addressing critical issues affecting the
          LGBT community across Kilifi County. <br /> <br /> Over the years, our
          network of partnerships has grown, enabling us to offer even greater
          support and resources. Collaborations with the Kenya Red Cross led to
          the establishment of our Drop-In Center for Education (DICE), while
          our strategic alliance with UHAI developed a roadmap for progress
          outlined in our 2018-2020 strategic plan. Today, our partnerships span
          national organizations like the Gay and Lesbian Coalition of Kenya
          (GALCK), and intersectional HIV programs with the National AIDS
          Control Council (NACC) and National AIDS and STI Control Program
          (NASCOP). <br /> <br /> With a dedicated office in Kilifi, Amkeni
          operates as a cornerstone of advocacy and support for Kenya’s coastal
          strip, delivering impact through research, partnerships, and a strong
          governance structure led by a diverse board. Guided by values of
          integrity and inclusivity, Amkeni remains resilient in the face of
          changing policies, donor dynamics, and stakeholder needs. As we
          continue to evolve, our commitment is clear: to offer ethical,
          impactful services that enhance the lives of our community members and
          contribute to a fairer, healthier society.
        </p>
      </section>

      {/* Organizational Work */}
      <section className="h-auto my-4 pt-4 flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-6 ">
        <h1 className="h1-text text-center capitalize text-secondary">our work</h1>
        <div className=" mx-4 py-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            speed={500}
            className="h-full rounded-2xl"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <CarouselSlide
                title="Health Promotion & Service Delivery"
                description="At AMKENI Malindi, we are committed to advancing Comprehensive Sexual and Reproductive Health Promotion and Care. Our programs provide essential services, including HIV testing, STI screening, contraception, and mental health support. Through health education and counseling, we empower individuals with the knowledge and resources to make informed decisions about their well-being. By fostering inclusive, accessible healthcare, we build healthier communities and promote the dignity and well-being of all."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselSlide
                title="Community Social & Economic Empowerment"
                description="Empowering communities lies at the heart of our mission. Through peer-led initiatives, mentorship, and capacity-building programs, we enable individuals to unlock their potential and achieve financial independence. Our income-generating activities, vocational training, and linkages to scholarships and opportunities are designed to foster self-reliance and sustainable growth. By collaborating with stakeholders, we ensure holistic support, addressing both personal development and community transformation for a brighter, inclusive future."
              />
            </SwiperSlide>
            <SwiperSlide>
              <CarouselSlide
                title="Research, Advocacy & Policy Reforms"
                description="AMKENI Malindi drives meaningful change through awareness campaigns, strategic partnerships, and evidence-based advocacy. By collaborating with research organizations and human rights advocates, we amplify the voices of LGBTI communities to influence research agendas and shape inclusive policies. Our work challenges stigma and fosters understanding through public engagements, media campaigns, and community education. Together, we champion equitable reforms, ensuring the rights and freedoms of all are upheld."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Organigram */}
      <section className="h-auto my-4 pt-4 flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
        <h1 className="h1-text capitalize text-center mt-4 text-secondary">our structure</h1>
        <div className="px-4">
          <LazyLoadImage
            src={staff}
            alt="our organogram"
            className="w-full"
            placeholder={
              <div className="flex items-center justify-center bg-gray-300 h-full">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            }
          />
        </div>
      </section>

      {/* The Board Team */}
      <section className="py-6 flex flex-col gap-1 md:gap-2 md:px-14 lg:px-20 xl:px-28 lg:gap-3 xl:gap-4 2xl:gap-5 ">
        <h1 className="h1-text capitalize text-center text-secondary">our board</h1>
        <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 ">
          <Card title="Board Chair" name="Nekesa Wandera" image={profile1} />
          <Card title="Board Member" name="Francis Gikera" image={profile5} />
          <Card title="Board Member" name="Shadrack Babu" image={profile5} />
          <Card title="Board Member" name="Kimani Makobu" image={profile5} />
          <Card title="Board Member" name="Kennedy Masinya" image={profile5} />
        </div>
      </section>

      {/* The Staff Team */}
      <section className="py-6 flex flex-col gap-1 md:gap-2 lg:px-20 lg:gap-3 xl:px-28 xl:gap-4 2xl:gap-5">
        <h1 className="h1-text capitalize text-center text-secondary">our staff</h1>
        <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          <Card
            title="Executive Director"
            name="Abdulwahid Hassan"
            image={profile5}
          />
          <Card title="Program Manager" name="Gilbert Asuri" image={profile2} />
          <Card
            title="Finance/HR Manager"
            name="Zebedi Maina"
            image={profile2}
          />
          <Card title="MEARL Officer" name="Anthony Noah" image={profile4} />
          <Card
            title="Clinical Officer"
            name="Fredrick Odongo"
            image={profile5}
          />
          <Card title="Social Worker" name="Grace Mwamburi" image={profile3} />
          <Card title="HTS Officer" name="Muthoni Kinyajui" image={profile1} />
          <Card
            title="Program Coordinator Kilifi"
            name="Naomy Zawadi"
            image={profile3}
          />
          <Card
            title="Program Coordinator Tana River"
            name="Rashid Hamad"
            image={profile2}
          />
          <Card
            title="Admin & Comms Officer"
            name="Steve Okoth"
            image={profile4}
          />
          <Card title="Assistant Finance" name="Nerry Kai" image={profile4} />
          <Card
            title="Assistant MEARL Officer"
            name="Abubakar Bakary"
            image={profile2}
          />
        </div>
      </section>

      {/* The Volunteers Team */}
      <section className="py-6 flex flex-col gap-1 md:gap-2 lg:px-20 lg:gap-3 xl:px-28 xl:gap-4 2xl:gap-5">
        <h1 className="h1-text capitalize text-center text-secondary">our volunteers</h1>
        <div className="flex gap-2 flex-wrap justify-center gap-y-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          <Card
            title="Community Paralegal"
            name="Benjamin Kenga"
            image={profile4}
          />
          <Card
            title="Community Paralegal"
            name="Calvince Ochieng"
            image={profile4}
          />
          <Card
            title="Outreach Worker"
            name="Christopher Baraka"
            image={profile4}
          />
          <Card title="Outreach Worker" name="Doctor Dullu" image={profile4} />
          <Card title="Outreach Worker" name="Fuad Said" image={profile4} />
          <Card
            title="Community Paralegal"
            name="Hilda Natasha"
            image={profile3}
          />
          <Card title="Outreach Worker" name="Jimmy Ruwa" image={profile4} />
          <Card title="Outreach Worker" name="Juma Lwambi" image={profile4} />
          <Card title="Outreach worker" name="Melvin Ogaga" image={profile4} />
          <Card
            title="Community Paralegal"
            name="Salim Furaha"
            image={profile4}
          />
          <Card
            title="Outreach Worker"
            name="Tashley Gitonga"
            image={profile1}
          />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

// Carousel Slides for the Organization Work
function CarouselSlide({ title, description }) {
  return (
    <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-10 ">
      <h2 className="h2-text capitalize text-center text-pretty text-secondary/70 ">{title}</h2>
      <p className="body-text mb-4 pb-4 text-justify sm:px-6 sm:text-center  ">
        {description}
      </p>
    </div>
  );
}

// Cards component for the board, staff and volunteer display
function Card({ title, name, link, image }) {
  return (
    <>
      <div className="relative w-52 flex-wrap gap-4 aspect-[1/1.5] rounded-xl md:w-48 lg:w-52 2xl:w-72 overflow-hidden group ">
        <LazyLoadImage
          src={image}
          alt={`${name} ${title}`}
          className="absolute h-full z-10 group-hover:animate-fadeOut group-hover:z-0"
          placeholder={
            <div className="flex items-center justify-center bg-gray-300 h-full">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          }
        />

        <div className="absolute flex flex-col h-full justify-center opacity-0 gap-10 px-4 group-hover:z-10 group-hover:opacity-100 group-hover:animate-slideIn ">
          <h4 className="h4-text capitalize">{title}</h4>
          <p className="body-text ">{name}</p>
          <a
            href={link}
            className="px-6 py-2 rounded-full self-start bg-primary hover:shadow-innner "
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl " />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
