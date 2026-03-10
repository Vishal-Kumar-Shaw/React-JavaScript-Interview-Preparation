import UserActions from "./UserActions"

 
 const NavLinks = () => {
   return (
     <ul style={{ display: "flex", gap: "20px", listStyle: "none", alignItems: "center" }}>
       <li>Home</li>
       <li>About</li>
       <UserActions/>
     </ul>
   )
 }
 
 export default NavLinks
 