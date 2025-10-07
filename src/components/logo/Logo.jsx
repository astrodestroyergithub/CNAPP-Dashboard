import React from 'react'
import LargeLogo from './LargeLogo'
import MediumLogo from './MediumLogo'
import ExtraSmallLogo from './ExtraSmallLogo'
import './Logo.scss'

const Logo = () => {
  return (
    <>
        <div className='home-svg-large'>
            <LargeLogo/>
        </div>
        <div className='home-svg-medium'>
            <MediumLogo/>
        </div>
        <div className='home-svg-extra-small'>
            <ExtraSmallLogo/>
        </div>
    </>
  )
}

export default Logo
