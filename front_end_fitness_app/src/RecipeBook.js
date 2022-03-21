import Recipe from "./components/Recipe";
import Select from "react-select";
import { useState } from "react";


const RecipeBook = ({recipeList, onFilterSelection}) => {

    const unique = recipeList.filter((recipe, index, array) => {
        return array.indexOf(array.find(element => {
            return element.notes === recipe.notes && element.name === recipe.name
        })) === index
    });
    
    const recipeMap = unique.map(recipe => {
        return <Recipe 
                    recipe={recipe} 
                    key={recipe.id} />
    })
    const mealTypeOptions = [
        {label: 'BREAKFAST', value: 'BREAKFAST'},
        {label: 'LUNCH', value: 'LUNCH'},
        {label: 'DINNER', value: 'DINNER'},
        {label: 'SNACK', value: 'SNACK'},
    ];

    // const handleMealTypeFilter = (event) => {
    //     let filterValue = event.value;
    //     let filteredArray = [...recipeList]
    //     setFoodList(filteredArray.filter(recipe => {
    //         console.log(recipe.mealType.includes(filterValue));
    //         if (recipe.mealType.includes(filterValue)) return recipe;
    //     }))
    //     // const filtered = recipeList.filter((recipe, index, array) => {
    //     //     return array.indexOf(array.find(element => element.mealType === event.value)) === index
    //     // });
        
    //     // const filteredList = filtered.map(recipe => {
    //     //     return <Recipe 
    //     //                 recipe={recipe} 
    //     //                 key={recipe.id} />
    //     // })
    //     // console.log(event.value);
    //     // console.log(filteredList);
    //     // const value = event.value
    //     // // setFilterParams(value)
    //     // console.log(value);
    // }

    

    return(
        <>
            <h1>All Recipes</h1>
            <Select 
                options={mealTypeOptions}
                onChange={onFilterSelection} />
            {recipeMap}
        </>
    )
}

export default RecipeBook;

// filter drop down by meal type