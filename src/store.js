import { configureStore } from '@reduxjs/toolkit'
import SearchDataReducer from './redux/SearchDataSlice'
import  FileClassFilterReducer  from './redux/FileClassFilterSlice'
import DateFilterReducer from './redux/DateFilterSlice'
import SortReducer from './redux/SortSlice'
export default configureStore({
reducer: {
    SearchData: SearchDataReducer,
    FileClassFilterData: FileClassFilterReducer,
    DateFilterData:DateFilterReducer,
    SortData:SortReducer
},
})

