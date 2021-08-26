import logo from './logo.svg';
 import React from "react";
import './App.css';
import Plants from './components/Plants/Plants';
import TodoList from './components/TodoList';

import Plant from './components/Plant/Plant';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from "./containers/homepage";


import './App.css';
function App(props) {
  return (
    <Switch>
       return(
         <Route exact path='/'>
        <Homepage />
      </Route>
      <div className='todo-app'>
      <Route path='/description'>
      <TodoList />
      </Route>
    </div> 
      <Route path='/plants'>
        <Plants />
      </Route>
      <Route path='/plants/:id'>
        <Plant />
      </Route>
      
    </Switch>
  );
}

export default App;
