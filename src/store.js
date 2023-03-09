import { configureStore } from '@reduxjs/toolkit'
import SearchDataReducer from './redux/SearchDataSlice'
import  FileClassFilterReducer  from './redux/FileClassFilterSlice'
import DateFilterReducer from './redux/DateFilterSlice'
export default configureStore({
reducer: {
    SearchData: SearchDataReducer,
    FileClassFilterData: FileClassFilterReducer,
    DateFilterData:DateFilterReducer
},
})

