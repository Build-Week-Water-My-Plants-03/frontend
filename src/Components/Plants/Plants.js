import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../PlantsHeader/Header";
import Plant from "../Plant/Plant";
import PlantForm from "../PlantForm/PlantForm";
import "./Plants.css";

const Plants = () => {

    const [plantData, setPlantData] = useState([]);
    const [reqError, setReqError] = useState(null);

    const appendPlant = newPlant => {
        setPlantData([...plantData, newPlant])
        console.log(plantData);
    }

    useEffect( () => {
        axios.get("fakeapi.com")
        .then(res => setPlantData(res.data))
        .catch( err => setReqError(err))
    }, [])

    return(
        <div className="container">
            <Header />
            <section className="plantList" >
            <PlantForm appendPlant={appendPlant} />
                {plantData.map( (plant, index) => <Plant key={index} nickname={plant.nickname} species={plant.species} h20frequency={plant.h20frequency} />)}
            </section>
        </div>
    )
}

export default Plants;