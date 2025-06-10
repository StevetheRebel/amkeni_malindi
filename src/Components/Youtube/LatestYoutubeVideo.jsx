import React, { useEffect, useState } from "react";

function LatestYoutubeVideo() {
  const [videoId, setVideoId] = useState(null);

  const API_KEY = "AIzaSyCGZfw9Nk2Mfd17Q2D6L1jEcyF0xhavKc0";
  const CHANNEL_ID = "UCLO0qkgaXpQ9QK3WFM5S4zQ";
  const maxResults = 1;

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&part=snippet&type=video&maxResults=${maxResults}`
        );
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error(`Error fetching Youtube video`, error);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <>
      {videoId ? (
        <iframe
          src={`https://youtube.com/embed/${videoId}`}
          title="Latest Youtube video"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default LatestYoutubeVideo;
