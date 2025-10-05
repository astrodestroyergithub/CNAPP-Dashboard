import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import './Home.scss'
import Logo from './Logo'
import Chatbot from './chatbot/Chatbot'
import NewsletterSection from './newsletter/NewsletterSection'
import BenefitsSection from './benefits/BenefitsSection'
import MarketResearchSection from './market/MarketResearchSection'
import TestimonialSection from './testimonials/TestimonialSection'
// Images
import dispImg1 from '../assets/pictures/display_pic1.png'
import dispImg2 from '../assets/pictures/display_pic2.png'
import dispImg3 from '../assets/pictures/display_pic3.png'

const Section = ({ leftContent, rightContent }) => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
      controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, controlsLeft, controlsRight]);

  return (
    <div ref={ref} className="featured min-h-screen px-10">
      {/* Left */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        animate={controlsLeft}
        className="featured-text"
      >
        {leftContent}
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ x: 150, opacity: 0 }}
        animate={controlsRight}
        className="featured-image"
      >
        {rightContent}
      </motion.div>
    </div>
  );
};

const Home = () => {

  const featuredData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: dispImg1,
      alt: 'Display image 1'
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: dispImg2,
      alt: 'Display image 2'
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: dispImg3,
      alt: 'Display image 3'
    }
  ];

  const sections = featuredData.map((item) => ({
    left: (
        <div className="featured-text">{item.text}</div>
      ),
    right: (
          <div className="featured-image">
            <img src={item.image} alt={item.alt} />
          </div>
        ),
  }));
  
  return (
    <>
        <Header pageName={'Home'}/>
        <div>
            <section className="section">
              <div className='section-title main-heading'>Cross-Network Advanced Portfolio Platform (CNAPP)</div>
              <div className='grid home-svg'>
                <Logo/>
              </div>
            </section>
            <section className="app-headline-banner">
              <div className="cnapp-heading">
                CNAPP - Manage your portfolio with a snap!
              </div>
              <div className="cnapp-subheading">
                It won't snap and it won't break, it is here to make your life great. Try today!
              </div>
            </section>
            <div className='overflow-x-hidden'>
              <section className="featured-container">
                {sections.map((s, i) => (
                  <Section key={i} leftContent={s.left} rightContent={s.right} />
                ))}
              </section>
            </div>
            <section className="benefits">
              <BenefitsSection/>
            </section>
            <section className="market-research">
              <MarketResearchSection/>
            </section>
            <section className="testimonials">
              <TestimonialSection/>
            </section>
            <section className="newsletter-cta">
              <NewsletterSection/>
            </section>
            <Link to="/dashboard">CNAPP Dashboard</Link>
            <Chatbot/>
        </div>
        <Footer/>
    </>
  )
}

export default Home