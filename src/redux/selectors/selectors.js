import { createSelector } from "@reduxjs/toolkit";

export const selectVehicles = state => state.vehicle.vehicles;
export const selectLoading = state => state.vehicle.loading;
export const selectError = state => state.vehicle.error;
export const selectFilters = state => state.vehicle.filters;
export const selectFavorite = state => state.favorite.favorites;

export const filterVehicles = createSelector(
    [selectVehicles, selectFilters],
    (vehicles, filters) => {
        const { form, transmission, details, location } = filters;

        return vehicles.filter(vehicle => {
            return (
                (!form || vehicle.form === form) &&
                (!transmission || vehicle.transmission === transmission) &&
                (!details.length ||
                    details.every(detail => vehicle.details.includes(detail))) &&
                (!location ||
                    vehicle.location.toLowerCase().includes(location.toLowerCase()))
            );
        });
    }
);