import RecipeForm from "./components/RecipeForm";
import { UserContext } from "./UserContext";
import { useContext,useState } from "react";
import Recipe from "./components/Recipe";

const MyRecipeBook = ({onRecipeSubmission, recipeList, filteredRecipeById}) => {
    const {user} = useContext(UserContext);
    
    // const filteredRecipe = recipeList.filter((recipe,index,array) => {
    //     return array.indexOf(array.find(element => {
    //         return element.person_id === user.id
    //     })) === index
    // })
    
    
    // const filteredRecipeMap = filteredRecipe.map (recipe => {
    //     return <Recipe
    //             recipe = {recipe} 
    //             key = {recipe.id}/>
    // })

    // const filteredMap = recipeList
    // .filter(recipe => recipe.person_id === user.id)
    // .map(filteredRecipe => {
    //     return  <Recipe 
    //                 recipe={filteredRecipe}
    //                 key={filteredRecipe.id} />  
    // })

    // const filteredRecipeMap = recipeList.filter(recipe => {
    //     recipe.person_id.includes(user.id)
    //     .map(filteredRecipe => {
    //         <li>
    //             {filteredRecipe}
    //         </li>
    //     })
    // })

    // recipeList.map(recipe => {
    //     if (recipe.person_id === user.id) {
    //        return <Recipe
    //                     recipe = {recipe} 
    //                     key = {recipe.id}/>
    //     }
    // })

    // const filteredRecipe = recipeList.find(recipe => recipe.person_id === user.id)

    // const formattedFilteredRecipe = filteredRecipe.map(filtered => {
    //     return <Recipe
    //                 recipe = {filtered} 
    //                 key = {filtered.id}/>
    // })

    // const filteredIdArray =  recipeList.filter(function(recipe) {
    //     if(recipe.person_id === user.id) {
    //         return <Recipe
    //                     recipe = {recipe} 
    //                     key = {recipe.id}/>
    //     };
    //   }); 


    // const [filteredArray, setFilteredArray] = useState([])

    // const filter = () => {
    //     recipeList.forEach(recipe => {
    //         if (recipe.person_id === user.id) {
    //             setFilteredArray([...filteredArray,recipe])
    //         }
    //     })
    // }

    const filteredRecipeByIdMap = filteredRecipeById.map(recipe => {
        return <Recipe 
            recipe={recipe} 
            key={recipe.id} />
    }) 

    return(
        <>
            <h1>My Recipes</h1>
            <h2>Hello, {user.id}</h2>
            {filteredRecipeByIdMap}
            <RecipeForm onRecipeSubmission={onRecipeSubmission}/>
        </>
    )
}

export default MyRecipeBook;