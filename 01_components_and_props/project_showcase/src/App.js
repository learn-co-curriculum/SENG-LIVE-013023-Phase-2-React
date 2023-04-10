import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import ProjectForm from './Components/ProjectForm'
import ProjectList from './Components/ProjectList'

const baseUrl = `http://localhost:3000/`
const projectUrl = baseUrl + 'projects/'

function App() {

  const message = "React is awesome!!!!"
  const someObject = { message: "What do I do with this?" }

  const funMessages = [ 'This is so cool!', 'React is great with arrays!', 'Check this out!!!' ]

  const renderFunMessages = funMessages.map( message => <li>{ message }</li> )
  
  const [ projects, setProjects ] = useState( [] )

  useEffect( ()=> fetchProjectData() , [] )

  const fetchProjectData = () => {
    fetch( projectUrl )
    .then( r => r.json() )
    .then( setProjects ) 
  }
  
  console.log( projects )

  // projectList( projects, user )

  return (
    <div className="App">
      Welcome to React Class!!!
      <Header />
      <br/>
      <br/>
      <ProjectForm />
      <br/>
      <br/>
      
      <ProjectList 
        projects = { projects } 
        someMessage = { message }
      />


    </div>
  );
}

export default App;
