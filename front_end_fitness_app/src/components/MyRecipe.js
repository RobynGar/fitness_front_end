const MyRecipe = ({recipe, deleteRecipeFromDatabase}) => {
    return (
        <>
        <h2> {recipe.name} </h2>
        <button onClick={function() {deleteRecipeFromDatabase(recipe.id)}} className="delete-button">Delete</button>
        <button className="update-button">Update</button>
        <ul>
            <li>{recipe.mealType}</li>
            <li>{recipe.notes}</li>
            <li>Calories: {recipe.calories}</li>
            <li>Week: {recipe.week}</li>
            <li>Day: {recipe.day}</li>
        </ul>
        </>
    )
}

export default MyRecipe;