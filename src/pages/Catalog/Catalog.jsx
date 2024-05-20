import { fetchVehicleData } from "api/apiFetch";
import CamperCardList from "components/CamperCardsList/CamperCardsList";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterVehicles, selectError, selectLoading } from "../../redux/selectors/selectors";
import FilterForm from "components/FilterForm/FilterForm";
import styleCatalog from './style.module.css';

const Catalog = () => {

    const dispatch = useDispatch();
    const vehicles = useSelector(filterVehicles);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [visibleCount, setVisibleCount] = useState(4);


    useEffect(() => {
        const data = async () => {
            dispatch(fetchVehicleData());
        }
        data();
    }, [dispatch])

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 4)
    };

    const isLoadMoreVisible = visibleCount < vehicles.length;
    const titleNoSearch = vehicles.length === 0

    return (
    <section className={styleCatalog.container}>
        {loading && <Loader />}
        {error && <div>Something went wrong...</div>}
        <div>
            <FilterForm />
        </div>
        <div className={styleCatalog.divBtn}>
            <div className={styleCatalog.listCont}>
                <CamperCardList data={ vehicles? vehicles.slice(0, visibleCount): []} />
            </div>
            <div className={styleCatalog.loadDiv}>
                {isLoadMoreVisible && (
                    <button className={styleCatalog.loadMore} onClick={loadMore}>Load more</button>
                    )}
                {titleNoSearch && <h2>No searching campers</h2>}
            </div>    
        </div>
    </section>
    )
}
export default Catalog 