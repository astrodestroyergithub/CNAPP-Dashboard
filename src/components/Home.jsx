import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.scss'
import Logo from './Logo'
import Chatbot from './chatbot/Chatbot'

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
            <Link to="/dashboard">CNAPP Dashboard</Link>
            <Chatbot/>
        </div>
        <Footer/>
    </>
  )
}

export default Home