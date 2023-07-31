import React from 'react'
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from './components/ProjectList';
import projects from "./projects.js"

function App() {
  return(
  <div className="App">
    <Header />
    <ProjectForm />
    {/* this is our array of projects */}
    <ProjectList projects={projects} />
  </div>)
  ;
}

export default App;
