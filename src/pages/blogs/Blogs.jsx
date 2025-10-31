import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './Blogs.scss'

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["React", "JavaScript", "Frontend"],
      category: "Web Development",
    },
    {
      id: 2,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [],
      category: '',
    },
    {
      id: 3,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["React", "JavaScript", "Frontend"],
      category: "Web Development",
    },
    {
      id: 4,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [],
      category: '',
    },
    {
      id: 5,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [],
      category: '',
    },
    {
      id: 6,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: [],
      category: '',
    },
    {
      id: 7,
      image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      tags: ["React", "JavaScript", "Frontend"],
      category: "Web Development",
    },
  ]

  return (
    <>
      <Header pageName={'Blogs'} />
      <div className="blogs-page">
        <h1 className="page-title">Latest Blogs</h1>
        <div className="blogs-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-tags">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
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
      </div>
      <Footer/>
    </>
  )
}

export default Blogs
