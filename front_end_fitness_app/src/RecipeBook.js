import Recipe from "./components/Recipe";
import Select from "react-select";
import { useState } from "react";


const RecipeBook = ({recipeList, onRecipeFilter, filtered}) => {

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
// filters but need to incorporate the unique name and notes
    const filteredMap = filtered.map(recipe => {
        return <Recipe 
                    recipe={recipe} 
                    key={recipe.id} />
    }) 

    // the different options within our dropdown filter
    const mealTypeOptions = [
        {label: 'ALL', value: ''},
        {label: 'BREAKFAST', value: 'BREAKFAST'},
        {label: 'LUNCH', value: 'LUNCH'},
        {label: 'DINNER', value: 'DINNER'},
        {label: 'SNACK', value: 'SNACK'},
    ];

    return(
        <div className="recipeContext">
            <h1 className='page-heading'>All Recipes</h1>
            <Select 
                className="filter-bar"
                options={mealTypeOptions}
                onChange={onRecipeFilter} /> 
            {filteredMap}
        </div>
    )
}

export default RecipeBook;

// filter drop down by meal type