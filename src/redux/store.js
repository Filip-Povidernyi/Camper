import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';

export const store = configureStore({
    reducer: {
        vehicle: vehiclesReducer,
    },
});