import Recipe from "./components/Recipe";

const RecipeBook = ({foodList}) => {
    const foodMap = foodList.map(recipe => {
        return <Recipe recipe = {recipe} key={recipe.id}/>
    }) 



    return(
        <>
            <h1>All Recipes</h1>
            {foodMap}
        </>
    )
}

export default RecipeBook;

// pass food list as a prop 

// filter drop down by meal type