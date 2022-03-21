import Recipe from "./components/Recipe";

const RecipeBook = ({recipeList}) => {
    const recipeMap = recipeList.map(recipe => {
        return <Recipe 
                    recipe={recipe} 
                    key={recipe.id} />
    }) 



    return(
        <>
            <h1>All Recipes</h1>
            {recipeMap}
        </>
    )
}

export default RecipeBook;

// filter drop down by meal type