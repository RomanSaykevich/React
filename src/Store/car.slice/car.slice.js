import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carServices} from "../../Services";

export const allCars = createAsyncThunk(
    'cars/allCars',
    async (_, {rejectWithValue}) => {

        try {
            const cars = await carServices.getAll()
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCars: (state, action) => {
            state.cars.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteCars: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
    },
    extraReducers: {
        [allCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [allCars.fulfilled]: (state, action) => {
            state.cars = action.playload
        },
        [allCars.rejected]: (state, action) => {

        }

    }
})
const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;

export default carReducer


