import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ 
  projects, 
  setSelectedPhase,
  setSearchQuery
}) {
  const [searchInputText, setSearchInputText] = useState("");
  
  useEffect(() => {
    let scheduledUpdate = setTimeout(() => {
      setSearchQuery(searchInputText)
    }, 300)

    console.log("scheduling update");
    return () => {
      console.log("running cleanup");
      clearTimeout(scheduledUpdate);
    }
  }, [searchInputText, setSearchQuery])

  const projectCards = projects.map(project => (
    <ProjectCard
      key={project.id}
      project={project}
    />
  ))

  const handleSearchQueryChange = (e) => {
    setSearchInputText(e.target.value)
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button onClick={() => setSelectedPhase("")}>All</button>
        <button onClick={() => setSelectedPhase("5")}>Phase 5</button>
        <button onClick={() => setSelectedPhase("4")}>Phase 4</button>
        <button onClick={() => setSelectedPhase("3")}>Phase 3</button>
        <button onClick={() => setSelectedPhase("2")}>Phase 2</button>
        <button onClick={() => setSelectedPhase("1")}>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchQueryChange}
        value={searchInputText} />

      <ul className="cards">{projectCards}</ul>
    </section>
  );
};

export default ProjectList;