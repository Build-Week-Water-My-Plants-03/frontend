import "./Plant.css"

const Plant = (props) => {
    // destructuring props needed for each plant
    const {nickname, species, h20frequency} = props

    //return statement that will be rendered
    return(
        <div>
            <div className="plantCard plant">
                <h2>{nickname}</h2>
                <div className="plantText">
                    <p>{species}</p>
                    <p>{`Water Every ${h20frequency} Days`}</p>
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