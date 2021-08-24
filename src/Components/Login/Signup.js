import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import Confirmation from './Confirmation';
import {Switch, Route} from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    username:'',
    password:'',
    phone:'',
}
const initialFormErrors = {
    username: '',
    password: '',
    phone:'',
}

const initialDisabled = true

export default function Signup({submitForm}){

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);

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
        phone: yup
            .string()
            .trim()
            .required('Phone number is required')
            // .matches(/^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
            // "Invalid phone number"),
    }) 
    
    const [disabled, setDisabled] = useState(initialDisabled)

    const postUser = () => {
        axios.post('backend api', {username: '', password:'', phone:''})
            .then(res => {
                console.log(res)
                //need to post new user data to backend for validation and store data

            }).catch(err => console.error(err))
    }

    const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then(()=>{setFormErrors({...formErrors, [name]:''})})
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

    function handleSubmit(event) {
        event.preventDefault();
        postUser();
        //if validated, route to /plants
    }

    useEffect(()=> {
       formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return (
        <div className='signup-form'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>
                    Create account
                </h2>
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
                    <label className='form-label'>Phone Number: </label>
                    <input 
                        className='form-inputs'
                        type='text'
                        name='phone'
                        value={formValues.phone}
                        onChange={inputChange}
                        placeholder='enter your phone number'
                    />
                    {formErrors.phone.length > 0 && <p className='error'>{formErrors.phone}</p>}
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
                    Sign up
                </button>
                {/* <Switch>
                    <Route path='/confirmation'>
                        <Confirmation success={success}/>
                    </Route>
                </Switch> */}
                <span className='form-input-login'>
                    Already have an account? Login <a href='http://localhost:3000/'>here</a>
                </span>
            </form>
        </div>
    );
}