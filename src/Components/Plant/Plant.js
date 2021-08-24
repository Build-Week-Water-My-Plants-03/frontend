import "./Plant.css"

const Plant = (props) => {
    const {nickname, species, h20frequency} = props
    return(
        <div>
            <div className="plantCard">
                <h2>{nickname}</h2>
                <div className="plantText">
                    <p>{species}</p>
                    <p>{`${h20frequency*24} hours`}</p>
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