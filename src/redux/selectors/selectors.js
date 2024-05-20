import { createSelector } from "@reduxjs/toolkit";

export const selectVehicles = state => state.vehicle.vehicles;
export const selectLoading = state => state.vehicle.loading;
export const selectError = state => state.vehicle.error;
export const selectFilters = state => state.filters;
export const selectFavorite = state => state.favorite.favorites;



export const filterVehicles = createSelector(
    [selectVehicles, selectFilters],
    (vehicles, filters) => {
        let filtered = vehicles;

        if (filters.location) {
            filtered = filtered.filter((vehicle) =>
                vehicle.location.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        if (filters.ac) {
            filtered = filtered.filter((vehicle) => vehicle.details.airConditioner > 0);
        }

        if (filters.transmission) {
            filtered = filtered.filter((vehicle) =>
                vehicle.transmission.toLowerCase() === filters.transmission.toLowerCase()
            );
        }

        if (filters.kitchen) {
            filtered = filtered.filter((vehicle) => vehicle.details.kitchen > 0);
        }

        if (filters.TV) {
            filtered = filtered.filter((vehicle) => vehicle.details.TV > 0);
        }

        if (filters.shower) {
            filtered = filtered.filter((vehicle) => vehicle.details.shower > 0 || vehicle.details.toilet);
        }

        if (filters.form) {
            filtered = filtered.filter((vehicle) =>
                vehicle.form.toLowerCase() === filters.form.toLowerCase()
            );
        }

        return filtered;
    }
);
