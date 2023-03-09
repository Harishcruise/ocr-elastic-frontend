import { createSlice } from "@reduxjs/toolkit";

export const FileClassFilterSlice = createSlice({
    name:"FileClassFilterData",
    initialState:{
        value: 0
    },
    reducers:{
        setFileClassData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setFileClassData} = FileClassFilterSlice.actions;

export const FileClassFilterDataState = (state) => state.FileClassFilterData.value;

export default FileClassFilterSlice.reducer