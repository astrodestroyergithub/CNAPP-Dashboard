import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WorkInProgress from './wip/WorkInProgress'
import { Link } from 'react-router-dom'

const Tips = () => {
  return (
    <>
      <Header pageName={'Tips'}/>
      <div className="tips-container">
        <WorkInProgress/>
      </div>
      <Footer/>
    </>
  )
}

export default Tips
