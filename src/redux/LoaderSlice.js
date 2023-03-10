import { createSlice } from "@reduxjs/toolkit";

export const LoaderSlice = createSlice({
    name:"LoaderData",
    initialState:{
        value: false
    },
    reducers:{
        setLoaderData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setLoaderData} = LoaderSlice.actions;

export const LoaderDataState = (state) => state.LoaderData.value;

export default LoaderSlice.reducer