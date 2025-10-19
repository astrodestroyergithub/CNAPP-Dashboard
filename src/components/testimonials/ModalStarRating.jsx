import React from 'react'
import './ModalStarRating.scss'

const ModalStarRating = ({ filledCount }) => {
  const totalStars = 5;

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }).map((_, i) => (
        <svg
          key={i}
          width="24"
          height="24"
          className={`star ${i < filledCount ? 'filled' : 'empty'}`}
          viewBox="0 0 24 24"
        >
          <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
        </svg>
      ))}
    </div>
  );
};

export default ModalStarRating;
