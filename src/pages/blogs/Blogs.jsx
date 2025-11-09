import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ModalForm from './ModalForm'
import './Blogs.scss'

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CNAPP_DATA_SERVICE_BASE_URL}/data/blogs`)
    .then(response => response.json())
    .then(data => {
        setBlogs(data);
    })
    .catch(error => {
        console.error('Error fetching blogs:', error);
    });
  }, [])

  return (
    <>
      <Header pageName={'Blogs'} />
      <div className="blogs-page">
        <h1 className="page-title">Latest Blogs</h1>
        <div className="blogs-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-container">
                <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">
                  {blog.excerpt}
                </p>
                {
                  blog.tags !== null && 
                    <div className="blog-tags">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                }
                {
                  blog.category != "" && 
                    <div className="blog-category">
                      <strong>Category:</strong> {blog.category}
                    </div>
                }
              </div>
            </div>
          ))}
        </div>
        <div className="add-blog-container">
          <button onClick={openModal} className="open-modal-btn">Create Blog Post</button>
          {showModal && <ModalForm closeModal={closeModal} />}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Blogs
