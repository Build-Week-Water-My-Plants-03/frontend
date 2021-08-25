import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Confirmation from './Confirmation';
import axios from 'axios';
import * as yup from 'yup';
import './Signup.css';
import formSchema from './SignupValidation';

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

export default function Signup(){

    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    
    const [disabled, setDisabled] = useState(initialDisabled)

    //make sure valid user signup
    const [signupSuccess, setSignupSuccess] = useState(true)
    const [signupError, setSignupError] = useState('')

    //route to signup confirmation page once the user is a validated new user
    const history = useHistory();
    const routeToConfirmation = () => {history.push('/confirmation')}

    const postUser = () => {
        axios.post('backend api', initialFormValues)
            .then(res => {
                setSignupSuccess(res.data)
                if(signupSuccess(res) === true){
                    routeToConfirmation()
                }
                else{
                     setSignupError('error message from backend depending on specific situation')
                }
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
        postUser();//give us if the user has signed up successfully or there is an error message
        // setSignupError('error!')
    }
    //frontend validation
    useEffect(()=> {
       formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return (
        <div className='signup-form'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>
                    Create an account
                </h2>
                {signupError && <div className='error'>{signupError}</div>}
                <div className='form-inputs'>
                    <label className='form-label'>Username: </label>
                    <input
                        className='form-inputs'
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={inputChange}
                        placeholder='username'
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
                        placeholder='valid phone number'
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
                        placeholder='password'
                    />
                    {formErrors.password.length > 0 && <p className='error'>{formErrors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit' disabled={disabled}>
                    Sign up
                </button>
                <span className='form-input-login'>
                    Already have an account? Login <a href='http://localhost:3000/'>here</a>
                </span>
            </form>
        </div>
    );
}