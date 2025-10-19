import React from 'react';

const ModalStarRating = ({ filledCount }) => {
  const totalStars = 5;

  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      {Array.from({ length: totalStars }).map((_, i) => (
        <svg
          key={i}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={i < filledCount ? '#FFD700' : 'none'}
          stroke="#FFD700"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
        </svg>
      ))}
    </div>
  );
};

export default ModalStarRating;
