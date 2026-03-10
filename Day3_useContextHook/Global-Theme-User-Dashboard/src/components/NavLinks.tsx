import UserActions from './UserActions'
interface NavBarProps{
    theme: string,
    toggleTheme: () => void
}
 
 const NavLinks = ({theme, toggleTheme}:NavBarProps) => {
   return (
     <ul style={{ display: "flex", gap: "20px", listStyle: "none", alignItems: "center" }}>
       <li>Home</li>
       <li>About</li>
       <UserActions theme={theme} toggleTheme={toggleTheme}/>
     </ul>
   )
 }
 
 export default NavLinks
 