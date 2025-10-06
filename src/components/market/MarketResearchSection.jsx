import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import dispImg4 from '../../assets/pictures/display_pic_4.png';
import './MarketResearchSection.scss';

const MarketResearchSection = ({name}) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`market-research-section ${isVisible ? 'animate' : ''}`}
      ref={sectionRef}
    >
      {
        (name === 'portfolio' || name === 'tips') ? 
          <>
            <div className="market-research-image-wrapper">
              <img src={dispImg4} className="market-research-image" alt="Market research image"/>
            </div>
          </> : null
      }
      <div className={(name === 'blogs' || name === 'dashboard') ? "market-research-content-alt" : "market-research-content"}>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. To learn more <Link to={`/${name}`} sx={{cursor: "pointer"}}>click here</Link>.</div>
      </div>
      {
        (name === 'blogs' || name === 'dashboard') ? 
          <>
            <div className="market-research-image-wrapper">
              <img src={dispImg4} className="market-research-image" alt="Market research image"/>
            </div>
          </> : null
      }
    </section>
  );
};

export default MarketResearchSection;
