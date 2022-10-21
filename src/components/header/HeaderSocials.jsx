import React from 'react'

import {FaGithub} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'
import {FiDribbble} from 'react-icons/fi'
import {SiTwitter} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      
        <a href="https://www.linkedin.com" target="_blank/">
          <IoLogoLinkedin/>
        </a>
        <a href="https://github.com" target="_blank/">
          <FaGithub/>
        </a>
        <a href="https://www.youtube.com/watch?v=ZxKM3DCV2kE" target="_blank/">
          <FiDribbble/>
        </a>
        <a href="https://twitter.com" target="_blank/">
          <SiTwitter/>
        </a>
  

    </div>
  )
}

export default HeaderSocials
