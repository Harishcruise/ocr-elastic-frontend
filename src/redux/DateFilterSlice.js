import { createSlice } from "@reduxjs/toolkit";

export const DateFilterSlice = createSlice({
    name:"DateFilterData",
    initialState:{
        value: 0
    },
    reducers:{
        setDateData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setDateData} = DateFilterSlice.actions;

export const DateFilterDataState = (state) => state.DateFilterData.value;

export default DateFilterSlice.reducer