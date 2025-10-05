import React from 'react';
import './TestimonialSection.scss';

const testimonials = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80',
    text: "CNAPP's insights helped me make smarter investment decisions.",
  },
  {
    id: 2,
    image: 'https://photosmint.com/wp-content/uploads/2025/03/Hot-Girls-Dp.jpeg',
    text: 'User-friendly interface and extremely efficient support!',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1578472577660-6f4a47a6660d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwZHB8ZW58MHx8MHx8fDA%3D',
    text: 'Everything I need for research and analysis is in one place.',
  },
  {
    id: 4,
    image: 'https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80',
    text: 'Absolutely love how CNAPP tailors insights based on my behavior.',
  },
  {
    id: 5,
    image: 'https://i.pinimg.com/236x/6d/2a/44/6d2a4475f8b0cec5170a6e042bd601df.jpg',
    text: 'Clean layout and valuable recommendations — highly recommended!',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVPNW_GZjHjK8ahibt0sHcaUillVa11eoQhchBHEgVugLXRQvOYKk5QCc3stN6G1Jn8A&usqp=CAU',
    text: 'My go-to platform for everything investment related.',
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">Testimonials</h2>
      <p className="section-subtitle">See what others have to say about CNAPP!</p>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={item.image} alt="testimonial" />
              </div>
              <div className="testimonial-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
