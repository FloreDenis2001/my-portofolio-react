import React from 'react'
import cv from '../../assets/mycv.pdf'
const ButtonContainer = () => {
  return (
    <div className='btn__container'>
        <a href={cv} download className='btn '>Download CV</a>
        <a href="#contact" download className='btn btn__primary'>Let's Talk</a>
    </div>
  )
}

export default ButtonContainer