import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {},
    reducers: {
        setFilters(state, action) {
            return (state = action.payload);
        },
    },
});

export const { setFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;