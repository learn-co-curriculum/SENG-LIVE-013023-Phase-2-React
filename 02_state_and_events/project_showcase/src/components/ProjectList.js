import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import projects from "../projects";

function ProjectList() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const searchResults = projects.filter(project => {
    // we need to return true if the searchQuery matches the current project
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.about.toLowerCase().includes(searchQuery.toLowerCase());
  })

  const renderedProjects = searchResults.map(project => {
    return <ProjectCard key={project.id} project={project} />
  })

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input 
        type="text" 
        placeholder="Search..."
        onChange={handleSearchChange}
      />

      <ul className="cards">{renderedProjects}</ul>
    </section>
  );
};

export default ProjectList;
