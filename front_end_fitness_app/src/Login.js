import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login = ({peopleList, recipeList}) => {
    
    const { login } = useContext(UserContext);
    const [id, setId] = useState();

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={() => {
                login(id)
            }}>
                <label htmlFor="id">ID:</label>
                <input type="number" min={1} max={peopleList.length} required={true} id="id" value={id} />
            <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;