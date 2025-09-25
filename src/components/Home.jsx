import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header pageName={'Home'}/>
        <div>
            <section className="section">
              <div className='section-title'>Cross-Network Advanced Portfolio Platform</div>
              <div className='grid'>
                <p>Home</p>
              </div>
            </section>
            <Link to="/dashboard">CNAPP Dashboard</Link>
        </div>
        <Footer/>
    </>
  )
}

export default Home