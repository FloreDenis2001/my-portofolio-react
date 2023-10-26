import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='hero__social'>
      <a href="https://www.linkedin.com/in/flore-denis-a31597209/"><BsLinkedin/></a>
      <a href="https://github.com/FloreDenis2001" ><FaGithub/></a>
      <a href="https://www.instagram.com/isdenisg/" ><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocial