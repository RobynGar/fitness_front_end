import { useState } from "react";

const PersonForm = ({onPersonSubmission}) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0.0);
    const [weight, setWeight] = useState(0.0);
    const [calorieTarget, setCalorieTarget] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    const handleHeightChange = (event) => {
        setHeight(event.target.value)
    }

    const handleWeightChange = (event) => {
        setWeight(event.target.value)
    }

    const handleCalorieTargetChange = (event) => {
        setCalorieTarget(event.target.value)
    }

    const handlePersonFormSubmit = (event) => {
        event.preventDefault();
        if(!name || !age || !height || !weight || !calorieTarget){
            alert("please fill in all fields")

            return
        }

        const newPerson = {
            name: name,
            age: age,
            height: height,
            weight: weight,
            calorieTarget: calorieTarget

        }

        //pass through prop function on how to handle the submission 
        onPersonSubmission(newPerson);

        setName("");
        setAge(0);
        setHeight(0.0);
        setWeight(0.0);
        setCalorieTarget(0);
    }

    return(
        <>
        <div className="personFormConatiner">
            <form className="personform" onSubmit={handlePersonFormSubmit}>
                <label htmlFor="name">Name:</label>
                <input placeholder="Wendy" type="text" id="name" value={name} onChange={handleNameChange} />

                <label htmlFor="age">Age:</label>
                <input placeholder= "24" type="number" id="age" value={age} onChange={handleAgeChange} />

                <label htmlFor="height">Height (cm):</label>
                <input placeholder= "65.0" type="number" id="height" value={height} onChange={handleHeightChange} />

                <label htmlFor="weight">Weight (kg):</label>
                <input placeholder= "166.0" type="number" id="weight" value={weight} onChange={handleWeightChange} />

                <label htmlFor="calorieTarget">calorie Targe (kcal):</label>
                <input placeholder= "1700" type="number" id="calorieTarget" value={calorieTarget} onChange={handleCalorieTargetChange} />

                <input className="submitPersonButton" type="submit" value= "Register" />

            </form>
        </div>

        </>
    )


}
export default PersonForm;