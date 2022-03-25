import React, { useContext, useRef, useState } from 'react';
import { UserContext } from './UserContext';
import strawberryHomePic from './assets/strawberryHomePic.png';

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
            <h1 className='page-heading'>Login</h1>
            <div className="login-form-container">
            <form  className="form-login" onSubmit={() => {
                // console.log(user.id);
                login(id)
            }}>
                <label htmlFor="id">UserName:</label>
                <input className="login-field" onChange={handleIdChange} placeholder="id number" name="id" type="number" min={1} max={peopleList.length} required={true} ref={idRef} />
            <input id="login-button" type="submit" value="Login"/>
            </form>
            <img className="strawberry" src={strawberryHomePic} />
            </div>
        </>
    )
}

export default Login;