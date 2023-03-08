import { configureStore } from '@reduxjs/toolkit'
import SearchDataReducer from './redux/SearchDataSlice'
export default configureStore({
reducer: {
    SearchData: SearchDataReducer,
},
})

