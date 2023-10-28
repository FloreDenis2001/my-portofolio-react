import React, { useState } from 'react'
import { BiHomeAlt2 , BiSolidBookBookmark, BiUser} from 'react-icons/bi';
import {LuHeartHandshake} from 'react-icons/lu';
import {RiContactsBookFill} from 'react-icons/ri';
const NavigationBar = () => {

    let [activeNav,setActiveNav]=useState('#home')
  return (
    <aside className="navigation__mobile">
    <ul className="navigation__mobile__list">
        <li>
            <a  href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === "#home" ? "navigation__mobile__link navigation__active" : 'navigation__mobile__link'}><BiHomeAlt2/></a>
        </li>

        <li>
            <a  onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? "navigation__mobile__link navigation__active" : 'navigation__mobile__link'} href="#about"> <BiUser/></a>
        </li>

        <li>
            <a href="#experience"  onClick={()=>setActiveNav('#experience')} className={activeNav === "#experience" ? "navigation__mobile__link navigation__active" : 'navigation__mobile__link'}><BiSolidBookBookmark/></a>
        </li>

        <li>
            <a href="#projects"  onClick={()=>setActiveNav('#projects')} className={activeNav === "#projects" ? "navigation__mobile__link navigation__active" : 'navigation__mobile__link'}><LuHeartHandshake/> </a>
        </li>

        <li>
            <a href="#contact"  onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ? "navigation__mobile__link navigation__active" : 'navigation__mobile__link'} >
            <RiContactsBookFill/>
            </a>
        </li>


    </ul>
</aside>
  )
}

export default NavigationBar