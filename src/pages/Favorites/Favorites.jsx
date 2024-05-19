import CamperCardList from "components/CamperCardsList/CamperCardsList";
import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/selectors/selectors";

const Favorites = () => {

    const favorites = useSelector(selectFavorite);

    return (
        <div>
            {favorites && <CamperCardList data={favorites} />}
        </div>
    )
}

export default Favorites