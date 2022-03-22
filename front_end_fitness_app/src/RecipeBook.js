import Recipe from "./components/Recipe";
import Select from "react-select";
import { useState } from "react";


const RecipeBook = ({recipeList, onRecipeFilter}) => {

    // filters through all the recipes (recipeList prop) and only displays those that are unique
    const uniqueRecipes = recipeList.filter((recipe, index, array) => {
        return array.indexOf(array.find(element => {
            return element.notes === recipe.notes && element.name === recipe.name
        })) === index
    });
    
    const recipeMap = uniqueRecipes.map(recipe => {
        return <Recipe 
                    recipe={recipe} 
                    key={recipe.id} />
    })

    // the different options within our dropdown filter
    const mealTypeOptions = [
        {label: 'BREAKFAST', value: 'BREAKFAST'},
        {label: 'LUNCH', value: 'LUNCH'},
        {label: 'DINNER', value: 'DINNER'},
        {label: 'SNACK', value: 'SNACK'},
    ];

    return(
        <>
            <h1>All Recipes</h1>
            <Select 
                options={mealTypeOptions}
                onChange={onRecipeFilter} />
            {recipeMap}
        </>
    )
}

export default RecipeBook;

// filter drop down by meal type