import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header pageName={'Home'}/>
        <div>
            <p>Home</p>
            <Link to="/dashboard-v2">CNAPP Dashboard</Link>
        </div>
        <Footer/>
    </>
  )
}

export default Home