import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WorkInProgress from '../../components/wip/WorkInProgress'

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
