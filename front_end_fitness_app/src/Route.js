import React from "react";
import { Routes } from "react-router-dom";
import LoggedInRoute from "./LoggedInRoute";
import Login from "./Login";
// class Auth{

//     constructor(){
//         this.authenticated= false;
//     }
//     login(callBack){
//         this.authenticated= true;
//         callBack();
//     }
//     logout(callBack){
//         this.authenticated= false;
//         callBack();
//     }
//     isAuthenticated(){
//         return this.authenticated;
//     }

// }

// export default new Auth();

const AuthorisationContext = React.createContext();
const Route = () => {
    const token = localStorage.getItem('token')
    return(
        <AuthorisationContext.Provider value={token}>
            {!!token ? <LoggedInRoute /> : <Login />}
        </AuthorisationContext.Provider>
    )
}
export default Route;