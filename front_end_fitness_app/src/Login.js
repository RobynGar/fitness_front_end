import PeopleContainer from "./containers/PeopleContainer";

const Login = ({onLogin, getId}) => {

  

    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={onLogin}>
                <label htmlFor="username">Username:</label>
                <input type="number" id="username"  ref={getId}></input>
            </form>
        </>
    )
}

export default Login;