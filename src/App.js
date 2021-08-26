import './App.css';
import PlantList from './Components/PlantList/PlantList';
import PlantDetails from './Components/PlantDetails/PlantDetails';
import Signup from './Components/Signup/Signup';
import Confirmation from './Components/Signup/Confirmation';
import {Switch, Route} from 'react-router-dom';
//import PrivateRoute from './Components/PrivateRoute';
import axiosWithAuth from "./Components/axiosWithAuth";

import React, {useState, useEffect} from 'react';



function App() {

tom-loginForm
  //Logout function
  const logout = () => {
    console.log("LOGOUT");
    //
    axiosWithAuth()
      .post("/api/logout")
      //.post("/logout")
      .then(res => {
        //Remove the token
        localStorage.removeItem("token");
        //Push back to login
        window.location.href = "Login";
      })

      .catch(err =>{ console.log(err);})

  }

  return (
    <Switch>
      <Route exact path='/'>

 main
      </Route>
      <Route path='/plants'>
        <PlantList />
      </Route>
      <Route path='/plants/:id'>
        <PlantDetails />
      </Route>
      {/* Main div */}
      <div className = "App">
        {/* Header to hold the logout button. */}
        <header>
          {/* basic logout button with onClick */}
          <button onClick = {logout} id = "logout" href = "#"> LOGOUT </button>
        </header>
      </div>
    </Switch>
  );
}

export default App;
/**
 * Lambda School Build Week Project
 * Water My Plants 3
 * Week of 8/23/2021
 * Collaborating Developers: 
 * *David Ellis (Unit 4)
 * *Tom Bielawski (Unit 3)
 * *Rimsha Saleem (Unit 3)
 * *Huimin Zhang (Unit 2)
 * *Kade Griffith (Unit 2)
 */