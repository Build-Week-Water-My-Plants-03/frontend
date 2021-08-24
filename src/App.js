import logo from './logo.svg';
import React from "react";
import './App.css';
import Plants from './components/Plants/Plants';
import Plant from './components/Plant/Plant';
import {Switch, Route} from 'react-router-dom';
import { Homepage } from "./containers/homepage";
function App(props) {
  return (
    <Switch>
       return <Homepage />;
      <Route path='/'>
        
      </Route>
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
