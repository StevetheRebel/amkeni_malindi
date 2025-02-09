import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import { truncateByWords } from "../../truncateByWords";
import axios from "axios";
import DOMPurify from "dompurify";
import pic1 from "./../../assets/Office Pics/Office1.webp";
import he from "he";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { useForm } from "react-hook-form";
import OrgLogo from "./../../assets/Amkeni Brand.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import 'animate.css'

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [allposts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [comments, setComments] = useState([]);
  const page = window.location.href;

  // Fetch the specific blog post
  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the current post
        const response = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/amkenimalindi.wordpress.com/posts/${postId}`
        );
        setPost(response.data);

        const allPostsResponse = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/amkenimalindi.wordpress.com/posts"
        );
        setAllPosts(allPostsResponse.data.posts);

        const allCommentsRes = await axios.get(
          `https://public-api.wordpress.com/rest/v1.1/sites/145259521/posts/${postId}/replies/`
        );
        setComments(allCommentsRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        if (error.response && error.response.status === 404) {
          setError("The requested blog post was not found.");
        } else {
          setError("Failed to load the blog post. Please try again later.");
        }
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const scrollWithOffset = (el) => {
    const yOffset = -130;
    const yPosition =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-gray-300 h-dvh">
        <div className="w-[100px] h-[100px] border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center flex-col bg-gray-300 h-dvh md:flex-row ">
        <p className="text-red-500">{error}</p>
        <button
          className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black mt-4"
          onClick={() => navigate("/news-blog")}
        >
          Go Back to Blog
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center bg-gray-300 h-dvh">
        <p className="text-red-500">Post not found.</p>
      </div>
    );
  }

  const downloadLinks = Array.from(document.querySelectorAll("a")).filter(
    (a) => a.textContent.trim() === "Download"
  );

  if (downloadLinks.length > 0) {
    const lastDownloadLink = downloadLinks[downloadLinks.length - 1];
    lastDownloadLink.style.backgroundColor = "RGBA(132,202,234,0.7)";
    lastDownloadLink.style.paddingBlock = "0.25rem";
    lastDownloadLink.style.paddingInline = "0.5rem";
    lastDownloadLink.style.borderRadius = "12px";
    lastDownloadLink.style.margin = "0.5rem";
  }

  const cleanContent = (html) => {
    return html
      .replace(/<p>\s*<\/p>/g, "") // Remove empty paragraphs
      .replace(/<br\s*\/?>/g, "") // Remove unnecessary line breaks
      .replace(/style="[^"]*"/g, ""); // Remove inline styles
  };

  // Get the header image URL
  const firstAttachmentKey = Object.keys(post.attachments || {})[0];
  const imageUrl = post.attachments?.[firstAttachmentKey]?.URL || pic1; // Fallback image

  return (
    <div className="relative select-none ">
      {/* Blog container */}
      <section className="flex flex-col gap-4">
        {/* Header image container */}
        <div className=" h-[380px] relative xs:h-[320px] sm:h-[230px] md:h-[400px] 2xl:h-[500px] bg-muted ">
          <LazyLoadImage
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover absolute brightness-[.4]"
            onError={(e) => (e.target.src = pic1)}
          />
          <div className="absolute px-2 h-full flex flex-col justify-between py-6 z-10 md:px-6 lg:px-[6%]">
            <h1 className="h1-text text-white text-center sm:px-10">
              {he.decode(post.title)}
            </h1>
            <p className="body-text text-white h-1/3 flex items-end pb-2">{`Date: ${new Date(
              post.date
            ).toLocaleDateString()} Time: ${new Date(
              post.date
            ).toLocaleTimeString()}`}</p>

            {/* Navigation Options */}
            <div className="flex gap-12 justify-start xl:gap-28">
              <button
                className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <HashLink
                smooth
                to={"/news-blog#blogSpot"}
                scroll={scrollWithOffset}
                className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black"
              >
                News & Blog
              </HashLink>
            </div>
          </div>
        </div>

        {/* Content container */}
        <div className="px-4 lg:px-[6%] mb-2">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                cleanContent(he.decode(post.content)),
                {
                  ALLOWED_TAGS: [
                    "p",
                    "b",
                    "i",
                    "em",
                    "img",
                    "strong",
                    "ul",
                    "ol",
                    "li",
                    "blockquote",
                    "a",
                    "br",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                  ],
                  ALLOWED_ATTR: [
                    "href",
                    "target",
                    "rel",
                    "src",
                    "alt",
                    "width",
                    "height",
                  ],
                }
              ),
            }}
          />
        </div>

        {/* Post Tags */}
        {post.tags && Object.keys(post.tags).length > 0 && (
          <div className="px-4 lg:px-[6%]">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <h5 className="h5-text tracking-widest">Post Tags</h5>
              <div className="w-12 h-0 border border-black/30"></div>
              {Object.keys(post.tags).map((tag, index) => (
                <div key={index}>
                  <p className="border border-black/60 px-2 font-button-links uppercase tracking-widest">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* About the Author */}
      <section className="py-4 px-4 lg:px-[6%] flex gap-4 md:gap-8 xl:gap-12 ">
        <div className="w-16 h-16 border border-black/30 rounded-full overflow-hidden">
          <img src={OrgLogo} alt="Organization Logo" className="" />
        </div>
        <div className="w-[80%]">
          <h5 className="h5-text tracking-wider ">Amkeni Organization</h5>
          <p className="body-text text-pretty">
            Founded in November 2009 as a support group for MSM/MSW and
            officially registered as a Community-Based Organization (CBO) in
            March 2013. AMKENI has grown into a beacon of hope and empowerment.
            Headquartered in Malindi, Kilifi County, Kenya, we are dedicated to
            creating safe spaces and providing essential services for Gender and
            Sexual Diverse populations and Sex Workers.
          </p>
          {isExpanded && (
            <>
              <p className="body-text text-pretty">
                <br /> Our mission is simple yet powerful - ensuring access to
                affordable social, legal, and health services, including
                psychosocial and mental health support. At AMKENI, we belive in
                dignity, inclusion, and the right to thrive. <br />
              </p>
              <p className="body-text text-pretty">
                <br /> Join us as we continue building a future where everyone
                has access to the support they deserve.
              </p>
            </>
          )}
          <button
            className="font-button-links text-secondary/70"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </section>

      {/* Social Media Share Container */}
      <section className="py-2 px-4 lg:px-[6%] flex gap-2 items-center md:gap-4 lg:gap-6 ">
        <h4 className="h4-text text-secondary flex items-center ">Share</h4>
        <div className="border w-4 h-0 border-black/40 xs:w-8 md:w-12 2xl:border-2 2xl:w-16 "></div>
        <div className="flex gap-2 py-1 items-start lg:gap-4">
          {/* Facebook Share Icon */}
          <div className="flex items-center xl:items-end h-full ">
            <FacebookShareButton url={page} className="text-black bg-blue-500">
              <FacebookIcon className="rounded-full" size={36} />
            </FacebookShareButton>
          </div>

          {/* X Share Icon */}
          <div className="flex items-center xl:items-end h-full ">
            <TwitterShareButton url={page}>
              <XIcon className="rounded-full" size={36} />
            </TwitterShareButton>
          </div>

          {/* Email Share Icon */}
          <div className="flex items-center xl:items-end h-full ">
            <EmailShareButton url={page}>
              <EmailIcon className="rounded-full" size={36} />
            </EmailShareButton>
          </div>

          {/* LinkedIn ShareIcon */}
          <div className="flex items-center xl:items-end h-full ">
            <LinkedinShareButton url={page}>
              <LinkedinIcon className="rounded-full" size={36} />
            </LinkedinShareButton>
          </div>

          {/* Whatsapp Share Icon */}
          <div className="flex items-center xl:items-end h-full ">
            <WhatsappShareButton url={page}>
              <WhatsappIcon className="rounded-full" size={36} />
            </WhatsappShareButton>
          </div>
        </div>
      </section>

      {/* Comment Container */}
      {comments.found > 0 && (
        <section className="px-4 lg:px-[6%] ">
          <h3 className="h3-text text-secondary">
            {`${comments.found}`} {comments.found > 1 ? "Comments" : "Comment"}
          </h3>
          {comments.comments.map((comment, index) => {
            console.log(comment.author.avatar_URL);
            return (
              <CommentContainer
                key={index}
                imageLink={comment.author.avatar_URL}
                name={comment.author.name}
                detail={comment}
                dateString={comment.date}
              />
            );
          })}
        </section>
      )}

      {/* Comment Input */}
      <section className="px-4 lg:px-[6%] ">
        <h4 className="h4-text text-muted">Leave a Comment</h4>
        <CommentInputcontainer />
      </section>

      {/* Related Posts */}
      <div className="px-4 lg:px-[6%] mb-4">
        <h3 className="h3-text text-secondary">Related Posts</h3>
        <ul className="flex flex-col gap-4 md:gap-8 xl:grid xl:gap-x-4 xl:grid-cols-2">
          {allposts
            .filter((p) => p.ID !== post.ID) // Exclude the current post
            .sort(() => Math.random() - 0.5) // Randomize the order
            .slice(0, 4) // Limit to 4 posts
            .map((relatedItem) => {
              const relatedImageUrl =
                relatedItem.attachments?.[
                  Object.keys(relatedItem.attachments || {})[0]
                ]?.URL || pic1; // Fallback image
              const cleanedDetails = he.decode(
                relatedItem.content.replace(/<[^>]+>/g, "")
              );

              return (
                <Relatedpost
                  key={relatedItem.ID}
                  image={relatedImageUrl}
                  title={truncateByWords(relatedItem.title, 6)}
                  date={relatedItem.date}
                  time={relatedItem.date} // Use date for time if no separate time field
                  detail={truncateByWords(cleanedDetails, 10)}
                  nav={relatedItem.ID}
                />
              );
            })}
        </ul>
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />

      <div>
        <Footer />
      </div>
    </div>
  );
};

// Related Post Component
const Relatedpost = ({ image, title, date, time, detail, nav }) => {
  const navigate = useNavigate();

  return (
    <>
      <li className="flex flex-col gap-2 w-full rounded-2xl overflow-hidden bg-muted/10 hover:bg-primary/10 group md:flex-row md:h-60 xl:h-auto 2xl:h-[450px]">
        {/* Image Container */}
        <div className="w-full h-28 xs:h-32 md:h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0"
            onError={(e) => (e.target.src = pic1)}
          />
        </div>

        {/* Content Container */}
        <div className="w-full h-full flex flex-col gap-2 px-2 pb-4 md:justify-between md:p-4">
          <h4 className="h4-text">{he.decode(title)}</h4>
          <p className="text-sm">{`Date: ${new Date(
            date
          ).toLocaleDateString()} Time: ${new Date(
            time
          ).toLocaleTimeString()}`}</p>
          <p className="body-text hidden xl:block">{detail}</p>
          <button
            className="button-type button-text bg-primary/70 hover:bg-primary hover:text-black self-end"
            onClick={() => navigate(`/blog/${nav}`)}
          >
            Read More
          </button>
        </div>
      </li>
    </>
  );
};

// Comment Container
const CommentContainer = ({ name, detail, dateString, imageLink }) => {
  const cleanContent = (html) => {
    return html
      .replace(/<p>\s*<\/p>/g, "") // Remove empty paragraphs
      .replace(/<br\s*\/?>/g, "") // Remove unnecessary line breaks
      .replace(/style="[^"]*"/g, ""); // Remove inline styles
  };

  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <div className="flex w-full p-2 justify-between md:w-[80%] md:justify-start md:gap-8 xl:gap-10 xl:w-[70%] ">
        {/* Commentor image container */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-black mt-3 lg:w-24 lg:h-24">
          <img
            src={imageLink}
            alt="profile"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Content image container */}
        <div className="w-[70%]">
          {/* Commentor's name */}
          <h5 className="h5-text font-bold tracking-wider">{name}</h5>

          {/* Time of comment publication and reply button */}
          <div className="flex gap-4">
            <p className="body-text tracking-wider">
              {`${formattedDate} @ ${formattedTime}`}
            </p>
            <p className="body-text font-bold text-blue-900 hover:text-primary active:text-secondary uppercase">
              reply
            </p>
          </div>

          {/* Comment */}
          <div className="pt-2 text-pretty">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  cleanContent(he.decode(detail.content)),
                  {
                    ALLOWED_TAGS: ["p"],
                    ALLOWED_ATTR: [],
                  }
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Comment Reply Container
const CommentReplyContainer = () => {
  return <></>;
};

// Comment Input Container
const CommentInputcontainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log("data:", data);
    reset();
  };

  return (
    <>
      <form
        action=""
        name="commentInput"
        id="commentInput"
        autoComplete="yes"
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
        className="md:w-[65%] xl:w-[50%] "
      >
        <fieldset className="border-b-2 border-black">
          <input
            type="text"
            name="name"
            id="name"
            className="pb-4 pt-2 body-text w-full focus:outline-none focus:border-none "
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-secondary text-[10px] xs:text-sm lg:text-base ">
              {errors.name.message}
            </p>
          )}
        </fieldset>
        <fieldset className="border-b-2 border-black">
          <input
            type="email"
            name="email"
            id="email"
            className="pb-4 pt-2 body-text w-full focus:outline-none focus:border-none "
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid Email Address",
              },
            })}
          />
          {errors.email && (
            <p className="text-secondary text-[10px] xs:text-sm lg:text-base ">
              {errors.email.message}
            </p>
          )}
        </fieldset>
        <fieldset className="border-b-2 border-black">
          <textarea
            name="commentMsg"
            id="commentMsg"
            className="pb-4 pt-2 body-text w-full focus:outline-none focus:border-none "
            placeholder="Your Comment..."
            rows={8}
            {...register("commentMsg", {
              required: "Add Comment",
            })}
          ></textarea>
          {errors.commentMsg && (
            <p className="text-secondary text-[10px] xs:text-sm lg:text-base">
              {errors.commentMsg.message}
            </p>
          )}
        </fieldset>
        <button
          type="submit"
          className="py-2 text-center tracking-widest bg-muted text-white w-full uppercase font-button-links hover:bg-black"
        >
          submit
        </button>
      </form>
    </>
  );
};

// Scroll To Top Button Component 
const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // UseEffect for scroll button
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Condition to display scroll button
      if (scrollPosition > windowHeight * 0.75) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {
      showScrollButton && (
        <button onClick={scrollToTop} className="w-10 aspect-square fixed z-50 bottom-[70px] text-xl right-4 rounded-full overflow-hidden flex items-center justify-center bg-primary/40 group hover:bg-primary md:w-16 md:bottom-[50px] 2xl:right-12 animate__animated animate__bounce animate__infinite hover:[animation-play-state:paused] ">
          <FontAwesomeIcon icon={faChevronUp} className="opacity-20 group-hover:opacity-100 body-text" />
        </button>
      )
    }
    </div>
  )

}

export default BlogPost;
