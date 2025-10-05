import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.scss'
import Logo from './Logo'
import Chatbot from './chatbot/Chatbot'
import NewsletterSection from './newsletter/NewsletterSection'
import BenefitsSection from './benefits/BenefitsSection'
import MarketResearchSection from './market/MarketResearchSection'
import TestimonialSection from './testimonials/TestimonialSection'
import dispImg1 from '../assets/pictures/display_pic1.png'
import dispImg2 from '../assets/pictures/display_pic2.png'
import dispImg3 from '../assets/pictures/display_pic3.png'

const Home = () => {
  
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
            <section className="featured-container">
              <div className="featured">
                <div className="featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="featured-image">
                  <img src={dispImg1} alt="Display image 1" />
                </div>
              </div>
              <div className="featured">
                <div className="featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="featured-image">
                  <img src={dispImg2} alt="Display image 2" />
                </div>
              </div>
              <div className="featured">
                <div className="featured-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className="featured-image">
                  <img src={dispImg3} alt="Display image 3" />
                </div>
              </div>
            </section>
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