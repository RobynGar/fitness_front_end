import PersonForm from "./components/PersonForm";

const SignUp = ({onPersonSubmission}) => {

    return(
        <>
            <h1>Sign Up</h1>
            <PersonForm onPersonSubmission={onPersonSubmission}/>
        </>
    )
}

export default SignUp;