import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/RecipeBook" target="_blank" rel="noopener noreferrer">Recipe Book</Link></li>
                <li><Link to="/Login" target="_blank" rel="noopener noreferrer">Login</Link></li>
                <li><Link to="/SignUp" target="_blank" rel="noopener noreferrer">Sign Up</Link></li>
            </ul>
        </>
    )
}

export default NavBar;