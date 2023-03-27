import { createSlice } from "@reduxjs/toolkit";

export const FileTypeSlice = createSlice({
    name:"FileTypeData",
    initialState:{
        value: 0
    },
    reducers:{
        setFileTypeData: (state,action) =>{
            state.value = action.payload;
        }
    }
})

export const {setFileTypeData} = FileTypeSlice.actions;

export const FileTypeDataState = (state) => state.FileTypeData.value;

export default FileTypeSlice.reducer