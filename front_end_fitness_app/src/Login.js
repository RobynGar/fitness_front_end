import React, { useContext, useRef, useState } from 'react';
import { UserContext } from './UserContext';
import strawberryHomePic from './assets/strawberryHomePic.png';

const Login = ({peopleList, recipeList}) => {
    
    const {user,login} = useContext(UserContext);
    const [id, setId] = useState();
    const [username, setUsername] = useState();
    const idRef = useRef();

    const handleIdChange = (event) => {
        setId(event.target.value)
        // setUser(id, true)
    }
    const handleNameChange = (event) => {
        setUsername(event.target.value)
    }

    


    return (
        <>
            <h1 className='page-heading'>Login</h1>
            <div className="recipe-submission-form-container">
                <form  className="form-login" onSubmit={() => {
                    login(id, username)
                }}>
                    <label htmlFor="id">UserName:</label>
                    <input className="login-field" onChange={handleIdChange} placeholder="id number" name="id" type="number" min={1} max={peopleList.length} required={true} ref={idRef} />

                    <label htmlFor="username">Name:</label>
                    <input className="login-field" onChange={handleNameChange} placeholder="Rosa" name="name" type="text" required={true} />
                   
                    <input id="login-button" type="submit" value="Login"/>
                </form>
                <img className="strawberry" src={strawberryHomePic} />
            </div>
        </>
    )
}

export default Login;