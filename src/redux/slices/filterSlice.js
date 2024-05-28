import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: '',
    equipment: {
        airConditioner: false,
        transmission: false,
        kitchen: false,
        TV: false,
        shower: false,
    },
    form: '',
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetFilters: () => initialState,
    },
});

export const { setFilters, resetFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;