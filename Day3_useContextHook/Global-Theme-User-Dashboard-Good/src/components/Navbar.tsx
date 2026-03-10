import NavLinks from "./NavLinks";

const Navbar = () => (
  <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
    <div className="logo">MyBrand</div>
    <NavLinks /> {/* NO PROPS! */}
  </nav>
);
export default Navbar;