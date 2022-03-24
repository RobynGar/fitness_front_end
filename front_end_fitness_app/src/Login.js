import React, { useContext, useRef, useState } from 'react';
import { UserContext } from './UserContext';

const Login = ({peopleList, recipeList}) => {
    
    const {user,login} = useContext(UserContext);
    const [id, setId] = useState();
    const idRef = useRef();

    const handleIdChange = (event) => {
        setId(event.target.value)
        // setUser(id, true)
    }

    


    return (
        <>
            <h1>Login</h1>
            <form className="form" onSubmit={() => {
                // console.log(user.id);
                login(id)
            }}>
                <label htmlFor="id">ID:</label>
                <input onChange={handleIdChange} name="id" type="number" min={1} max={peopleList.length} required={true} ref={idRef} />
            <input id="login-button" type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;