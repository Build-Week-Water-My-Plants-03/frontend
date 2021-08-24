//Import statements
import axios from "axios";
import React, {useState} from "react";
import { useHistory } from "react-router";

//Login function
const Login = () => {
  
  //Declare and init credential state
  const [credentials, setCredentials] = useState({
      username: "",
      password: ""
  })
  
  //Declare and init error state
  const [error, setError] = useState("");
  //Declare variable to hold base URL
  const baseUrl = "";
  //Destructure push from useHistory to redirect
  const {push} = useHistory();

  //Change handler function, event parameter
  const handleChange = (event) => {
    //Set credential state
    setCredentials({
      //Spread in current state of credentials
      ...credentials,
      [event.target.name]: event.target.value
     })
  }

  //Login function, event as parameter
  const login = (event) => {
    //Prevent default behavior
    event.preventDefault();
    //Axios post calls server, interpolate baseURL, pass in credentials state
    axios.post(`${baseUrl}/login`, credentials)
    //then set the token
    .then(res =>{
      //localStorage.setItem("token", res.data.token);
      localStorage.setItem("token", res.data.payload);
      //Redirect to protected content
      push("/");
    })

    //Set the error state
    .catch(error => {
      setError(error);
      console.log(error);
    })
  }

    return (
      <div>
        <h1>LoginForm We can remove this text completely</h1>
        <div data-testid="loginForm" className="login-form">
          
        </div>
  
        {/* Show any errors */}
        <p id="error" className="error">{error}</p>

        {/* Begin the login Form */}
        <form onSubmit={login}>
          <input
            id = "username"
            type = "text"
            name = "username"
            value = {credentials.username}
            onChange = {handleChange}
            placeholder = {"username"}
          />
          <input
            id = "password"
            type ="password"
            name ="password"
            value ={credentials.password}
            onChange ={handleChange}
            placeholder = {"password"}
          />
          <button id = "submit">Login</button>
        </form>
      </div>
    );
  }

//Export statement
export default Login;

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