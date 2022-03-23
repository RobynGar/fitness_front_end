import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

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

        setName("");
        setMealType("");
        setNotes("");
        setCalories(0);
        setWeek(0);
        setDay("");
    }

    

    return (
        <>
            <form onSubmit={handleRecipeFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange}></input>
                <hr/>

                <label htmlFor="meal type">Meal Type:</label>
                <input type="text" id="meal type" value={mealType} onChange={handleMealTypeChange}></input>
                <hr/>
                <label htmlFor="notes">Notes:</label>
                <input type="text" id="notes" value={notes} onChange={handleNotesChange}></input>
                <hr/>
                <label htmlFor="calories">Calories:</label>
                <input type="number" id="calories" value={calories} onChange={handleCaloriesChange}></input>
                <hr/>
                <label htmlFor="week">Week:</label>
                <input type="number" id="week" value={week} onChange={handleWeekChange}></input>
                <hr/>
                <label htmlFor="day">Day:</label>
                <input type="text" id="day" value={day} onChange={handleDayChange}></input>

                <input className="submitButton" type="submit" value="Submit Recipe"></input>
            </form>
        </>
    )
}

export default RecipeForm;