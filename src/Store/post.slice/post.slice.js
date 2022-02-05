import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../Services";


const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_,{rejectWithValue})=>{
        try {
            const posts = await postService.getAll();
            return posts
        }catch (e){
            return rejectWithValue(e.response.data.detail)
        }
    }
);

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postUpdate:(state,action)=>{
            state.postForUpdate = action.payload.post
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state)=>{
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state,action)=>{
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state,action)=>{
            state.error = action.payload
        }
    }
});
const postReducer = postSlice.reducer;

export default postReducer