import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Plants-Header/Header";
import Plant from "../Plant/Plant";
import PlantForm from "../PlantForm/PlantForm";
import "./Plants.css";

const Plants = () => {
    const [plant, setPlant] = useState({
        id: "",
        nickname: "",
        species: "",
        h20frequency: "",
    })

    const [plantData, setPlantData] = useState([]);
    const [reqError, setReqError] = useState(null);

    useEffect( () => {
        axios.get("fakeapi.com")
        .then(res => setPlantData(res.data))
        .catch( err => setReqError(err))
    }, [])

    return(
        <div className="container">
            <Header />
            <PlantForm />
            <section className="plantList" >
                {plantData.map( (plant, index) => <Plant key={index} nickname={plant.nickname} species={plant.species} h20frequency={plant.h20frequency} />)}
            </section>
        </div>
    )
}

export default Plants;