import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../PlantsHeader/Header";
import Plant from "../Plant/Plant";
import PlantForm from "../PlantForm/PlantForm";
import "./PlantList.css";

const PlantList = () => {
    // setting states needed for plant list
    const [plantData, setPlantData] = useState([]);
    const [reqError, setReqError] = useState(null);

    //temporary function to test the form
    const appendPlant = newPlant => {
        setPlantData([...plantData, newPlant])
        console.log(plantData);
    }

    //API request to get the logged in user's plant data 
    useEffect( () => {
        axios.get("fakeapi.com")
        .then(res => setPlantData(res.data))
        .catch( err => setReqError(err))
    }, [])

    //return statement that will be rendered
    return(
        <div className="container">
            <Header />
            {reqError && <h2 className="errorMsg reqErrorMsg">{`Oops! Something Went Wrong... ${reqError}`}</h2>}
            <section className="plantList" >
                <PlantForm appendPlant={appendPlant} />
                {plantData.map( (plant, index) => <Plant key={index} nickname={plant.nickname} species={plant.species} h20frequency={plant.h20frequency} />)}
            </section>
        </div>
    )
}

export default PlantList;