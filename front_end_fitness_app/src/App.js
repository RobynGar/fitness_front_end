import React from 'react';
import './App.css';
import Home from './Home';
import RecipeBook from './RecipeBook';      //importing all additional webpages so they can be accessed from the main page
import MyRecipeBook from './MyRecipeBook';  //required us to install react-router-dom in the terminal
import Login from './Login';
import SignUp from './SignUp';
import {Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <h1>Not My Fitness Pal</h1>
    <Routes>
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/RecipeBook" element={<RecipeBook />} />
      <Route exact path= "/MyRecipeBook" element={<MyRecipeBook />} />
      <Route exact path= "/Login" element={<Login />} />
      <Route exact path= "/SignUp" element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;
