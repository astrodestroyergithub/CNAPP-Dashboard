import React, { useState } from 'react'
import './ModalForm.scss'

const ModalForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    title: '',
    excerpt: '',
    tags: null,
    category: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const postData = {
      imageUrl: formData.imageUrl,
      title: formData.title,
      excerpt: formData.excerpt,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null,
      category: formData.category
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_CNAPP_DATA_SERVICE_BASE_URL}/data/add-blog`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      })

      if (response.ok) {
        console.log('Blog Post Created!')
        closeModal()
        window.location.reload()
      } else {
        console.log('Error creating blog post!')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      console.log('Error submitting form!')
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Create New Blog Post</h2>
        <form onSubmit={handleSubmit} className="modal-form">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="title">Blog Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="excerpt">Blog Excerpt:</label>
          <textarea
            id="excerpt"
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}

export default ModalForm
