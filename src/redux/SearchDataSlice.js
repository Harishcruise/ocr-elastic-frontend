import { createSlice } from "@reduxjs/toolkit";

export const SearchDataSlice = createSlice({
    name:"SearchData",
    initialState:{
        value: []
    },
    reducers:{
        setData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setData} = SearchDataSlice.actions;

export const SearchDataState = (state) => state.SearchData.value;

export default SearchDataSlice.reducer