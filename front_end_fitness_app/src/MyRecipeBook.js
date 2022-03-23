import RecipeForm from "./components/RecipeForm";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const MyRecipeBook = ({onRecipeSubmission}) => {
    const {user} = useContext(UserContext);

    return(
        <>
            <h1>My Recipes</h1>
            <h2>Hello, {user.id}</h2>
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </>
    )
}

export default MyRecipeBook;