import React from 'react';
import '../styles/VideoCard.css';

const videoIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 96 960 960"
    width="48"
  >
    <path d="M320 853V293l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" />
  </svg>
);

const VideoCard = ({ index, image, name }) => {
  return (
    <div className="video" style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">{videoIcon}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
