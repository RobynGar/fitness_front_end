import { useState } from "react";

const EditableRecipeDisplay = ({editStatusSwitch}) => {

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
        mealType.toUpperCase()
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
        day.toUpperCase();
    }

    return (
        <>
        <button onClick={editStatusSwitch}>Cancel</button>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ></input>

            <label htmlFor="meal type">Meal Type:</label>
            <input type="text" id="meal type" ></input>

            <label htmlFor="notes">Notes:</label>
            <input type="text" id="notes" ></input>

            <label htmlFor="calories">Calories:</label>
            <input type="number" id="calories" ></input>

            <label htmlFor="week">Week:</label>
            <input type="number" id="week" ></input>

            <label htmlFor="day">Day:</label>
            <input type="text" id="day" ></input>

            <input type="submit" value="Update Recipe"></input>
        </form>
        </>
    )
}

export default EditableRecipeDisplay;