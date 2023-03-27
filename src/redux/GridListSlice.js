import { createSlice } from "@reduxjs/toolkit";

export const GridListSlice = createSlice({
    name:"GridListData",
    initialState:{
        value: false
    },
    reducers:{
        setGridListData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setGridListData} = GridListSlice.actions;

export const GridListDataState = (state) => state.GridListData.value;

export default GridListSlice.reducer