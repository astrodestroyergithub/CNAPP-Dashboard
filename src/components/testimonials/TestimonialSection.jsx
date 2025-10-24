import { useDispatch, useSelector } from 'react-redux'
import { 
  faTwitter,
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faTiktok,
  faSnapchat,
  faPinterest,
  faReddit,
  faMedium,
  faDiscord,
  faDribbble,
  faTwitch,
  faWhatsapp,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'
import StarRating from './StarRating'
import { openModal, closeModal } from '../../store/testimonialModalSlice'
import TestimonialModal from './TestimonialModal'
import './TestimonialSection.scss'

const testimonials = [
  {
    id: 1,
    name: 'Jonny Paul',
    image: 'https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80',
    text: "CNAPP's insights helped me make smarter investment decisions.",
    rating: 3,
    tags: ['Customer Love', 'Ease of Use'],
    socials: [
      {
        name: 'Facebook',
        icon: faFacebook,
        link: '#',
      },
      {
        name: 'X',
        icon: faXTwitter,
        link: "#",
      }  
    ],
  },
  {
    id: 2,
    name: 'Lisa Haddidi Ali Asgar Khalifa',
    image: 'https://photosmint.com/wp-content/uploads/2025/03/Hot-Girls-Dp.jpeg',
    text: 'User-friendly interface and extremely efficient support!',
    rating: 4.3,
    tags: ['Quick Setup'],
    socials: [
      {
        name: 'GitHub',
        icon: faGithub,
        link: '#',
      },
      {
        name: 'TikTok',
        icon: faTiktok,
        link: "#",
      },
      {
        name: 'YouTube',
        icon: faYoutube,
        link: "#",
      },    
    ],
  },
  {
    id: 3,
    name: 'Steve Harrington',
    image: 'https://images.unsplash.com/photo-1578472577660-6f4a47a6660d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95JTIwZHB8ZW58MHx8MHx8fDA%3D',
    text: 'Everything I need for research and analysis is in one place.',
    rating: 4,
    tags: ['Customer Love'],
    socials: [],
  },
  {
    id: 4,
    name: 'Leah Jaye',
    image: 'https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80',
    text: 'Absolutely love how CNAPP tailors insights based on my behavior.',
    rating: 2.5,
    tags: ['Quick Setup', 'Ease of Use'],
    socials: [],
  },
  {
    id: 5,
    name: 'Marc Anthony',
    image: 'https://i.pinimg.com/236x/6d/2a/44/6d2a4475f8b0cec5170a6e042bd601df.jpg',
    text: 'Clean layout and valuable recommendations — highly recommended!',
    rating: 5,
    tags: ['Customer Love'],
    socials: [],
  },
  {
    id: 6,
    name: 'Monty Carla',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVPNW_GZjHjK8ahibt0sHcaUillVa11eoQhchBHEgVugLXRQvOYKk5QCc3stN6G1Jn8A&usqp=CAU',
    text: 'My go-to platform for everything investment related.',
    rating: 4,
    tags: ['Ease of Use', 'Quick Setup'],
    socials: [],
  },
  {
    id: 7,
    name: 'Victoria Smith',
    image: 'https://i.pinimg.com/originals/19/01/a6/1901a6d752d02a8bb590368f45721d3f.jpg',
    text: 'I could take a maternity break after making huge profits.',
    rating: 3.3,
    tags: ['Customer Love', 'User Friendly'],
    socials: [],
  },
  {
    id: 8,
    name: 'Ashley Johnson',
    image: 'https://img.mensxp.com/media/content/2023/Jul/13_64bfe432628b3.jpeg',
    text: 'At 27, my portfolio has grown to $2M!',
    rating: 4.5,
    tags: ['Ease of Use'],
    socials: [],
  },
  {
    id: 9,
    name: 'Bitasta Hembrum',
    image: 'https://www.sakshi.com/gallery_images/2024/09/14/Suryakumar%20Yadav%20Birthday%20Special%20Photos_3.jpg',
    text: 'Best platform for long term investments.',
    rating: 4.2,
    tags: ['Quick Setup'],
    socials: [],
  },
  {
    id: 10,
    name: 'Amber Clamp',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsW0VTAehrlrFcZii_YyHIl31Z9DRUeWwM3g&s',
    text: 'Fast, interactive web platform. Excellent options for GTT, ATO alerts etc.',
    rating: 5,
    tags: ['User Friendly'],
    socials: [
      {
        name: 'X',
        icon: faXTwitter,
        link: "#",
      },
      {
        name: 'Facebook',
        icon: faFacebook,
        link: "#",
      },
      {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: "#",
      },
      {
        name: 'Instagram',
        icon: faInstagram,
        link: "#",
      },
      {
        name: 'Pinterest',
        icon: faPinterest,
        link: "#",
      },
      {
        name: 'TikTok',
        icon: faTiktok,
        link: "#",
      },
      {
        name: 'Snapchat',
        icon: faSnapchat,
        link: "#",
      },
      {
        name: 'WhatsApp',
        icon: faWhatsapp,
        link: "#",
      },
      {
        name: 'Telegram',
        icon: faTelegram,
        link: "#",
      },
      {
        name: 'Reddit',
        icon: faReddit,
        link: "#",
      },
      {
        name: 'Medium',
        icon: faMedium,
        link: "#",
      },
      {
        name: 'GitHub',
        icon: faGithub,
        link: "#",
      }
    ],
  },
  {
    id: 11,
    name: 'Tom Cruise',
    image: 'https://m.media-amazon.com/images/I/51BMaDP4L2L._AC_UF894,1000_QL80_.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    rating: 4.4,
    tags: ['Customer Love', 'Ease of Use', 'User Friendly', 'Quick Setup', 'Great Customer Support'],
    socials: [
      {
        name: 'X',
        icon: faXTwitter,
        link: "#",
      },
      {
        name: 'Facebook',
        icon: faFacebook,
        link: "#",
      },
      {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: "#",
      },
      {
        name: 'Instagram',
        icon: faInstagram,
        link: "#",
      },
      {
        name: 'Pinterest',
        icon: faPinterest,
        link: "#",
      }
    ],
  }
]

const TestimonialSection = () => {
  const dispatch = useDispatch()
  const { isOpen, name, image, text, tags, socials, filledStars } = useSelector((state) => state.testimonialModal)

  return (
    <>
      <section className="testimonial-section">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">See what others have to say about CNAPP!</p>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            {testimonials.map((item) => (
              <div key={item.id} onClick={() => {dispatch(openModal({name: item.name, image: item.image, text: item.text, tags: item.tags, socials: item.socials, filledStars: item.rating}))}} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={item.image} alt="testimonial" />
                </div>
                <div className="testimonial-vertical-divider"></div>
                <div className="testimonial-review">
                  <div className="testimonial-text">
                    {item.text.length > 70 ? (
                      <p>
                        {item.text.slice(0, 57).concat('... ')}<div onClick={() => {dispatch(openModal({name: item.name, image: item.image, text: item.text, tags: item.tags, socials: item.socials, filledStars: item.rating}))}} className="read-more-link">Read more</div>
                      </p>
                    ) : (
                      item.text
                    )}
                  </div>
                  <div className="testimonial-rating">
                    <StarRating height={7} width={7} filledCount={item.rating} gap={2}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <TestimonialModal
          name={name}
          image={image}
          text={text}
          tags={tags}
          socials={socials}
          filledStars={filledStars}
          onClose={() => dispatch(closeModal())}
        />
      )}
    </>
  );
};

export default TestimonialSection
