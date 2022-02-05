import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    kiwis: []
}
export const kiwiSlice = createSlice({
    name: 'kiwiSlice',
    initialState,
    reducers: {
        addKiwis: (state, action) => {
            state.kiwis.push({id: new Date().getTime(), name: action.payload.kiwi, status: false})
        },
        minuStat: (state, action) => {
            const kiwi = state.kiwis.find(kiwi => kiwi.id == action.payload.id);
            kiwi.status = !kiwi.status
        },
        kiwiDel: (state, action) => {
            const deleteKiwi = state.kiwis.findIndex(kiwi => kiwi.id == action.payload.id);
            state.kiwis.splice(deleteKiwi,1)
        }
    }
});

const kiwiReducer = kiwiSlice.reducer;

export const {addKiwis} = kiwiSlice.actions;
export const {minuStat} = kiwiSlice.actions;
export const {kiwiDel} = kiwiSlice.actions;
export default kiwiReducer