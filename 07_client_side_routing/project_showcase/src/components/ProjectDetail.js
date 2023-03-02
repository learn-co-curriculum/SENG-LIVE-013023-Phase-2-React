import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectDetail({
  onEditProject,
  onUpdateProject,
  onDeleteProject
}) {
  const [project, setProject] = useState(null);

  const id = 1;

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
      });
  }, [id]);

  if(!project) { return <div></div>}

  const { image, name, about, link, phase, claps } = project;

  const handleClap = () => {
    const newClapCount = claps + 1;
    fetch(`http://localhost:4000/projects/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ claps: newClapCount })
    })
      .then(response => response.json())
      .then(updatedProject => {
        onUpdateProject(updatedProject);
        setProject(updatedProject);
      });
  };

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      onDeleteProject(id)
      fetch(`http://localhost:4000/projects/${id}`, {
        method: "DELETE"
      })
    }
  };

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClap}>
            👏{claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <footer className="extra">
            <span className="badge blue">Phase {phase}</span>
            <div className="manage">
              <button onClick={handleEditClick}>
                <FaPencilAlt />
              </button>
              <button onClick={handleDeleteClick}>
                <FaTrash />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
