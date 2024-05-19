import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';
import { favoritePersistReducer } from './slices/favoriteSlice';

export const store = configureStore({
    reducer: {
        vehicle: vehiclesReducer,
        favorite: favoritePersistReducer,
    },
});