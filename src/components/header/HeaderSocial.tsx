import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='hero__social'>
      <a href="https://www.linkedin.com/in/flore-denis-a31597209/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/FloreDenis2001" target='_blank'><FaGithub/></a>
      <a href="https://www.instagram.com/isdenisg/" target='_blank'><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocial