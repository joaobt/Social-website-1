import React from 'react'

import {FaGithub} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'
import {FiDribbble} from 'react-icons/fi'
import {FcCandleSticks} from 'react-icons/fc'

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
        <a href="https://br.tradingview.com/" target='_blank' rel="noreferrer">

          <FcCandleSticks />
        </a>
       

    </div>
  )
}

export default HeaderSocials
