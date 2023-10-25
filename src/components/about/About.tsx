import React from 'react'
import ME from "../../assets/me2.png"
const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h5>About Me</h5>

            <div className="about__container">
                <div className="about__me">
                    <div className="about__me__img">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <h5>Experience</h5>
                        <small>2+ Years Working</small>
                    </div>
                    <div className="about__cards">
                    <h5>Projects</h5>
                        <small>2+ Years Working</small>
                    </div>
                    <div className="about__cards">

                    </div>
                </div>

            </div>

        </section>
    )
}

export default About