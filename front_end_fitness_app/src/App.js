import React from 'react';
import './App.css';
import Home from './Home';
import RecipeBook from './RecipeBook';      //importing all additional webpages so they can be accessed from the main page
import MyRecipeBook from './MyRecipeBook';  //required us to install react-router-dom in the terminal
import Login from './Login';
import SignUp from './SignUp';
import {Route, Link, Routes, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {useState, useEffect, useMemo, useRef, useContext} from 'react';
import Recipe from './components/Recipe';
import Person from './components/Person';
import {UserContext} from './UserContext';
import AuthNavBar from './components/AuthNavBar';


function App() {

  // --------------------RECIPE SECTION------------------------
  const [recipeList, setRecipeList] = useState([]);

  // fetch food data from "localhost:8080/food/all"
  useEffect(() => {
    fetch("http://localhost:8080/food/all")
     .then(response => response.json())
     .then(data => setRecipeList(data))
  },[recipeList])

  // handleFoodFormSubmit 
  const addRecipeToDatabase = async (newRecipe) => {
     await fetch("http://localhost:8080/food", {
       method:"POST",
       headers:{
         "Content-Type": "application/json"
       },
       body:JSON.stringify(newRecipe)
     })
     .then(response => response.json())
     .then(data => setRecipeList([...recipeList, data]))

  }
 const [filteredRecipe, setFilteredRecipe] = useState("");

  const filterChange = (event) => {
    setFilteredRecipe(event.value);
  }

const filtered = React.useMemo(() => {
  return recipeList.filter(recipe => {
    return filteredRecipe.length > 0 ? recipe.mealType.includes(filteredRecipe) : true;
  })
 }, [filteredRecipe, recipeList]);

  // --------------------PEOPLE SECTION------------------------
  const [peopleList, setPeopleList] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/person/all")
      .then(response => response.json())
      .then(data => setPeopleList(data))
  },[]);

  const { user } = useContext(UserContext);

  // addPersonToDatabase logic (will be passed down as prop to Signup component)

  const [filteredById,setFilteredById] = useState([]);
  
  useEffect(() => {
    console.log(recipeList);
    const filteredRecipeById = recipeList.filter(recipe => recipe.person_id === parseInt(user.id))
    setFilteredById(filteredRecipeById)
    console.log(filteredRecipeById);
  },[user,recipeList])


  return (
    <>
    <h1 id="app-title">Not My Fitness Pal</h1>
    {user.auth ? <AuthNavBar/> : <NavBar  />}
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook recipeList = {recipeList} onRecipeFilter={filterChange} filtered={filtered}/>} />
      <Route exact path= "/MyRecipeBook" element={user.auth ? <MyRecipeBook recipeList = {recipeList} onRecipeSubmission = {addRecipeToDatabase} filteredById={filteredById}/> : <Home />} />
      <Route exact path= "/Login" element={!user.auth ? <Login peopleList={peopleList} recipeList={recipeList} /> : <Navigate replace to="/MyRecipeBook"/>} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
