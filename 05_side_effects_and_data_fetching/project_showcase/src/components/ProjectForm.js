import React, { useState } from "react";

const initialFormState = {
  name: "",
  about: "",
  phase: "",
  link: "",
  image: ""
}
function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState(initialFormState)
  const { name, about, phase, link, image } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData(formData => {
      return {
        ...formData,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(savedProject => {
        onAddProject(savedProject);
      })
    setFormData(initialFormState);
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleOnChange}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          value={about}
          onChange={handleOnChange}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          value={phase}
          onChange={handleOnChange}
        >
          <option>Select One</option>
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

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;