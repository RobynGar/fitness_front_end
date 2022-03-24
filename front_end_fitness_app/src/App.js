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
  const [filteredRecipe, setFilteredRecipe] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  const { user } = useContext(UserContext);
  const [filteredById,setFilteredById] = useState([]);

  const fetchAllRecipes = () => {
    fetch("http://localhost:8080/food/all")
     .then(response => response.json())
     .then(data => setRecipeList(data))
  }

  // passing fetchAllRecipes function
  useEffect(fetchAllRecipes, [])

  // handleFoodFormSubmit 
  const addRecipeToDatabase = (newRecipe) => {
    fetch("http://localhost:8080/food", {
       method:"POST",
       headers:{
         "Content-Type": "application/json"
       },
       body: JSON.stringify(newRecipe)
     })
     .then(() => fetchAllRecipes())
     .catch(error => console.error(error))

  }

  // Allow users to delete a food entry from the MyRecipes page
  const deleteRecipeFromDatabase = (id) => {
    fetch(`http://localhost:8080/food/${id}`, {
      method: 'DELETE'
    })
    .then(() => fetchAllRecipes())
    .catch(error => console.error(error))
  }

  // allowing users to update their recipes
  const updateRecipeInDatabase = (id, updatedRecipe) => {
    fetch(`http://localhost:8080/food/${id}`, {
      method: 'PUT',
      headers:{
        // 'Accept':'applications/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedRecipe)
    })
    .then(() => fetchAllRecipes())
    .catch(error => console.error(error))
  }

  const filterChange = (event) => {
    setFilteredRecipe(event.value);
    
  }

const filtered = React.useMemo(() => {
  return recipeList.filter(recipe => {
    return filteredRecipe.length > 0 ? recipe.mealType.includes(filteredRecipe) : true;
  })
 }, [filteredRecipe, recipeList]);

  // --------------------PEOPLE SECTION------------------------
  useEffect(() => {
      fetch("http://localhost:8080/person/all")
      .then(response => response.json())
      .then(data => setPeopleList(data))
  },[]);

  // addPersonToDatabase logic (will be passed down as prop to Signup component)
  
  useEffect(() => {
    console.log(recipeList);
    const filteredRecipeById = recipeList.filter(recipe => recipe.person_id === parseInt(user.id))
    setFilteredById(filteredRecipeById)
  },[user,recipeList])


  return (
    <>
    <h1 id="app-title">Not My Fitness Pal</h1>
    {user.auth ? <AuthNavBar/> : <NavBar  />}
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook recipeList = {recipeList} onRecipeFilter={filterChange} filtered={filtered}/>} />
      <Route exact path= "/MyRecipeBook" element={user.auth ? <MyRecipeBook recipeList = {recipeList} onRecipeSubmission = {addRecipeToDatabase} filteredById={filteredById} deleteRecipeFromDatabase={deleteRecipeFromDatabase} updatedRecipe={updateRecipeInDatabase}/> : <Home />} />
      <Route exact path= "/Login" element={!user.auth ? <Login peopleList={peopleList} recipeList={recipeList} /> : <Navigate replace to="/MyRecipeBook"/>} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
