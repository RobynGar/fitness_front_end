import RecipeForm from "./components/RecipeForm";

const MyRecipeBook = ({onRecipeSubmission}) => {

    return(
        <>
            <h1>My Recipes</h1>
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </>
    )
}

export default MyRecipeBook;