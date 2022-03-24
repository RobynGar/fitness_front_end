const FinalRecipeDisplay = ({recipe,editStatusSwitch}) => {
    return (
        <>
        <button onClick={editStatusSwitch} className="update-button">Edit</button>
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

export default FinalRecipeDisplay;