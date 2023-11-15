import React from 'react'
import { FaSketch } from "react-icons/fa";
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h1 className="skills__title">My Experience</h1>

            <div className="experience__container">


                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>
                                <h4>HTML</h4>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div><h4>CSS</h4>
                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>  <h4>JavaScript</h4>
                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>   <h4>React</h4>
                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>  <h4>Sass</h4>
                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div> <h4>TypeScript</h4>
                            </div>

                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>   <h4>Java</h4>

                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>      <h4>MySQL</h4>

                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>

                                <h4>C++</h4>


                            </div>


                        </article>
                        <article className='experience__details'>
                            <FaSketch className='experience__icon' />
                            <div>      <h4>C</h4>
                                </div>

                        </article>
                    </div>
                </div>



            </div>

        </section>
    )
}

export default Experience