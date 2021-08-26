import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import * as yup from 'yup';

const initialFormValues = {
    username:'',
    password:'',
}
const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabled = true

export default function Login(){

    const [formValues, setFormValues] = useState(initialFormValues) 
    const [formErrors, setFormErrors] = useState(initialFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)
    const formSchema = yup.object().shape({
        username: yup
            .string()
            .trim()
            .required('Username is required')
            .min(3, 'Username must be 3 characters long'),
        password: yup
            .string()
            .trim()
            .required('Password is required'),
    })

    const postUser = () => {
        axios.post('backend api', {username:'',password:''})
            .then(res => {
                console.log(res)
                //here may get token from backend api
                //if validated: self.history.push('/plants')
                //if not, dispaly error message
            }).catch(err => console.error(err))
    }

    const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]:''}))
            .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

    }

    const inputChange = e => {
        const {name, value} = e.target
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    // const history = useHistory();
    // const routeToPlants = () => {history.push('/plants')};

    function handleSubmit(event) {
        event.preventDefault();
        postUser();

        setFormValues(initialFormValues);
        //if validated, route to /plants
    }

    useEffect(()=> {
       formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit} className='form'>
                <h1> Water your plant :)</h1>
                <h2>If you have an account with us, please log in now.</h2>
                <div className='form-inputs'>
                    <label className='form-label'>Username: </label>
                    <input 
                        className='form-inputs'
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={inputChange}
                        placeholder='enter your username'
                    />
                    {formErrors.username.length > 0 && <p className='error'>{formErrors.username}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password: </label>
                    <input 
                        className='form-inputs'
                        type='password'
                        name='password'
                        value={formValues.password}
                        onChange={inputChange}
                        placeholder='enter your password'
                    />
                    {formErrors.password.length > 0 && <p className='error'>{formErrors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit' disabled={disabled}>
                    Submit
                </button>
                <span className='form-input-login'>
                    Don't have an account with us? You can sign up <a href='http://localhost:3000/signup'>here</a>
                </span>
            </form>
        </div>
    );
}