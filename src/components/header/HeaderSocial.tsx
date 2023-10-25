import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const HeaderSocial = () => {
  return (
    <div className='hero__social'>
      <a href="" target='_blank'><BsLinkedin/></a>
      <a href="" target='_blank'><FaGithub/></a>
      <a href="" target='_blank'><FiInstagram/></a>
    </div>
  )
}

export default HeaderSocial