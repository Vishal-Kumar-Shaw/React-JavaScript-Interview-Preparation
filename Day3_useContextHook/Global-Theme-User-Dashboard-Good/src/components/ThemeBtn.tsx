import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeBtn = () => {
  // Seedha context se uthao, Props ki zaroorat nahi!
  const { theme, toggleTheme } = useContext(ThemeContext)!;

  return (
    <button 
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000"
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};
export default ThemeBtn;
