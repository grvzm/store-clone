import React from 'react';
import VideoCard from './VideoCard.js';
import '../styles/Videos.css';

const Videos = ({ video }) => {
  return (
    <div className="videos">
      {video.map((item, index) => (
        <VideoCard
          key={item.image}
          index={index}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Videos;
