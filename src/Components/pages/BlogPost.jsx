import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bundleTextIntoParagraphs } from "../../bundleTextIntroParagraphs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import { truncateByWords } from "../../truncateByWords";
import axios from "axios";
import DOMPurify from "dompurify";
import pic1 from "./../../assets/Office Pics/Office1.webp";
import he from "he";

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [allposts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(post);

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
      <div className="flex items-center justify-center bg-gray-300 h-dvh">
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
    <div className="relative ">
      {/* Blog container */}
      <div className="flex flex-col gap-4">
        {/* Header image container */}
        <div className=" h-[380px] relative xs:h-[280px] sm:h-[100px] md:h-[400px] 2xl:h-[500px] bg-muted ">
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
        <div className="px-4 lg:px-[6%]">
          <div
            className="px-4 lg:px-[6%] blog-content"
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
      </div>

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
                const cleanedDetails = he.decode(relatedItem.content.replace(/<[^>]+>/g, ""));

              return (
                <Relatedpost
                  key={relatedItem.ID}
                  image={relatedImageUrl}
                  title={relatedItem.title}
                  date={relatedItem.date}
                  time={relatedItem.date} // Use date for time if no separate time field
                  detail={truncateByWords(cleanedDetails, 10)}
                  nav={relatedItem.ID}
                />
              );
            })}
        </ul>
      </div>

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
          <p className="body-text">{detail}</p>
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

export default BlogPost;
