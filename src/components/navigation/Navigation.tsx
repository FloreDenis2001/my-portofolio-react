import { url } from 'inspector';
import React from 'react';
import dfstroke from '../../assets/logowhite.svg';

const Navigation = () => {
    return (
        <header id="home">
            <div className="logo-container">
               <img src={dfstroke} alt="Alt" />
            </div>
            <nav className="nav__bar">
                <ul className='nav__bar__list'>
                    <li className='nav__bar__list__item'>
                        <a className="nav__link " href="#home" >Home</a>
                    </li>

                    <li className='nav__bar__list__item'>
                        <a className="nav__link " href="#about" >About</a>
                    </li>

                    <li className='nav__bar__list__item'>
                        <a href="#skills" className="nav__link " >Skills</a>
                    </li>

                    <li className='nav__bar__list__item'>
                        <a href="#project" className="nav__link " >Project</a>
                    </li>

                    <li className='nav__bar__list__item'>
                        <a href="#contact" className="nav__link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation