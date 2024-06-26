import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicleData } from 'api/apiFetch';


const initialState = {
    vehicles: [],
    loading: false,
    error: null,
};

const vehiclesSlice = createSlice({
    name: 'vehicle',
    initialState,
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
export const selectVehicles = state => state.vehicle.vehicles;

export default vehiclesSlice.reducer;




