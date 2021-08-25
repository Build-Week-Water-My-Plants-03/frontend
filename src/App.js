import './App.css';
import PlantList from './Components/PlantList/PlantList';
import PlantDetails from './Components/PlantDetails/PlantDetails';
import {Switch, Route} from 'react-router-dom';

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
