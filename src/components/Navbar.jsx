import { NavLink } from "react-router-dom";
import homeImg from "../assets/home-icon.png";

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to="/"><img src={homeImg}/></NavLink>
        </nav>
    )
}

export default Navbar;
