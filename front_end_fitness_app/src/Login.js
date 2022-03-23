import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const Login = ({peopleList, recipeList}) => {
    
    const {user,login, setUser} = useContext(UserContext);
    const [id, setId] = useState();
    const handleIdChange = (event) => {
        setId(event.target.value)
        // setUser(id, true)
    }
    


    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={() => {
                console.log(user.id);
                login(id)
            }}>
                <label htmlFor="id">ID:</label>
                <input onChange={handleIdChange} type="number" min={1} max={peopleList.length} required={true} id="id" value={id} />
            <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;