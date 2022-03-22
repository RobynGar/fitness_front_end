import { useContext } from "react";
import {UserContext} from './UserContext';

const Person = () => {

    const { user, logout } = useContext(UserContext);

    return(
        <>
        <h1>Hello, {user.id}</h1>
        <button onClick={logout}>Logout</button>
        </>
        
    )
}

export default Person;