import { createSlice } from "@reduxjs/toolkit";

export const SearchDataSlice = createSlice({
    name:"SearchData",
    initialState:{
        value: []
    },
    reducers:{
        setData: (state,action) =>{
            state.value = action.payload;
        },
        removeData: (state,action) =>{
            var temp = state.value
            var filteredArray = temp.filter((val)=> val._id !== action.payload)
            state.value = filteredArray
        }
    }
})

export const {setData,removeData} = SearchDataSlice.actions;

export const SearchDataState = (state) => state.SearchData.value;

export default SearchDataSlice.reducer