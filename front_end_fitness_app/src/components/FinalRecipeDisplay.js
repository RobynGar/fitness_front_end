const FinalRecipeDisplay = ({recipe,editStatusSwitch}) => {
    return (
        <>
        <div className="individual-my-recipes">
            <button onClick={editStatusSwitch} className="update-button">Edit</button>
            {/* <ul>
                <li>{recipe.mealType}</li>
                <li>{recipe.notes}</li>
                <li>Calories: {recipe.calories}</li>
                <li>Week: {recipe.week}</li>
                <li>Day: {recipe.day}</li>
            </ul> */}
            <p>{recipe.mealType}</p>
            <p>{recipe.notes}</p>
            <p>Calories: {recipe.calories}</p>
            <p>Week: {recipe.week}</p>
            <p>Day: {recipe.day}</p>
        </div>
        </>
    )
}

export default FinalRecipeDisplay;