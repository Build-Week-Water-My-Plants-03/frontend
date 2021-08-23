import './App.css';
import Plants from './Components/Plants/Plants';
import Plant from './Components/Plant/Plant';
import {Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        
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
