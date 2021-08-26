import axios from "axios";
import { useState, useEffect } from "react";
import "./PlantForm.css";
import * as Yup from 'yup';

const PlantForm = (props) => {

    // setting states & props needed for plant form
    const {appendPlant} = props;
    const [postError, setPostError] = useState(null);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [formValues, SetFormValues] = useState({
        nickname: "",
        species: "",
        h2o_frequency:""
    });
    const [valError, setValError] = useState({
        nickname: "",
        species: "",
        h2o_frequency:""
    });

    // implementing Yup & Declaring a schema to validate my form
    const formSchema = Yup.object().shape({
        nickname: Yup
        .string()
        .trim()
        .required("Please enter a nickname"),
        species: Yup
        .string()
        .trim()
        .required("Please enter a species"),
        h2o_frequency: Yup
        .string()
        .trim()
        .required("Please enter desired watering schedule"),
    });

    //function that will update the value of inputs and possible selects on change as well as check for validation errors and display them if necessary
    const inputChange = e => {
        const {name, value, checked, type} = e.target
        const valueToUse = type === 'checkbox' ? checked : value;

        Yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
            setValError({
                ...valError, [name]: ''
            })
        })
        .catch(err => {
            setValError({
                ...valError, [name]: err.errors[0]
            })
        })

        SetFormValues({
            ...formValues, [name]: valueToUse
        })
    }

    //Toggling Disable status on the submit button based on form validation 
    useEffect( () => {
        formSchema.isValid(formValues).then((valid) => {
            setButtonDisabled(!valid);
        })
    }, [formValues])

     //function that will submit the form to an API and reset the form values to default
    const submit = e => {
        e.preventDefault();
        const newPlant = {
            nickname: formValues.nickname,
            species: formValues.species,
            h2o_frequency: formValues.h2o_frequency,
        } 
        axios.post("https://web44-water-my-plants.herokuapp.com/api/plants", newPlant)
        .then(res => appendPlant(res.data))
        .catch(err => {
            setPostError(err)
        })
        SetFormValues({
            nickname: "",
            species: "",
            h2o_frequency: "",
        })
    }

    //return statement that will be rendered
    return(
        <div>
            <div className="errorCont">
                {postError && <p className="errorMsg">{postError}</p>}
                {valError.nickname.length > 0 && <p className="errorMsg">{valError.nickname}</p>}
                {valError.species.length > 0 && <p className="errorMsg">{valError.species}</p>}
                {valError.h2o_frequency.length > 0 && <p className="errorMsg">Number not detected</p>}
            </div>
            <form className="plantCard" onSubmit={submit}>
                <h2>Create Your Plant!</h2>
                <div className="inputCont">
                    <label>
                        Nickname
                        <input value={formValues.nickname} name="nickname" onChange={inputChange} placeholder="Ex: Mr. Lincoln"/>
                    </label>
                    <label>
                        Species
                        <input value={formValues.species} name="species" onChange={inputChange} placeholder="Ex: Rose"/>
                    </label>
                    <label>
                        Watering Details:
                        <input className="" value={formValues.h2o_frequency} name="h2o_frequency" onChange={inputChange} placeholder="Ex: an inch a week" />
                    </label>
                </div>
                <button disabled={buttonDisabled}>Create!</button>
            </form>
        </div>
    )
}

export default PlantForm;