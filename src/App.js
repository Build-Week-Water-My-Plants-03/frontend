import './App.css';
import PlantList from './Components/PlantList/PlantList';
import PlantDetails from './Components/PlantDetails/PlantDetails';
import {Switch, Route} from 'react-router-dom';

import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Form from './Login/Form';

function App() {
  return (
    <Switch>
      <Route exact path='/'>

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
