import React, { useState } from "react";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";


function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const appClass = isDarkMode ? 'App' : 'App light';

  return (
    <div className={appClass}>
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={onToggleDarkMode} 
      />
      <ProjectsContainer />
    </div>
  );
};

export default App;
