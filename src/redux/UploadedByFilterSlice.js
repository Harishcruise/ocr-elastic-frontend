import { createSlice } from "@reduxjs/toolkit";

export const UploadedByFilterSlice = createSlice({
    name:"UploadedByFilterData",
    initialState:{
        value: ''
    },
    reducers:{
        setUploadedByFilterData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setUploadedByFilterData} = UploadedByFilterSlice.actions;

export const UploadedByFilterDataState = (state) => state.UploadedByFilterData.value;

export default UploadedByFilterSlice.reducer