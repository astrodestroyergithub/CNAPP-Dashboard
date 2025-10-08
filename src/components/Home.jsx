import Header from './Header'
import Footer from './Footer'
import './Home.scss'
import Logo from './logo/Logo'
import Chatbot from './chatbot/Chatbot'
import NewsletterSection from './newsletter/NewsletterSection'
import BenefitsSection from './benefits/BenefitsSection'
import MarketResearchSection from './market/MarketResearchSection'
import TestimonialSection from './testimonials/TestimonialSection'
import FeaturedSection from './featured/FeaturedSection'

const Home = () => {
  return (
    <>
        <Header pageName={'Home'}/>
        <div>
            <section className="main-heading-section">
              <div className='section-title main-heading'>Cross-Network Advanced Portfolio Platform (CNAPP)</div>
            </section>
            <section className='home-landing-logo'>
              <Logo/>
            </section>
            <section className="app-headline-banner">
              <div className="cnapp-heading">
                CNAPP - Manage your portfolio with a snap!
              </div>
              <div className="cnapp-subheading">
                It won't snap and it won't break, it is here to make your life great. Try today!
              </div>
            </section>
            <FeaturedSection/>
            <BenefitsSection/>
            <MarketResearchSection name='portfolio'/>
            <MarketResearchSection name='blogs'/>
            <MarketResearchSection name='tips'/>
            <MarketResearchSection name='dashboard'/>
            <TestimonialSection/>
            <NewsletterSection/>
            <Chatbot/>
        </div>
        <Footer/>
    </>
  )
}

export default Home
