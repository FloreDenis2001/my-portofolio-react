import React from 'react'
import LOGO from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__logo">
            <img src={LOGO} alt=""/>
        </div>
      
        <div className="footer__nav">
            <ul className="footer__list">
                <li className="footer__item"><a href="#home" className="footer__link">Home</a></li>
                <li className="footer__item"><a href="#about" className="footer__link">About</a></li>
                <li className="footer__item"><a href="#experience" className="footer__link">Expereince</a></li>
                <li className="footer__item"><a href="#projects" className="footer__link">Project</a></li>
                <li className="footer__item"><a href="#contact" className="footer__link">Contact</a></li>
              
            </ul>

            <p className="footer__copyright">
                Design by <a href="#home" className="footer__link"> Flore Denis</a>   
            </p>
        </div>
    </footer>
  )
}

export default Footer