import { useState } from "react";

const RecipeForm = ({onRecipeSubmission}) => {

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
        setMealType(event.target.value);
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
        setDay(event.target.value);
    }

    const handleFoodFormSubmit = (event) => {
        event.preventDefault();
        if (!name || !mealType || !notes || !calories || !week || !day) {
            alert("Not all information provided");
            return;
        }
        const newRecipe = {
            name: name,
            mealType: mealType,
            notes: notes,
            calories: calories,
            week: week,
            day: day,
        }

        onRecipeSubmission(newRecipe);

        setName("");
        setMealType("");
        setNotes("");
        setCalories(0);
        setWeek(0);
        setDay("");
    }

    

    return (
        <>
            <form onSubmit={handleFoodFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange}></input>

                <label htmlFor="meal type">Meal Type:</label>
                <input type="text" id="meal type" value={mealType} onChange={handleMealTypeChange}></input>

                <label htmlFor="notes">Notes:</label>
                <input type="text" id="notes" value={notes} onChange={handleNotesChange}></input>

                <label htmlFor="calories">Calories:</label>
                <input type="number" id="calories" value={calories} onChange={handleCaloriesChange}></input>

                <label htmlFor="week">Week:</label>
                <input type="number" id="week" value={week} onChange={handleWeekChange}></input>

                <label htmlFor="day">Day:</label>
                <input type="text" id="day" value={day} onChange={handleDayChange}></input>

                <input type="submit" value="Submit Recipe"></input>
            </form>
        </>
    )
}

export default RecipeForm;