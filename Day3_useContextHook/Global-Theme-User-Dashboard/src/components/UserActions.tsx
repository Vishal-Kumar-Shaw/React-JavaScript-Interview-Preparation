import ThemeBtn from "./ThemeBtn"

interface NavBarProps{
    theme: string,
    toggleTheme: () => void
}
const UserActions = ({theme, toggleTheme}:NavBarProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <span>👤 Profile</span>
    {/* Finally hum manzil ke paas hain */}
    <ThemeBtn theme={theme} toggleTheme={toggleTheme} />
  </div>
  )
}

export default UserActions
