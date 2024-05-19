import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, selectFilters } from '../../redux/slices/vehiclesSlice';

const FilterForm = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const [localFilters, setLocalFilters] = useState(filters);

    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            if (name === 'details') {
                const details = checked
                    ? [...localFilters.details, value]
                    : localFilters.details.filter((item) => item !== value);
                setLocalFilters({ ...localFilters, details });
            } else {
                setLocalFilters({ ...localFilters, [name]: checked ? value : '' });
            }
        } else {
            setLocalFilters({ ...localFilters, [name]: value });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        dispatch(setFilters(localFilters));
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={localFilters.location}
                    onChange={handleFilterChange}
                    onKeyDown={handleKeyDown}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="details"
                            value="kitchen"
                            checked={localFilters.details.includes('kitchen')}
                            onChange={handleFilterChange}
                        />
                        Kitchen
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="details"
                            value="airConditioner"
                            checked={localFilters.details.includes('airConditioner')}
                            onChange={handleFilterChange}
                        />
                        AC
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="transmission"
                            value="automatic"
                            checked={localFilters.transmission === 'automatic'}
                            onChange={handleFilterChange}
                        />
                        Automatic
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="details"
                            value="shower"
                            checked={localFilters.details.includes('shower')}
                            onChange={handleFilterChange}
                        />
                        Shower
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="details"
                            value="TV"
                            checked={localFilters.details.includes('TV')}
                            onChange={handleFilterChange}
                        />
                        TV
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="form"
                            value="alcove"
                            checked={localFilters.form === 'alcove'}
                            onChange={handleFilterChange}
                        />
                        Alcove
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="form"
                            value="van"
                            checked={localFilters.form === 'van'}
                            onChange={handleFilterChange}
                        />
                        Van
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="form"
                            value="panelTruck"
                            checked={localFilters.form === 'panelTruck'}
                            onChange={handleFilterChange}
                        />
                        Panel Truck
                    </label>
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default FilterForm;