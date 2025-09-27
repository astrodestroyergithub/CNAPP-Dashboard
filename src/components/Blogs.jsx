import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
      <Header pageName={'Blogs'} />
      <section className="section">
        <div>
          <p>Blogs</p>
          <Link to="/">Home</Link>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blogs
