import React from "react";

function Header({ isDarkMode, onToggleDarkMode }) {
  const handleToggleDarkModeClick = (e) => {
    onToggleDarkMode();
  }

  const buttonText = isDarkMode ? "Light Mode" : "Dark Mode"
  
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkModeClick}>{buttonText}</button>
    </header>
  );
};

export default Header;
