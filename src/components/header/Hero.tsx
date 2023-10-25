import React from 'react'
import ButtonContainer from './ButtonContainer'
import ME from "../../assets/me2.png"
import HeaderSocial from './HeaderSocial'

const Hero = () => {
    return (
        <aside className='hero'>

            <div className="hero__header">



                <HeaderSocial />

                <div className="hero__me">
                    <img src={ME} alt="" />
                </div>

                <h4>Hello I'm</h4>
                <h1>Flore Denis</h1>
                <h5>Fullstack Developer</h5>
                <ButtonContainer />


          <a href="" className="hero__scrollDown">Scroll Down</a>
            </div>

        </aside>
    )
}

export default Hero