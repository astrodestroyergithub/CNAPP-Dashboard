import Header from './Header'
import Footer from './Footer'
import WorkInProgress from './wip/WorkInProgress'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <Header pageName={'Portfolio'} />
      <div className="portfolio-container">
        <WorkInProgress/>
      </div>
      <Footer/>
    </>
  )
}

export default Portfolio
