import React from 'react'
import ME from "../../assets/me2color.png"
import { PiProjectorScreenChart } from 'react-icons/pi'
import { FaSketch,FaAward,FaFolderMinus} from "react-icons/fa";
const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h1>About Me</h1>

            <div className="about__container">
                <div className="about__me">
                    <div className="about__me__img">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaSketch className='about__icon'/>
                            <p>Experience</p>
                            <small>2+ Years Working</small>
                        </article>


                        <article className="about__card">
                            <FaFolderMinus className='about__icon' />
                            <p>Projects</p>
                            <small>70+</small>
                        </article>



                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <p>Awards Won</p>
                            <small>15+</small>
                        </article>
                    </div>


                    <p className="about__describe">
                        I am Flore Denis, a web programmer with over one year of professional experience. My area of expertise lies in the development
                        of innovative and user-centric web applications. I employ a range of technologies and frameworks, including HTML, CSS, JavaScript,
                        and React, to craft web solutions that meet the highest standards of quality. In addition to front-end development,
                        I am proficient in building dynamic and high-performing web applications using Spring Boot, Bootstrap, and Java.

                    </p>


                    <a href="#contact" download className='btn btn__primary'>Let's Talk</a>
                </div>

            </div>

        </section>
    )
}

export default About