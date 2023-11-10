import React from 'react';
import jsImage from './images/jsImage.png';
import bootstrapImage from './images/bootstrapImage.png';
import htmlImage from './images/htmlImage.png';
import cssImage from './images/cssImage.png';

const Projects = () => {
  const projectList = [
    
    { id: 1, title: 'JavaScript', link: 'https://github.com/sreeram-mukku/Ethnus_JS_Tasks', image: jsImage },
    { id: 2, title: 'Bootstrap', link: 'https://github.com/sreeram-mukku/Ethnus_BS_Tasks', image: bootstrapImage },
    { id: 3, title: 'HTML', link: 'https://github.com/sreeram-mukku/Ethnus_HTML_Tasks', image: htmlImage },
    { id: 4, title: 'CSS', link: 'https://github.com/sreeram-mukku/Ethnus_CSS_Tasks', image: cssImage },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map(project => (
          <div key={project.id} className="project">
            <h3>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;