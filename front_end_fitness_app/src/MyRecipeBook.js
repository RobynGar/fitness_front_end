import RecipeForm from "./components/RecipeForm";
import { UserContext } from "./UserContext";
import { useContext,useState } from "react";
import MyRecipe from "./components/MyRecipe";

const MyRecipeBook = ({onRecipeSubmission, recipeList, filteredById, deleteRecipeFromDatabase, updatedRecipe}) => {
    const {user} = useContext(UserContext);

    const filteredRecipeByIdMap = filteredById.map(recipe => {
        return <MyRecipe updatedRecipe={updatedRecipe}
            recipe={recipe} 
            key={recipe.id}
            deleteRecipeFromDatabase={deleteRecipeFromDatabase} />
    }) 

    return(
        <div className="recipeContext">
            <h1>My Recipes</h1>
            <h2>Hello, {user.username}</h2>
            {filteredRecipeByIdMap}
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </div>
    )
}
//this it a test
// this is the react branch test
export default MyRecipeBook;