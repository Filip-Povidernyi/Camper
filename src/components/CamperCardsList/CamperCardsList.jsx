import CamperCard from "../CamperCard/CamperCard"

const CamperCardList = ({ data }) => {

    return (
        <ul className="list">
            {data.map(item => (
                <CamperCard className='item' key={item._id} data={item} />))}
        </ul>
    )
}

export default CamperCardList