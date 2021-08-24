import './App.css';
import PlantList from './Components/PlantList/PlantList';
import PlantDetails from './Components/PlantDetails/PlantDetails';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import Confirmation from './Components/Login/Confirmation';
import {Switch, Route} from 'react-router-dom';

import React, {useState, useEffect} from 'react';



function App() {

  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/confirmation'>
        <Confirmation />
      </Route>
      <Route path='/plants'>
        <PlantList />
      </Route>
      <Route path='/plants/:id'>
        <PlantDetails />
      </Route>
    </Switch>
  );
}

export default App;
