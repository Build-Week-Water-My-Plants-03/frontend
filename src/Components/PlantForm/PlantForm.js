import axios from "axios";
import { useState, useEffect } from "react";
import "./PlantForm.css";
import * as Yup from 'yup';

const PlantForm = (props) => {
    const {appendPlant} = props;
    const [formValues, SetFormValues] = useState({
        nickname: "",
        species: "",
        h20frequency:""
    });
    const [postError, setPostError] = useState(null);
    const [valError, setValError] = useState({
        nickname: "",
        species: "",
        h20frequency:""
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
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
        h20frequency: Yup
        .number().positive()
        .required("Please enter a watering frequency")
    });

    const inputChange = e => {
        const {name, value, checked, type} = e.target
        const valueToUse = type === 'checkbox' ? checked : value;
        console.log(value)
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

    useEffect( () => {
        formSchema.isValid(formValues).then((valid) => {
            setButtonDisabled(!valid);
        })
    }, [formValues])

    const submit = e => {
        e.preventDefault();
        const newPlant = {
            nickname: formValues.nickname,
            species: formValues.species,
            h20frequency: formValues.h20frequency,
        } 
        appendPlant(newPlant);
        // axios.post("fakeapi.com", newPlant)
        // .then(res => {
        //     appendPlant(newPlant)
        // })
        // .catch(err => {
        //     setPostError(err)
        // })
        SetFormValues({
            nickname: "",
            species: "",
            h20frequency: "",
        })
    }

    return(
        <div>
            <div className="errorCont">
                {valError.nickname.length > 0 && <p className="errorMsg">{valError.nickname}</p>}
                {valError.species.length > 0 && <p className="errorMsg">{valError.species}</p>}
                {valError.h20frequency.length > 0 && <p className="errorMsg">Number not detected</p>}
            </div>
            <form onSubmit={submit}>
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
                        I plan to water {formValues.nickname} every
                        <input className="h20frequency" value={formValues.h20frequency} name="h20frequency" onChange={inputChange} placeholder="Ex: 7" />
                        day/s
                    </label>
                </div>
                <button disabled={buttonDisabled}>Create!</button>
            </form>
        </div>
    )
}

export default PlantForm;