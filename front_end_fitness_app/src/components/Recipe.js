
// Don't print out personal ID, week or day

// De-structure recipe object as a prop from RecipeBook 

const Recipe = ({recipe}) => {
    return(
        <> 
        {/* extracting name component from recipe prop */}
        <h2> {recipe.name} </h2>
        <ul>
            <li>{recipe.mealType}</li>
            <li>{recipe.notes}</li>
            <li>Calories: {recipe.calories}</li>
            
        </ul>
        </>
    )
}

export default Recipe;