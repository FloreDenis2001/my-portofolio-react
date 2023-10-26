import React from 'react'
import { BiHomeAlt2 , BiSolidBookBookmark, BiUser} from 'react-icons/bi';
import {LuHeartHandshake} from 'react-icons/lu';
import {RiContactsBookFill} from 'react-icons/ri';
const NavigationBar = () => {
  return (
    <aside className="navigation__mobile">
    <ul className="navigation__mobile__list">
        <li>
            <a className="navigation__mobile__link__active" href="#home"><BiHomeAlt2/></a>
        </li>

        <li>
            <a className="navigation__mobile__link" href="#about"> <BiUser/></a>
        </li>

        <li>
            <a href="#experience" className="navigation__mobile__link"><BiSolidBookBookmark/></a>
        </li>

        <li>
            <a href="#projects" className="navigation__mobile__link"><LuHeartHandshake/> </a>
        </li>

        <li>
            <a href="#contact" className="navigation__mobile__link">
            <RiContactsBookFill/>
            </a>
        </li>


    </ul>
</aside>
  )
}

export default NavigationBar