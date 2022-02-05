import {configureStore} from "@reduxjs/toolkit";
import kiwiReducer from "../../Slice/kiwi.slice/kiwi.slice";

const store = configureStore({
    reducer:{
        kiwi:kiwiReducer
    }
});

export default store