import React from 'react';
import './Signup';
import Header from '../PlantsHeader/Header'

export default function Confirmation() {
    return (
            <div className='confirmation-form'>
                <Header />
                <h2>You are successfuly signed up!</h2>
                <a href='http://localhost:3000'>you can log in now!</a>
            </div>
    )

}