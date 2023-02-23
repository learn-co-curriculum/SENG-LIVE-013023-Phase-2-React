import React, { useState } from 'react'
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);

  const onLoadProjects = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }

  return (
    <div>
      <ProjectForm />
      <ProjectList
        projects={projects}
        onLoadProjects={onLoadProjects}
      />
    </div>
  )
}

export default ProjectsContainer