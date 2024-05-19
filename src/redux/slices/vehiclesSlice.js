import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicleData } from 'api/apiFetch';


const initialState = {
    vehicles: [],
    filters: {
        location: '',
        details: [],
        form: '',
        transmission: '',
    },
    loading: false,
    error: null,
};

const vehiclesSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        setFilters(state, action) {
            state.filters = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchVehicleData.pending, state => {
                state.loading = true;
            })
            .addCase(fetchVehicleData.fulfilled, (state, action) => {
                state.loading = false;
                state.vehicles = action.payload;
            })
            .addCase(fetchVehicleData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { resetPage, incrementPage } = vehiclesSlice.actions;
export const { setFilters } = vehiclesSlice.actions;
export const selectFilters = state => state.vehicle.filters;

export default vehiclesSlice.reducer;

