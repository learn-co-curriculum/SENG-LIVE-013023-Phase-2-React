import React, { useState } from "react";

function Header () {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const handleToggleDarkMode = (e) => {
    toggleDarkMode();
  }
  
  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{buttonText}</button>
    </header>
  );
}

export default Header;
