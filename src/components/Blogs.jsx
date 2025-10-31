import Header from './Header'
import Footer from './Footer'
import WorkInProgress from './wip/WorkInProgress'

const Blogs = () => {
  return (
    <>
      <Header pageName={'Blogs'} />
      <section className="blogs-container">
        <WorkInProgress/>
      </section>
      <Footer/>
    </>
  )
}

export default Blogs
