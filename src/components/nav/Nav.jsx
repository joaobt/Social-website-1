
import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import { useState } from 'react'


const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
      <AiOutlineHome/></a>
  
    <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#' ? 'active' : ''}>
      <AiOutlineUser/>
    </a>
    <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}
    ><BiBook/>
    </a>
    <a href="#service" onClick={() => setActiveNav('#service')}  className={activeNav === '#service' ? 'active' : ''}
    ><RiServiceLine/>
    </a>
    <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}
    ><RiContactsLine/>
    </a>
   </nav>
  )
}

export default nav
   