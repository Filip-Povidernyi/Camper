import { configureStore } from '@reduxjs/toolkit';
import vehiclesReducer from './slices/vehiclesSlice';
import { favoritePersistReducer } from './slices/favoriteSlice';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './slices/filterSlice';


export const store = configureStore({
    reducer: {
        vehicle: vehiclesReducer,
        favorite: favoritePersistReducer,
        filters: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);