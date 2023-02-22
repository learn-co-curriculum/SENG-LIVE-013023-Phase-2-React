import React, { useState } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const handleToggleDarkMode = (e) => {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode';
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={handleToggleDarkMode}>{buttonText}</button>
      </nav>
    </header>
  );
}

export default Header;
