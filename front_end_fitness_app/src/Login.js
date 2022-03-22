const Login = ({peopleList, recipeList, onLogin, getId, handleUsername}) => {

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleUsername}>
                <label htmlFor="username">Username:</label>
                <input type="number" min={1} max={peopleList.length} required={true} id="username" ref={getId} />
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}

export default Login;