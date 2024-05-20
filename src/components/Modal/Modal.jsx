import styleModal from './style.module.css'
import icons from '../../images/icons.svg'
import { nanoid } from 'nanoid';
import FuturesDetails from 'components/FuturesDetails/FuturesDetails';
import VehicleCharac from 'components/VehicleCharac/VehicleCharac';
import ModalForm from 'components/ModalForm/ModalForm';
import { useEffect, useState } from 'react';


const Modal = ({ data, isOpen, onClose }) => {

    const { gallery, rating, reviews, location, name, price, description, adults, transmission, engine, details } = data;

    const [visible, setVisible] = useState(true);
    const [revVisible, setRevVisible] = useState(false);

    const handleClickFuture = () => {
        setVisible(true);
        setRevVisible(false);
    }
    
    const handleClickRev = () => {
        setVisible(false);
        setRevVisible(true);
    }

    useEffect(() => {
    
        document.body.style.overflow = 'hidden';
    
    return (() => {
      
      document.body.style.overflow = '';

    })

  }, [onClose])

    return (
        <div className={isOpen ? styleModal.overlay : styleModal.hidden}>
            <div className={styleModal.modalContent}>
                <section>
                    <div className={styleModal.name}>
                        <h2>{name}</h2>
                        <button className={styleModal.modalCloseButton} onClick={onClose}>
                            <svg  width="32" height="32">
                              <use href={`${icons}#icon-close`}></use>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className={styleModal.rating}>
                            <div className={styleModal.star}>
                            <svg width="16" height="16">
                                <use href={`${icons}#icon-star`}></use>
                            </svg>
                            <p>{rating}({reviews.length}Reviwes)</p>
                            </div>
                            <div className={styleModal.star}>
                                <svg width="16" height="16">
                                  <use href={`${icons}#icon-mappin`}></use>
                                </svg>
                                <p>{location}</p>
                            </div>
                        </div>
                        <h3 className={styleModal.price}>&#8364;{price}.00</h3>
                    </div>
                </section>
                <div className={styleModal.descript}>
                    <ul className={styleModal.imageList}>
                        {gallery.map(image => (
                            <li className={styleModal.image} key={nanoid()}>
                                <img src={image} alt='camper' width='290' />
                            </li>
                        ))}
                    </ul>                
                    <p className={styleModal.description}>{description}</p>
                </div>
                <div> 
		        	<div className={styleModal.navigation}>
				        <button
					        className={styleModal.btn}
                            type="button"
                            onClick={handleClickFuture}>
                            Features
				        </button>
				        <button
					        className={styleModal.btn}
                            type="button"
                            onClick={handleClickRev}>
                            Reviews
				        </button>
			        </div>
			        <hr className={styleModal.divider} />
                </div>
                <div className={styleModal.base}>
                    <div className={visible? '' : styleModal.noVisible}>
                        <FuturesDetails adults={adults} transmission={transmission} engine={engine} details={details} />
                        <VehicleCharac form={data.form} length={data.length} width={data.width} height={data.height} tank={data.tank} consumption={data.consumption} />
                    </div>
                    <div className={revVisible? '' : styleModal.noVisible}>
                        <div>
                            {reviews.map(review => {
                                return (
                                    <ul>
                                        <li key={nanoid()}>
                                            <h4>{review.reviewer_name}</h4>
                                        </li>
                                        <li key={nanoid()}>
                                            <div className={styleModal.revRating}>
                                                <p>{review.reviewer_rating}</p>
                                                <svg width="16" height="16">
                                                    <use href={`${icons}#icon-star`}></use>
                                                </svg>
                                            </div>
                                        </li>
                                        <li key={nanoid()}>
                                            <p className={styleModal.commit}>{review.comment}</p>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styleModal.form} >
                        <ModalForm />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Modal