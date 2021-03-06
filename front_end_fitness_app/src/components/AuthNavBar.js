import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const AuthNavBar = () => {

    const { user, logout } = useContext(UserContext);

    return(
        <>
            <ul id="navbar">
                <li className="navitem"><Link to="/" >Home</Link></li>
                <li className="navitem"><Link to="/RecipeBook" >Recipe Book</Link></li>
                <li className="navitem"><Link to="/MyRecipeBook" >My Recipe Book</Link></li>
                <li className="navitem"><button onClick={logout} id="sign-out-button">Sign out</button></li>
            </ul>
        </>
    )
}

export default AuthNavBar;