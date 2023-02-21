import React from 'react'

function ProjectCard({ project }) {
  const { id, name, image, phase, about, link } = project;
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={`${name} screenshot`} />
      </figure>
      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        <p><a href={link}>Live Demo</a></p>
      </section>
      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  )
}

export default ProjectCard