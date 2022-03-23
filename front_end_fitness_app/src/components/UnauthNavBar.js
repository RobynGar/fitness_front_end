import { Link } from "react-router-dom";

const AuthNavBar = () => {

    return(
        <>
            <ul id="navbar">
                <li className="navitem"><Link to="/" >Home</Link></li>
                <li className="navitem"><Link to="/RecipeBook" target="_blank" rel="noopener noreferrer">Recipe Book</Link></li>
                <li className="navitem"><Link to="/MyRecipeBook" target="_blank" rel="noopener noreferrer">My Recipe Book</Link></li>
            </ul>
        </>
    )
}

export default AuthNavBar;