import { createSlice } from "@reduxjs/toolkit";

export const SortSlice = createSlice({
    name:"SortData",
    initialState:{
        value: ''
    },
    reducers:{
        setSortData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setSortData} = SortSlice.actions;

export const SortDataSate = (state) => state.SortData.value;

export default SortSlice.reducer