import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faWind, faCopy } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './SocialBar.scss'
import CopyToaster from '../toasters/copy/CopyToaster'
import ErrorCopyToaster from '../toasters/error/ErrorCopyToaster'

const SocialBar = ({socials}) => {
  const [expanded, setExpanded] = useState(false)
  const [copyToasterState, setCopyToasterState] = useState(false)
  const [copyToasterMessage, setCopyToasterMessage] = useState()
  const [copyErrorToasterState, setCopyErrorToasterState] = useState(false)
  const [copyErrorToasterMessage, setCopyErrorToasterMessage] = useState()

  const dispatch = useDispatch()
  const { name, text } = useSelector((state) => state.testimonialModal)

  const handleExpand = () => setExpanded(true)

  const handleCopy = () => {
    // For simulating error while copying
    /* navigator.clipboard.writeText = () => {
      return Promise.reject(new Error("Clipboard write failed (simulated)"));
    }; */

    navigator.clipboard.writeText(text)
    .then(() => {
      const message = name.concat("'s Testimonial has been successfully copied to your Clipboard!")
      setCopyToasterMessage(message)
      setCopyToasterState(true);
    })
    .catch((err) => {
      console.error('Failed to copy: ', err)
      const message = name.concat("'s Testimonial couldn't be copied due to some error!")
      setCopyErrorToasterMessage(message)
      setCopyErrorToasterState(true);
    })
  }

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '7px',
          },
        },
      },
    },
  });

  return (
    <>
      {
        !expanded ? ( /* Social media handles bar is in non-expanded state */
          <div className="initial-social-bar">
            {socials.length > 2 ? (
              <>
                {socials.slice(0,2).map((item) => (
                    <a href={item.link}><FontAwesomeIcon icon={item.icon} className="initial-social-icon"/></a>
                  ))
                }
                <ThemeProvider theme={theme}>
                  <Tooltip title={`Copy ${name}'s full Testimonial to Your Clipboard`}>
                    <FontAwesomeIcon onClick={handleCopy} icon={faCopy} className="copy-icon"/>
                  </Tooltip>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                  <Tooltip title={`See ${name}'s all Social Media Handles`}>
                    <FontAwesomeIcon onClick={handleExpand} icon={faChevronRight} className="initial-chevron-right-icon"/>
                  </Tooltip>
                </ThemeProvider>
              </>
            ) : (
              <>
                {
                  socials.length > 0 ? (
                    <>
                      {socials.map((item) => (
                        <a href={item.link}><FontAwesomeIcon icon={item.icon} className="initial-social-icon"/></a>
                      ))}
                      <ThemeProvider theme={theme}>
                        <Tooltip title={`Copy ${name}'s full Testimonial to Your Clipboard`}>
                          <FontAwesomeIcon onClick={handleCopy} icon={faCopy} className="copy-icon"/>
                        </Tooltip>
                      </ThemeProvider>
                    </>
                  ) : (
                    <>
                      <ThemeProvider theme={theme}>
                        <Tooltip title={`Copy ${name}'s full Testimonial to Your Clipboard`}>
                          <FontAwesomeIcon onClick={handleCopy} icon={faCopy} className="copy-icon"/>
                        </Tooltip>
                      </ThemeProvider>
                    </>
                  )
                }
              </>
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
            <ThemeProvider theme={theme}>
              <Tooltip title={`Copy ${name}'s full Testimonial to Your Clipboard`}>
                <FontAwesomeIcon onClick={handleCopy} icon={faCopy} className="copy-icon expanded"/>
              </Tooltip>
            </ThemeProvider>
          </div>
        )
      }
      { copyToasterState && <CopyToaster message={copyToasterMessage} /> }
      { copyErrorToasterState && <ErrorCopyToaster message={copyErrorToasterMessage} /> }
    </>
  )
}

export default SocialBar
