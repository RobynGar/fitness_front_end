import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from "./Login";
import Person from "./components/Person";

const LoggedInRoute = () => {
    return(
        <Routes>
            <Route path="/person" component={Person}></Route>
            <Navigate replace to='/person'></Navigate>
        </Routes>
    )
}
export default LoggedInRoute;