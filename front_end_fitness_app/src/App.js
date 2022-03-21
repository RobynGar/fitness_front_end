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
     .then(response => response.json() )
     .then(data => setRecipeList(data))
  },[])

  // create state for people
  // fetch people data from "localhost:8080/person/all"
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

  // log in ID as state

  return (
    <>
    <h1>Not My Fitness Pal</h1>
    <NavBar  />
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook recipeList = {recipeList} />} />
      <Route exact path= "/MyRecipeBook" element={<MyRecipeBook recipeList = {recipeList} onRecipeSubmission = {addRecipeToDatabase} />} />
      <Route exact path= "/Login" element={<Login />} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
