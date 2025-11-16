import React, { useState } from 'react'
import './ModalForm.scss'

const ModalForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    qno: '',
    ques: '',
    tags: null,
    ans: ''
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
      qno: formData.qno,
      ques: formData.ques,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null,
      ans: formData.ans
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_CNAPP_DATA_SERVICE_BASE_URL}/data/add-gk`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
      })

      if (response.ok) {
        console.log('GK Created!')
        closeModal()
        window.location.reload()
      } else {
        console.log('Error creating gk post!')
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

          <label htmlFor="qno">GK Question No:</label>
          <input
            type="text"
            id="qno"
            name="qno"
            value={formData.qno}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="ques">GK Question:</label>
          <textarea
            id="ques"
            name="ques"
            value={formData.ques}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="tags">Tags ("," separated):</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
          />

          <label htmlFor="ans">Answer:</label>
          <input
            type="text"
            id="ans"
            name="ans"
            value={formData.ans}
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
