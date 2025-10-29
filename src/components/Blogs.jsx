import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
      <Header pageName={'Blogs'} />
      <section className="blogs-container">
        <div>
          <p>Blogs</p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blogs
