import { fetchVehicleData } from "api/apiFetch";
import CamperCardList from "components/CamperCardsList/CamperCardsList";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading, selectVehicles } from "../../redux/selectors/selectors";

const Catalog = () => {

    const dispatch = useDispatch();
    const vehicles = useSelector(selectVehicles);
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

    return (
    <>
            {loading && <Loader />}
            { error && <div>Something went wrong...</div>}
        <div>
            <CamperCardList data={vehicles.slice(0, visibleCount)} />
            {isLoadMoreVisible && (
                <button onClick={loadMore}>Load more</button>
            )}
        </div>
    </>
    )
}
export default Catalog 