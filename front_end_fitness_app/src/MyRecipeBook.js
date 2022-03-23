import RecipeForm from "./components/RecipeForm";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import Recipe from "./components/Recipe";

const MyRecipeBook = ({onRecipeSubmission, recipeList}) => {
    const {user} = useContext(UserContext);
    const filteredRecipe = recipeList.filter((recipe,index,array) => {
        return array.indexOf(array.find(element => {
            return element.person_id === user.id

        })) === index


    })
    const filteredRecipeMap = filteredRecipe.map (recipe => {
        return <Recipe
                recipe = {recipe} 
                key = {recipe.id}/>

    })

    return(
        <>
            <h1>My Recipes</h1>
            <h2>Hello, {user.id}</h2>
            {filteredRecipeMap}
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </>
    )
}

export default MyRecipeBook;