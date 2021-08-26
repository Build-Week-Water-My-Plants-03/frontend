import axios from 'axios';
//Axios with auth function
const axiosWithAuth = ()=> {
    //get the token and assign to "token"
    const token = localStorage.getItem("token");
    //Return function calls axios.create()
    return axios.create({
        headers: {authorization: token },
        baseURL: "" //Add the api here
    });
}

export default axiosWithAuth;
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
