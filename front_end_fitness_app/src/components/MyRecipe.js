import FinalRecipeDisplay from "./FinalRecipeDisplay";
import EditableRecipeDisplay from "./EditableRecipeDisplay";
import { useState } from "react";

const MyRecipe = ({recipe, deleteRecipeFromDatabase}) => {

    const [editStatus, setEditStatus] = useState(false);

    const editStatusSwitch = () => {
        editStatus ? setEditStatus(false) : setEditStatus(true);
    }

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
        <h2> {recipe.name} </h2>
        <button onClick={function() {deleteRecipeFromDatabase(recipe.id)}} className="delete-button">Delete</button>
        {editStatus ? <EditableRecipeDisplay editStatusSwitch={editStatusSwitch}/> : <FinalRecipeDisplay editStatusSwitch={editStatusSwitch} recipe={recipe}/>}
        </>
    )
}

export default MyRecipe;