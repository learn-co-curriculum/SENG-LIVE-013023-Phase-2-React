import React from 'react';
import projects from '../projects';
import ProjectCard from './ProjectCard';

function ProjectList() {
  console.log(projects);
  const renderedProjects = projects.map(project => {
    return <ProjectCard key={project.id} project={project} />
    // return <ProjectCard key={project.id} {...project} />
  })
  return (
    <section>
      <h1>All Projects</h1>
      <div className="filters">
        <button>All</button>
        <button>Phase 1</button>
        <button>Phase 2</button>
        <button>Phase 3</button>
        <button>Phase 4</button>
        <button>Phase 5</button>
      </div>
      <ul className="cards">
        {renderedProjects}
      </ul>
    </section>
  )
}

export default ProjectList