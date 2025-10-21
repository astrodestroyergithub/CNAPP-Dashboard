import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faWind } from '@fortawesome/free-solid-svg-icons'
import './SocialBar.scss'

const SocialBar = ({socials}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(true);

  return (
    <>
      {
        !expanded ? ( /* Social media handles bar is in non-expanded state */
          <div className="initial-social-bar">
            {socials.length > 3 ? (
              <>
                {socials.slice(0,3).map((item) => (
                    <a href={item.link}><FontAwesomeIcon icon={item.icon} className="initial-social-icon"/></a>
                  ))
                }
                <FontAwesomeIcon onClick={handleExpand} icon={faChevronRight} className="initial-chevron-right-icon"/>
              </>
            ) : (
              socials.map((item) => (
                <a href={item.link}><FontAwesomeIcon icon={item.icon} className="initial-social-icon"/></a>
              ))
            )}
          </div>
        ) : ( /* Social media handles bar is in expanded state */
          <div className={`social-bar ${expanded ? 'expanded' : ''}`}>
            {socials.map((item, index) => (
              <div className="icon-wrapper" key={item.link}>
                {expanded && (
                  <FontAwesomeIcon
                    icon={faWind}
                    className="wind-icon"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                )}
                <a
                  href={item.link}
                  className={`social-link ${expanded ? 'animate' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FontAwesomeIcon icon={item.icon} className="social-icon" />
                </a>
              </div>
            ))}
          </div>
        )
      }
    </>
  )
}

export default SocialBar
