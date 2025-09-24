import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
      <Header pageName={'Blogs'} />
      <div>
        <p>Blogs</p>
        <Link to="/">Home</Link>
      </div>
      <Footer/>
    </>
  )
}

export default Blogs
