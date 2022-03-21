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
  const [foodList, setFoodList] = useState([]);

  // fetch data from "localhost:8080/food/all"
  useEffect(() => {
    fetch("http://localhost:8080/food/all")
     .then(response => response.json() )
     .then(data => setFoodList(data))
  },[])

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
     .then(data => setFoodList([...foodList, data]))

  }

  return (
    <>
    <h1>Not My Fitness Pal</h1>
    <NavBar  />
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook />} />
      <Route exact path= "/MyRecipeBook" element={<MyRecipeBook />} />
      <Route exact path= "/Login" element={<Login />} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
