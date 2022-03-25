import PersonForm from "./components/PersonForm";

const SignUp = ({onPersonSubmission}) => {

    return(
        <>
            <h1 className='page-heading'>Sign Up</h1>
            <PersonForm onPersonSubmission={onPersonSubmission}/>
        </>
    )
}

export default SignUp;