import React from 'react'

function ProjectListItem ( props ) {

    console.log( props.project )

    const { id, name, about, phase, link, image, claps } = props.project

    return (
        <li>
            { name }
        </li>
    )
}

export default ProjectListItem