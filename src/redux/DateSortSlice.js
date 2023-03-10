import { createSlice } from "@reduxjs/toolkit";

export const DateSortSlice = createSlice({
    name:"DateSortData",
    initialState:{
        value: 'All'
    },
    reducers:{
        setDateSortData: (state,action) =>{
            if(state.value === "All"){
                state.value = "DateAscending"
            }else if(state.value === "DateAscending"){
                state.value = "DateDescending"
            }else if(state.value === "DateDescending"){
                state.value = "All"
            }
        }
    }
})

export const {setDateSortData} = DateSortSlice.actions;

export const DateSortDataState = (state) => state.DateSortData.value;

export default DateSortSlice.reducer