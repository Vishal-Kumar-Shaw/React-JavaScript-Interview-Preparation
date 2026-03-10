import NavLinks from "./NavLinks"

interface NavBarProps{
    theme: string,
    toggleTheme: () => void
}

const NavBar = ({theme, toggleTheme}: NavBarProps) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '10px 20px', borderBottom: '1px solid #ccc'}}>
        <div className="logo">MyLogo</div>
        <NavLinks theme={theme} toggleTheme={toggleTheme}/>
    </nav>
  )
}

export default NavBar
