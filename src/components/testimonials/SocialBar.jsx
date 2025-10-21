import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import './SocialBar.scss'

const SocialBar = () => (
  <div className="social-bar">
    <a href="#"><FontAwesomeIcon icon={faXTwitter} className="social-icon"/></a>
    <a href="#"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></a>
    <a href="#"><FontAwesomeIcon icon={faLinkedin} className="social-icon"/></a>
    <a href="#"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
  </div>
)

export default SocialBar
