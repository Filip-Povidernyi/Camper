import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://66408369a7500fcf1a9df7c6.mockapi.io';

export const fetchVehicleData = createAsyncThunk(
    'vehicles/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/adverts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// import axios from 'axios';

// axios.defaults.baseURL = 'https://66408369a7500fcf1a9df7c6.mockapi.io';


// export const fetchVehicleData = async () => {
//     try {
//         const response = await axios.get('/adverts');

//         return response.data;
//     } catch (error) {
//         return console.log(error.message);
//     }
// }
