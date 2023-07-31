import React from 'react'

function ProjectListItem({project : {id, name, about, phase, link, image} }) {
    // const {id, name, about, phase, link, image} = project
        

    return (
        <li className='card'>
            <figure className='image'>
                <img src={image} alt={`project: ${name}`}>
                </img>
            </figure>
            <section>
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

export default ProjectListItem;