import "./Plant.css"

const Plant = (props) => {
    // destructuring props needed for each plant
    const {nickname, species, h2o_frequency} = props

    //return statement that will be rendered
    return(
        <div>
            <div className="plantCard plant">
                <h2>{nickname}</h2>
                <div className="plantText">
                    <p>{species}</p>
                    <p>{`Watering: ${h2o_frequency}`}</p>
                </div>
                <div>
                    <button className="plantBtn">Edit</button>
                    <button className="plantBtn">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default Plant;