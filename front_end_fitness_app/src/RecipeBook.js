import Recipe from "./components/Recipe";

const RecipeBook = ({recipeList}) => {
    
    const recipeMap = recipeList.map(recipe => {
            
        return <Recipe 
                    recipe={recipe} 
                    key={recipe.id} />
            
        
    }) 
    function checkValue(input){
        // recipeList.forEach(element => {
        //     if(element.notes !== input){
        //         return false;
        //     }
        // });
        //let unique = array.filter((x, index) => array.indexOf(x) === index);
// let duplicated = array.filter((x, index) => array.indexOf(x) !== index);
    let unique = recipeList.filter((recipe, index) => recipeList.indexOf(recipe.notes) === index);
    }

    return(
        <>
            <h1>All Recipes</h1>
            {recipeMap}
        </>
    )
}

export default RecipeBook;

// filter drop down by meal type