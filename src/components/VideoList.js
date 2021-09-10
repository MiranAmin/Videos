import React from "react";
import VideoItem from "./VideoItem";
//destructuring the props param so that we use videos instead of props.videos all the time
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <div>
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </div>
    );
  });

  return (
    <div className="ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
