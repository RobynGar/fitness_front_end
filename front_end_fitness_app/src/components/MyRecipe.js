import FinalRecipeDisplay from "./FinalRecipeDisplay";
import EditableRecipeDisplay from "./EditableRecipeDisplay";
import { useState } from "react";

const MyRecipe = ({recipe, deleteRecipeFromDatabase, updatedRecipe}) => {

    const [editStatus, setEditStatus] = useState(false);

    const editStatusSwitch = () => {
        editStatus ? setEditStatus(false) : setEditStatus(true);
    }

    return (
        <div className="individual-recipe-container">
            <h2> {recipe.name} </h2>
            <button onClick={function() {deleteRecipeFromDatabase(recipe.id)}} className="delete-button">Delete</button>
            {editStatus ? <EditableRecipeDisplay recipe={recipe} editStatusSwitch={editStatusSwitch} updatedRecipe={updatedRecipe}/> : <FinalRecipeDisplay editStatusSwitch={editStatusSwitch} recipe={recipe}/>}
        </div>
    )
}

export default MyRecipe;