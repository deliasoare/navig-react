import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating, color, size }) => {
  const renderStar = (index) => {
    const fullStarThreshold = index + 1;
    const halfStarThreshold = index + 0.5;
    
    if (rating >= fullStarThreshold) {
      return <FaStar key={index} color={color} size={size} />;
    } else if (rating >= halfStarThreshold) {
      return <FaStarHalfAlt key={index} color={color} size={size} />;
    } else {
      return <FaRegStar key={index} color={color} size={size} />;
    }
  };

  return (
    <div className="ratingStars">
      <div className="stars">{[...Array(5)].map((_, index) => renderStar(index))} </div>
      <span className="ratingNumber">{rating}/5</span>
     
    </div>
  );
};

export default Rating;
