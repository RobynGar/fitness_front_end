import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login = ({peopleList, recipeList, onLogin, handleUsername}) => {
    
    const { login } = useContext(UserContext);
    const [name, setName] = useState();

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={() => {
                login(id)
            }}>
                <label htmlFor="username">Username:</label>
                <input type="number" min={1} max={peopleList.length} required={true} id="username" />
            <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;