import { configureStore } from '@reduxjs/toolkit'
import SearchDataReducer from './redux/SearchDataSlice'
import  FileClassFilterReducer  from './redux/FileClassFilterSlice'
import DateFilterReducer from './redux/DateFilterSlice'
import SortReducer from './redux/SortSlice'
import DateSortReducer from './redux/DateSortSlice'
import LoaderReducer from './redux/LoaderSlice'
import FileTypeReducer from './redux/FileTypeSlice'
import UploadedByFilterReducer from './redux/UploadedByFilterSlice'
import GridListReducer from './redux/GridListSlice'
export default configureStore({
reducer: {
    SearchData: SearchDataReducer,
    FileClassFilterData: FileClassFilterReducer,
    DateFilterData:DateFilterReducer,
    SortData:SortReducer,
    DateSortData:DateSortReducer,
    LoaderData:LoaderReducer,
    UploadedByFilterData:UploadedByFilterReducer,
    FileTypeData:FileTypeReducer,
    GridListData:GridListReducer
},
})

