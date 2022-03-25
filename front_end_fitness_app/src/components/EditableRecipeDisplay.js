import { useState, useContext } from "react";
import { UserContext } from "../UserContext";


const EditableRecipeDisplay = ({editStatusSwitch, recipe, updatedRecipe}) => {
    const {user} = useContext(UserContext);
    const [updatedName, setUpdatedName] = useState(recipe.name);
    const [updatedMealType, setUpdatedMealType] = useState(recipe.mealType);
    const [updatedNotes, setUpdatedNotes] = useState(recipe.notes);
    const [updatedCalories, setUpdatedCalories] = useState(recipe.calories);
    const [updatedWeek, setUpdatedWeek] = useState(recipe.week);
    const [updatedDay, setUpdatedDay] = useState(recipe.day);

    const handleNameChange = (event) => {
        setUpdatedName(event.target.value);
    }

    const handleMealTypeChange = (event) => {
        setUpdatedMealType(event.target.value.toUpperCase());
        
    }
    
    const handleNotesChange = (event) => {
        setUpdatedNotes(event.target.value);
    }

    const handleCaloriesChange = (event) => {
        setUpdatedCalories(event.target.value);
    }

    const handleWeekChange = (event) => {
        setUpdatedWeek(event.target.value);
    }

    const handleDayChange = (event) => {
        setUpdatedDay(event.target.value.toUpperCase());
        
    }
    const handleUpdatedRecipe= (event) => {
       //this prevents the page from reloading to the default page on submission of the form
        event.preventDefault();
        const theUpdatedRecipe = {
            person_id: user.id,
            name: updatedName,
            mealType: updatedMealType,
            notes: updatedNotes,
            calories: updatedCalories,
            week: updatedWeek,
            day: updatedDay
        }

        updatedRecipe(recipe.id, theUpdatedRecipe);

    }

    return (
        <>
        <div className="editable-recipe-form">
            <button className="cancel_button" onClick={editStatusSwitch}>Cancel</button>
            <form onSubmit={handleUpdatedRecipe}>
                <label htmlFor="name">Name:</label>
                <input className="edit-recipe-input-field" value={updatedName} placeholder= {updatedName} onChange={handleNameChange} type="text" id="name" ></input>

                <label htmlFor="meal type">Meal Type:</label>
                <input className="edit-recipe-input-field" value={updatedMealType} placeholder= {updatedMealType} onChange={handleMealTypeChange} type="text" id="meal type" ></input>

                <label htmlFor="notes">Notes:</label>
                <input className="edit-recipe-input-field" value={updatedNotes} onChange={handleNotesChange} type="text" id="notes" ></input>

                <label htmlFor="calories">Calories:</label>
                <input className="edit-recipe-input-field" value={updatedCalories} onChange={handleCaloriesChange} type="number" id="calories" ></input>

                <label htmlFor="week">Week:</label>
                <input className="edit-recipe-input-field" value={updatedWeek} onChange={handleWeekChange} type="number" id="week" ></input>

                <label htmlFor="day">Day:</label>
                <input className="edit-recipe-input-field" value={updatedDay} onChange={handleDayChange} type="text" id="day" ></input>

                <input className="buttons" type="submit" value="Update Recipe"></input>
            </form>
        </div>
        </>
    )
}

export default EditableRecipeDisplay;