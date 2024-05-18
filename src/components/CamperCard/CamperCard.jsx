// import { useState } from "react";
import hartIcon from '../../images/hart.png';
import adultsIcon from '../../images/users.png';
import transmissionIcon from '../../images/transmission.png';
import engineIcon from '../../images/engine.png';
import kitchenIcon from '../../images/kitchen.png';
import bedsIcon from '../../images/beds.png';
import acIcon from '../../images/ac.png';
import star from '../../images/star.png';

const CamperCard = ({ data }) => {

    // const [favorite, setFavorite] = useState(false)
    const {_id, gallery, rating, reviews, location, name, price, description, adults, transmission, engine, details} = data
    
    return (
        <li className="card" id={_id}>
            <img src={gallery[0]} alt={name} />
            <div className='infoContainer'>
                <div className="Name">
                    <h3>{name}</h3>
                    <h3>&#8364;{price}.00</h3>
                    <button className="favoriteBtn">
                        <img src={hartIcon} className="hart" alt='Hart'/>
                    </button>
                </div>
                <div className="rating">
                    <img src={star} alt="star" />
                    <p>{rating}({reviews.length}Reviwes)</p>
                    <p>{location}</p>
                </div>
                <p>{`${description.slice(0, 65)}...`}</p>
                <div className='details'>
                    <ul className="detailsList">
                        <li className="detailsItem">
                            <img src={adultsIcon} className='icon' alt="adults" />
                            {adults} adults
                        </li>
                        <li className="detailsItem">
                            <img src={transmissionIcon} className='icon' alt="adults" />
                            {transmission}
                        </li>
                        <li className="detailsItem">
                            <img src={engineIcon} className='icon' alt="adults" />
                            {engine}
                        </li>
                        {details.kitchen && <li className="detailsItem">
                            <img src={kitchenIcon} className='icon' alt="adults" />
                            Kitchen
                        </li>}
                        {details.beds && <li className="detailsItem">
                            <img src={bedsIcon} className='icon' alt="adults" />
                            {details.beds} beds
                        </li>}
                        {details.airConditioner && <li className="detailsItem">
                            <img src={acIcon} className='icon' alt="adults" />
                            AC
                        </li>}
                    </ul>
                    <div>
                        <button className='details' onClick={()=> {console.log('Hello')}}>Show more</button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CamperCard