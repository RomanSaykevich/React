import {configureStore} from "@reduxjs/toolkit";
import carReducer from "../car.slice/car.slice";
import userReducer from "../user.slice/user.slice";
import postReducer from "../post.slice/post.slice";
import commentReducer from "../comment.slice/comment.slice";

const store = configureStore({
    reducer:{
        carReducer,
        userReducer,
        postReducer,
        commentReducer
    }
});
export default store