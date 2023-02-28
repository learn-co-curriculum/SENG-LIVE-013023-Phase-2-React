import React, { useState, useEffect } from "react";

function ProjectEditForm({ projectToEdit, onUpdateProject }) {
  const [formData, setFormData] = useState(projectToEdit);

  const { name, about, phase, link, image } = formData;

  // refetch the projectToEdit from the database upon load
  // to ensure we have the most recent values for our formData
  useEffect(() => {
    fetch(`http://localhost:4000/projects/${projectToEdit.id}`)
      .then((res) => res.json())
      .then((project) => setFormData(project));
  }, [projectToEdit.id]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    // Add code here
    // optimistic version of PATCH update
    // fetch(`http://localhost:4000/projects/${projectToEdit.id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
      
    // onUpdateProject(formData);

    // pessimistic version of PATCH update
    fetch(`http://localhost:4000/projects/${projectToEdit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(updatedProject => onUpdateProject(updatedProject));
  }

  return (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <h3>Edit Project</h3>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleOnChange}
      />

      <label htmlFor="about">About</label>
      <textarea id="about" name="about" value={about} onChange={handleOnChange} />

      <label htmlFor="phase">Phase</label>
      <select name="phase" id="phase" value={phase} onChange={handleOnChange}>
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
        <option value="4">Phase 4</option>
        <option value="5">Phase 5</option>
      </select>

      <label htmlFor="link">Project Homepage</label>
      <input
        type="text"
        id="link"
        name="link"
        value={link}
        onChange={handleOnChange}
      />

      <label htmlFor="image">Screenshot</label>
      <input
        type="text"
        id="image"
        name="image"
        value={image}
        onChange={handleOnChange}
      />

      <button type="submit">Update Project</button>
    </form>
  );
};

export default ProjectEditForm;
