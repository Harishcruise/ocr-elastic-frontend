import { createSlice } from "@reduxjs/toolkit";

export const SortSlice = createSlice({
    name:"SortData",
    initialState:{
        value: 'All'
    },
    reducers:{
        setSortData: (state,action) =>{
            if(state.value === "All"){
                state.value = "Ascending"
            }else if(state.value === "Ascending"){
                state.value = "Descending"
            }else if(state.value === "Descending"){
                state.value = "All"
            }
        }
    }
})

export const {setSortData} = SortSlice.actions;

export const SortDataSate = (state) => state.SortData.value;

export default SortSlice.reducer