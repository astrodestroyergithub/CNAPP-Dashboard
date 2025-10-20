import React from 'react'
import './ModalStarRating.scss'

const ModalStarRating = ({ filledCount }) => {
  const totalStars = 5;

  return (
    <div className="modal-star-rating">
      {Array.from({ length: totalStars }).map((_, i) => {
        const fullStars = Math.floor(filledCount);
        const isFull = i < fullStars;
        const isPartial = i === fullStars && filledCount % 1 !== 0;
        const fillPercentage = isPartial ? (filledCount % 1) * 100 : 0;

        return (
          <div key={i} className="modal-star-wrapper">
            <svg
              width="24"
              height="24"
              className={`modal-star ${isFull ? 'filled' : isPartial ? 'partial' : 'empty'}`}
              viewBox="0 0 24 24"
            >
              <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
              {isPartial && (
                <polygon
                  points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9"
                  className="modal-partial-fill"
                  style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
                />
              )}
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default ModalStarRating;
