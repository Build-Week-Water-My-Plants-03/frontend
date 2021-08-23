import axios from "axios";
import { useState } from "react";
import "./PlantForm.css";
import * as Yup from 'yup';

const PlantForm = () => {
    const [formValues, SetFormValues] = useState({
        nickname: "",
        species: "",
        h20frequency:""
    });
    const [postError, setPostError] = useState(null);
    const [valError, setValError] = useState(null);

    // implementing Yup & Declaring a schema to validate my form
    const formSchema = Yup.object().shape({
        nickname: Yup
        .string()
        .trim()
        .required(),
        species: Yup
        .string()
        .trim()
        .required('you must include a size'),
        h20frequency: Yup
        .number()
        .required()
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

    const submit = () => {
        const newPlant = {
            nickname: "",
            species: "",
            h20frequency: "",
        } 

        axios.post("fakeapi.com", newPlant)
        .then(res => {
            return res.data
        })
        .catch(err => {
            setPostError(err)
        })
        SetFormValues(

        )
    }

    return(
        <form>
            <h2>Create Your Plant!</h2>
            <label>
                Nickname
                <input value={formValues.nickname} name="nickname" onChange={inputChange} />
            </label>
            <label>
                Species
                <input value={formValues.species} name="species" onChange={inputChange} />
            </label>
            <label>
                I plan to water {formValues.nickname} every
                <input value={formValues.h20frequency} name="h20frequency" onChange={inputChange} />
                days
            </label>
        </form>
    )
}

export default PlantForm;