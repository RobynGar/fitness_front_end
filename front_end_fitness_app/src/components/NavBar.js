import { Link } from "react-router-dom";

const NavBar = () => {

    return(
        <>
            <ul id="navbar">
                <li className="navitem grow"><Link to="/" >Home</Link></li>
                <li className="navitem grow"><Link to="/RecipeBook" >Recipe Book</Link></li>
                {/* <li className="navitem"><Link to="/MyRecipeBook" target="_blank" rel="noopener noreferrer">My Recipe Book</Link></li> */}
                <li className="navitem grow"><Link to="/Login" >Login</Link></li>
                <li className="navitem grow"><Link to="/SignUp" >Sign Up</Link></li>
            </ul>
        </>
    )
}

export default NavBar;