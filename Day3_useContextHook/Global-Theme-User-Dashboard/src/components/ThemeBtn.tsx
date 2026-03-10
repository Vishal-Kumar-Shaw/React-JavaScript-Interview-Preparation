interface NavBarProps{
    theme: string,
    toggleTheme: () => void
}

const ThemeBtn = ({theme, toggleTheme}: NavBarProps) => {
  return (
    <button 
        onClick={toggleTheme}
         style={{
        padding: "5px 15px",
        cursor: "pointer",
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px"
    }}>
       {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}

export default ThemeBtn
