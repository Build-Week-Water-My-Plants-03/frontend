import './App.css';
import Plants from './Components/Plants/Plants';
import Plant from './Components/Plant/Plant';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import axiosWithAuth from "./Components/axiosWithAuth";

function App() {

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
        window.location.href = "LogIn";
      })

      .catch(err =>{ console.log(err);})

  }

  return (
    <Switch>
      {/* Probably need protected route defined here. Might also need to 
      put the switch inside a router...just a thought. Will correct the 
      route path and component Tuesday*/}
      <PrivateRoute exact path="/plant" component={Plants} />
      <Route exact path='/'>

      </Route>
      <Route path='/plants'>
        <Plants />
      </Route>
      <Route path='/plants/:id'>
        <Plant />
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