import React from 'react';
import './TestimonialModal.scss';
import ModalStarRating from './ModalStarRating';

const TestimonialModal = ({ image, text, filledStars, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="testimonial-modal">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="testimonial-content">
          <div className="testimonial-left">
            <div className="image-wrapper">
              <img src={image} alt="User" />
            </div>
          </div>

          <div className="testimonial-divider"></div>

          <div className="testimonial-right">
            <p className="testimonial-text">
                {text.length > 1765 ? (
                      <>
                        {text.slice(0, 1765).concat('...')}
                      </>
                    ) : (
                      text
                    )
                }
            </p>
            <ModalStarRating filledCount={filledStars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
