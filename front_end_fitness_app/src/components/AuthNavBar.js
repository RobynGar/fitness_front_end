import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const AuthNavBar = () => {

    const { user, logout } = useContext(UserContext);

    return(
        <>
            <ul id="navbar">
                <li className="navitem"><Link to="/" >Home</Link></li>
                <li className="navitem"><Link to="/RecipeBook" target="_blank" rel="noopener noreferrer">Recipe Book</Link></li>
                <li className="navitem"><Link to="/MyRecipeBook" target="_blank" rel="noopener noreferrer">My Recipe Book</Link></li>
                <li className="navitem"><button onClick={logout}>Sign out</button></li>
            </ul>
        </>
    )
}

export default AuthNavBar;