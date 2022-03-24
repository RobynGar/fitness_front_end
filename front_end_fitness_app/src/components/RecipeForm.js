import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import granola from '../assets/granola.jpeg';

const RecipeForm = ({onRecipeSubmission}) => {

    const {user} = useContext(UserContext);

    const [name, setName] = useState("");
    const [mealType, setMealType] = useState("");
    const [notes, setNotes] = useState("");
    const [calories, setCalories] = useState(0);
    const [week, setWeek] = useState(0);
    const [day, setDay] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleMealTypeChange = (event) => {
        setMealType(event.target.value.toUpperCase());
       
    }
    
    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }

    const handleCaloriesChange = (event) => {
        setCalories(event.target.value);
    }

    const handleWeekChange = (event) => {
        setWeek(event.target.value);
    }

    const handleDayChange = (event) => {
        setDay(event.target.value.toUpperCase());
        
    }

    const handleRecipeFormSubmit = (event) => {
        event.preventDefault();
        if (!name || !mealType || !notes || !calories || !week || !day) {
            alert("Not all information provided");
            return;
        }
        const newRecipe = {
            person_id: user.id,
            name: name,
            mealType: mealType,
            notes: notes,
            calories: calories,
            week: week,
            day: day
        }

        onRecipeSubmission(newRecipe);
    }

    

    return (
        <>
            <div className="recipeFormContainer">
            <form className="recipeForm" onSubmit={handleRecipeFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input placeholder="Muesli" type="text" id="name" value={name} onChange={handleNameChange} ></input>

                <label htmlFor="meal type">Meal Type:</label>
                <input placeholder="BREAKFAST" type="text" id="meal type" value={mealType} onChange={handleMealTypeChange}></input>

                <label htmlFor="notes">Notes:</label>
                <input placeholder="Homemade" type="text" id="notes" value={notes} onChange={handleNotesChange}></input>

                <label htmlFor="calories">Calories:</label>
                <input placeholder="200" type="number" id="calories" value={calories} onChange={handleCaloriesChange}></input>

                <label htmlFor="week">Week:</label>
                <input placeholder="1" type="number" id="week" value={week} onChange={handleWeekChange}></input>

                <label htmlFor="day">Day:</label>
                <input placeholder="MONDAY" type="text" id="day" value={day} onChange={handleDayChange}></input>

                <input className="submitButton" type="submit" value="Submit Recipe"></input>
            </form>
            <img className="recipe-form-image" src={granola} />
            </div>

        </>
    )
}

export default RecipeForm;