import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <Header pageName={'Portfolio'} />
      <div>
        <p>Portfolio</p>
        <Link to="/">Home</Link>
      </div>
      <Footer/>
    </>
  )
}

export default Portfolio
