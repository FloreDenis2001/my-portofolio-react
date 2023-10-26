import React, { useState } from 'react';
import ECOM from '../../assets/ecom.png';
import NOTOURS from '../../assets/notours.png';
import NEXTER from '../../assets/nexter.png';
import TRILLO from '../../assets/trillo.png';
import VORTEX from '../../assets/viralvortex.png';
import { BsGithub } from 'react-icons/bs';
import { FiAirplay } from 'react-icons/fi';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projectData = [
    {
      title: 'Ecommerce App',
      image: ECOM,
      category: 'Web',
      git:'https://github.com/FloreDenis2001/evomarket-client-react',
      demo:'',
    },
    {
      title: 'Natours Design',
      image: NOTOURS,
      category: 'Design',
      git:'https://github.com/FloreDenis2001/natours-website-with-scss',
      demo:'https://floredenis.com/natours-website-with-scss/',
    },
    {
      title: 'ViralVortex Design',
      image: VORTEX,
      category: 'Design',
      git:'https://github.com/FloreDenis2001/viralvortex-theme',
      demo:'https://floredenis.com/viralvortex-theme/',
    },
    {
      title: 'Trillo Design',
      image: TRILLO,
      category: 'Design',
      git:'https://github.com/FloreDenis2001/trillo/',
      demo:'https://floredenis.com/trillo/',
    },
    {
      title: 'Nexter Design',
      image: NEXTER,
      category: 'Design',
      git:'https://github.com/FloreDenis2001/nexter',
      demo:'https://floredenis.com/nexter/',
    },
  ];

  const filteredProjects = projectData.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id='projects'>
      <span className='projects__subtitle'>My Portfolio</span>
      <h1>Recent Works</h1>

      <div className="projects__filters">
        {['All', 'Web', 'Design'].map((filter) => (
          <span
            key={filter}
            className={`projects__item ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="projects__container">
        {filteredProjects.map((project, index) => (
          <div key={index} className='projects__card'>
            <img src={project.image} alt="" className='projects__img' />
            <h3 className='projects__title'>{project.title}</h3>
            <div className="projects__buttons">
              <a href={project.git} className='btn-card'>
                <BsGithub className='btn__icon' />
                Code
              </a>
              <a href={project.demo} className='btn-card  btn-card__cardprimary'>
                <FiAirplay className='btn__icon' />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
