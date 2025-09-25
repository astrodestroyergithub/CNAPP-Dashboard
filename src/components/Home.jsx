import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import './Home.scss'
import Logo from './Logo'

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
        </div>
        <Footer/>
    </>
  )
}

export default Home