import icons from '../../images/icons.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors/selectors';
import { useEffect, useState } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/slices/favoriteSlice';
import Modal from 'components/Modal/Modal';
import styleCard from './style.module.css'



const CamperCard = ({ data }) => {

    const dispatch = useDispatch();

    const favoriteId = useSelector(selectFavorite);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const { _id, gallery, rating, reviews, location, name, price, description, adults, transmission, engine, details } = data;


    useEffect(() => {
        if (favoriteId?.some(vehicle => vehicle._id === _id)) {
            setIsFavorite(true);
        } else { setIsFavorite(false) }
    }, [favoriteId, _id]);

    const onClickHeart = () => {
        isFavorite ? dispatch(deleteFavorite(_id)) : dispatch(addFavorite(data));
    };

    const onShowMore = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };
    
    return (
        <li className={styleCard.card} id={_id}>
            <img src={gallery[0]} alt={name} className={styleCard.cardImage} width={290} height={310}/>
            <div className={styleCard.infoContainer}>
                <div className={styleCard.name}>
                    <h2 className={styleCard.cardTitle}>{name}</h2>
                    <div className={styleCard.price}>
                        <p className={styleCard.priceTitle}>&#8364;{price}.00</p>
                        <button className={styleCard.favoriteBtn} onClick={onClickHeart}>
                            <svg className={isFavorite ? styleCard.favorite  : styleCard.hart} width="24" height="24">
                              <use href={`${icons}#icon-hart`} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styleCard.rating}>
                    <div className={styleCard.starRev}>
                        <svg width="16" height="16">
                            <use href={`${icons}#icon-star`} />
                        </svg>
                        <p className={styleCard.reviwes}>{rating}({reviews.length}Reviwes)</p>
                    </div>
                    <div className={styleCard.locationDiv}>
                            <svg width="16" height="16">
                              <use href={`${icons}#icon-mappin`} />
                            </svg>
                        <p className={styleCard.locationTitle}>{location}</p>
                    </div>
                </div>
                <p className={styleCard.description}>{`${description.slice(0, 65)}...`}</p>
                <div className='details'>
                    <ul className={styleCard.detailsList}>
                        <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-users`} />
                            </svg>
                            <p className={styleCard.label}>{adults} adults</p>
                        </li>
                        <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-transmission`} />
                            </svg>
                            <p className={styleCard.label}>{transmission}</p>
                        </li>
                        <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-engine`} />
                            </svg>
                            <p className={styleCard.label}>{engine}</p>
                        </li>
                        {details.kitchen && <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-kitchen`} />
                            </svg>
                            <p className={styleCard.label}>Kitchen</p>
                        </li>}
                        {details.beds && <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-beds`} />
                            </svg>
                            <p className={styleCard.label}>{details.beds} beds</p>
                        </li>}
                        {details.airConditioner && <li className={styleCard.detailsItem}>
                            <svg width="20" height="20">
                              <use href={`${icons}#icon-ac`} />
                            </svg>
                            <p className={styleCard.label}>AC</p>
                        </li>}
                    </ul>
                    <div>
                        <button className={styleCard.details} onClick={onShowMore}>Show more</button>
                    </div>
                    <div>
                        {isOpen && <Modal data={data} isOpen={isOpen} onClose={onClose} />}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CamperCard