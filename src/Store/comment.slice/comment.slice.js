import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../Services";

const initialState = {
    comments: [],
    status: null,
    error: null
}

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            const comments = await commentService.getAll();
            return comments
        } catch (e) {
            return rejectWithValue(e.response.data.detail)
        }
    }
);

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        commentUpdate: (state, action) => {
            state.status = action.payload.comment
        }
    },
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer