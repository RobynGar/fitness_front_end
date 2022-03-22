import React from 'react';
import './App.css';
import Home from './Home';
import RecipeBook from './RecipeBook';      //importing all additional webpages so they can be accessed from the main page
import MyRecipeBook from './MyRecipeBook';  //required us to install react-router-dom in the terminal
import Login from './Login';
import SignUp from './SignUp';
import {Route, Link, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {useState, useEffect} from 'react';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  // fetch food data from "localhost:8080/food/all"
  useEffect(() => {
    fetch("http://localhost:8080/food/all")
     .then(response => response.json())
     .then(data => setRecipeList(data))
  },[])

  // retrieved person object state
  // fetch person data from "localhost:8080/person/{id}"
  // addPersonToDatabase logic (will be passed down as prop to Signup component)

  // handleFoodFormSubmit 
  const addRecipeToDatabase = (newRecipe) => {
     fetch("http;//localhost:8080/food", {
       method:"POST",
       headers:{
         "Content-Type": "application/json"
       },
       body:JSON.stringify(newRecipe)
     })
     .then(response => response.json())
     .then(data => setRecipeList([...recipeList, data]))

  }

  const handleFilterChange = (event) => {
    let filteredArray = [...recipeList]
    setRecipeList(filteredArray.filter(recipe => {
    if (recipe.mealType === event.value) return recipe;
}))
}
  // person object as state
  // if retrieved person object is not null, render the MyRecipeBook page (conditional rendering)
  // pass person object as prop down to MyRecipeBook to load this person's Recipes

  return (
    <>
    <h1>Not My Fitness Pal</h1>
    <NavBar  />
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook recipeList = {recipeList} onRecipeFilter={handleFilterChange}/>} />
      <Route exact path= "/MyRecipeBook" element={<MyRecipeBook recipeList = {recipeList} onRecipeSubmission = {addRecipeToDatabase} />} />
      <Route exact path= "/Login" element={<Login />} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
