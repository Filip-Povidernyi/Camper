import CamperCard from "../CamperCard/CamperCard"

const CamperCardList = ({ data }) => {

    return (
        <ul className="list">
            {data.map(vehicle => (
                <CamperCard className='item' key={vehicle._id} data={vehicle} />))}
        </ul>
    )
}

export default CamperCardList