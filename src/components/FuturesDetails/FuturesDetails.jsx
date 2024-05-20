import styleFutureList from './style.module.css'
import icons from '../../images/icons.svg'

const FuturesDetails = ({ adults, transmission, engine, details }) => {
    
const {freezer, toilet, airConditioner, beds, radio, cd, hob, kitchen, tv, shower, microwave, gas, water} = details

    return (
        <ul className={styleFutureList.list}>
            {adults && (
                <li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-users`}></use>
                    </svg>
			        <p className={styleFutureList.label}>Adults</p>
		        </li>
			)}
			{transmission && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-transmission`}></use>
                    </svg>
                    <p className={styleFutureList.label}>{transmission}</p>
		        </li>
			)}
			{engine && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-engine`}></use>
                    </svg>
                    <p className={styleFutureList.label}>{engine}</p>
		        </li>
			)}
			{kitchen && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-kitchen`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Kitchen</p>
		        </li>
			)}
			{beds && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-beds`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Beds</p>
		        </li>
			)}
			{airConditioner && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-conditioner`}></use>
                    </svg>
                    <p className={styleFutureList.label}>AC</p>
		        </li>
			)}
			{tv && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-tv`}></use>
                    </svg>
                    <p className={styleFutureList.label}>TV</p>
		        </li>
			)}
			{cd && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-cd`}></use>
                    </svg>
                    <p className={styleFutureList.label}>CD</p>
		        </li>
			)}
			{radio && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-radio`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Radio</p>
		        </li>
			)}
			{shower && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-wc`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Shower</p>
		        </li>
			)}
			{toilet && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-toilet`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Toilet</p>
		        </li>
			)}
			{freezer && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-freezer`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Freezer</p>
		        </li>
			)}
			{hob && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-hob`}></use>
                    </svg>
                    <p className={styleFutureList.label}>hob</p>
		        </li>
			)}
			{microwave && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-microwave`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Microwave</p>
		        </li>
			)}
			{gas && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-gas`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Gas</p>
		        </li>
			)}
			{water && (
				<li className={styleFutureList.item}>
			        <svg width="20" height="20">
                      <use href={`${icons}#icon-water`}></use>
                    </svg>
                    <p className={styleFutureList.label}>Water</p>
		        </li>
			)}
		</ul>
    )
}

export default FuturesDetails