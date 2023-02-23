function Header({ isDarkMode, onToggleDarkMode }) {

  const handleToggleDarkMode = (e) => {
    onToggleDarkMode();
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
