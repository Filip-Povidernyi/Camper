import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const favoriteInitialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: favoriteInitialState,
    reducers: {
        addFavorite(state, { payload }) {
            state.favorites.push(payload);
        },
        deleteFavorite(state, { payload }) {
            const index = state.favorites.findIndex(vehicle => vehicle._id === payload);
            state.favorites.splice(index, 1);
        }
    },
});

const persistConfig = {
    key: 'favorite',
    storage,
    whitelist: ['favorites']
};

export const favoritePersistReducer = persistReducer(
    persistConfig,
    favoriteSlice.reducer
);

export const { addFavorite, deleteFavorite } = favoriteSlice.actions;

export default favoriteSlice;