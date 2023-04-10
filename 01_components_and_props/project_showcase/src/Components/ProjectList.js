import React from 'react'
import ProjectListItem from './ProjectListItem'

export default function ProjectList ( props ) {

    const renderProjectList = props.projects.map( project => <ProjectListItem 
        project = { project } key = { project.id } /> )

    return (
        <div>
            <ul>
                { renderProjectList }
            </ul>
        </div>
        
    )
}