import React from 'react'
import ProjectListItem from './ProjectListItem.js';

function ProjectList({projects}) {
    const renderedProjects = projects.map((project) =>{
        return <ProjectListItem
        key={project.id}
        project={project}
        />
    })
    return (
        <section>
            <ul className='cards'>
                {renderedProjects}
            </ul>
        </section>
    )
}

export default ProjectList;