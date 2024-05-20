import CamperCard from "../CamperCard/CamperCard"
import styleList from './style.module.css';

const CamperCardList = ({ data }) => {

    return (
        <ul className={styleList.list}>
            {data.map(vehicle => (
                <CamperCard className='item' key={vehicle._id} data={vehicle} />))}
        </ul>
    )
}

export default CamperCardList