import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Tips = () => {
  return (
    <>
      <Header pageName={'Tips'}/>
      <div>
        <p>Tips</p>
        <Link to="/">Home</Link>
      </div>
      <Footer/>
    </>
  )
}

export default Tips
