import RecipeForm from "./components/RecipeForm";
import { UserContext } from "./UserContext";
import { useContext,useState } from "react";
import Recipe from "./components/Recipe";

const MyRecipeBook = ({onRecipeSubmission, recipeList, filteredById}) => {
    const {user} = useContext(UserContext);

    const filteredRecipeByIdMap = filteredById.map(recipe => {
        return <Recipe 
            recipe={recipe} 
            key={recipe.id} />
    }) 

    return(
        <div className="recipeContext">
            <h1>My Recipes</h1>
            <h2>Hello, {user.id}</h2>
            {filteredRecipeByIdMap}
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </div>
    )
}

export default MyRecipeBook;