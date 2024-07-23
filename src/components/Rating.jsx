import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const renderStar = (index) => {
    const fullStarThreshold = index + 1;
    const halfStarThreshold = index + 0.5;
    
    if (rating >= fullStarThreshold) {
      return <FaStar key={index} color="gold" size={24} />;
    } else if (rating >= halfStarThreshold) {
      return <FaStarHalfAlt key={index} color="gold" size={24} />;
    } else {
      return <FaRegStar key={index} color="gold" size={24} />;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(5)].map((_, index) => renderStar(index))} &nbsp; {rating}/5
    </div>
  );
};

export default Rating;