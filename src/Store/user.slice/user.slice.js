import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../Services";


const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAll();
            return users
        } catch (e) {
            return rejectWithValue(e.response.data.detail)
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userUpdate: (state, action) => {
            state.userForUpdate = action.payload.user
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});

const userReducer = userSlice.reducer;

export default userReducer