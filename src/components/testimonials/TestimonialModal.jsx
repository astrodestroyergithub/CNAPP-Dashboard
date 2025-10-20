import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import './TestimonialModal.scss'
import ModalStarRating from './ModalStarRating'
import SocialBar from './SocialBar'

const TestimonialModal = ({ name, image, text, tags, filledStars, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="testimonial-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="testimonial-content">
          <div className="testimonial-left">
            <div className="social-media-handles-wrapper">
                <SocialBar/>
            </div>
            <div className="image-wrapper">
              <img src={image} alt="User" />
            </div>
            <div className="testimonial-candidate-name">
                {name}
            </div>
          </div>
          <div className="testimonial-divider"></div>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="quote-background-icon"
          />
          <div className="testimonial-right">
            <p className="testimonial-text">
                {text.length > 1600 ? (
                      <>
                        {text.slice(0, 1600).concat('...')}
                      </>
                    ) : (
                      text
                    )
                }
            </p>
            <div className="testimonial-tags">
                {tags.slice(0,3).map((tag) => (
                    <div className="testimonial-tag">{tag}</div>
                ))}
                {tags.length > 3 ? <div className="remaining-tags-indicator-text">+{tags.length - 3} More</div> : null}
            </div>
            <div className="testimonial-rating">
                <ModalStarRating filledCount={filledStars} />
                <div className="rating-fraction">{filledStars} / 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialModal
