import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WpPostsContext = createContext();

export const WpPostsProvider = ({ children }) => {
  const [wpPosts, setWpPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetchingComplete, setIsFetchingComplete] = useState(false);

  const fetchAllPosts = async (page = 1, accumulatedPosts = []) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://public-api.wordpress.com/rest/v1.1/sites/amkenimalindi.wordpress.com/posts",
        {
          params: {
            page: page,
            number: 20,
          },
        }
      );

      const newPosts = response.data.posts;
      const allPosts = [...accumulatedPosts, ...newPosts];

      if (newPosts.length < 20) {
        setWpPosts(allPosts);
        setIsFetchingComplete(true);
        setLoading(false);
        return;
      }

      await fetchAllPosts(page + 1, allPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isFetchingComplete) {
      fetchAllPosts();
    }
  }, []);

  return (
    <WpPostsContext.Provider value={{ wpPosts, loading, isFetchingComplete }}>
      {children}
    </WpPostsContext.Provider>
  );
};

export const useWpPosts = () => useContext(WpPostsContext);
