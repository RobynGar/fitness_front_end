import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
            <ul id="navbar">
                <li className="navitem"><Link to="/" >Home</Link></li>
                <li className="navitem"><Link to="/RecipeBook" target="_blank" rel="noopener noreferrer">Recipe Book</Link></li>
                <li className="navitem"><Link to="/Login" target="_blank" rel="noopener noreferrer">Login</Link></li>
                <li className="navitem"><Link to="/SignUp" target="_blank" rel="noopener noreferrer">Sign Up</Link></li>
            </ul>
        </>
    )
}

export default NavBar;