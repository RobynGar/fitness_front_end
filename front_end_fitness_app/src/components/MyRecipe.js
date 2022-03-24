const MyRecipe = ({recipe}) => {
    return (
        <>
        <h2> {recipe.name} </h2>
        <button className="delete-button">Delete</button>
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