import { NavLink } from "react-router-dom";
import styleHeader from './style.module.css'
import icons from '../../images/icons.svg'


export const Header = () => {
    return (
        <section>
            <div className={styleHeader.container}>
                <div className={styleHeader.header}>
                    <div className={styleHeader.logo}>
                        <svg width="44" height="44">
                          <use href={`${icons}#icon-logo`}></use>
                        </svg>
                        <h1 className={styleHeader.title}>McCamper Rent</h1>
                    </div>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </nav>
                </div>
            </div>
        </section>
    )
};

export default Header;