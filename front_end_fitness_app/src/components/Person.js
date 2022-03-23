import { useContext } from "react";
import {UserContext} from '../UserContext';

const Person = ({peopleList}) => {

    const { user, logout } = useContext(UserContext);

    return(
        <>
        <h1>Hello User!</h1>
        <button onClick={logout}>Logout</button>
        </>
        
    )
}

export default Person;