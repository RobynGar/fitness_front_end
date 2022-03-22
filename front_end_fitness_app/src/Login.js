const Login = ({peopleList, recipeList, onLogin, getId}) => {

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={onLogin}>
                <label htmlFor="username">Username:</label>
                <input type="number" id="username" ref={getId} />
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;