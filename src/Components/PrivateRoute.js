//Import statements
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Private Route function
const PrivateRoute = ({component:Component, ...rest})=> {
    return <Route {...rest} render={(props)=> {
        //If token
        if (localStorage.getItem("token")) {
            //Return the component and props
            return <Component {...props}/>
        }
        //Otherwise, return to login
        else {return <Redirect to="login"/>}
    }}/>
}

export default PrivateRoute;

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