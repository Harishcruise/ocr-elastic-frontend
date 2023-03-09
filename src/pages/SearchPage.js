import React, { useEffect, useState } from 'react'
import Style from './SearchPage.module.css'
import SortComponent from '../components/SortComponent';
import SearchCardItem from '../components/SearchCardItem';
import Loader from '../components/Loader';
import {useSelector ,useDispatch} from 'react-redux';
import { SearchDataState , setData } from '../redux/SearchDataSlice';
import axios from 'axios';
function SearchPage() {
  const [loaderState,setLoaderState] = useState(true);
  const dispatch = useDispatch()
  const data = useSelector(SearchDataState)

  // axios.post("http://172.174.180.163:8081/getAllFiles",{
  //   index:"ocrfilestorage"
  // }).then((response)=>{
  //   dispatch(setData(response.data.hits))
  //   setLoaderState(false)
  // })
  setTimeout(()=>{
    setLoaderState(false)
  },[2500])
  const intialData = async()=>{
    await axios.post("http://172.174.180.163:8081/getAllFiles",{
      index:"ocrfilestorage"
    }).then((response)=>{
      dispatch(setData(response.data.hits)) 
      console.log(response)
    })
  }

  useEffect(()=>{
    // setLoaderState(true)
    intialData()
    // setLoaderState(false)
  },[])
  return (
    <div className={Style.container}>
    {
      (loaderState) ? (<Loader />) : (
        <><SortComponent/>
        <div className= {Style.cols}>
      {
        data.map((val)=>{
          console.log(val)
          var ext = String(val._source.filename).split('.').pop()
          return(<SearchCardItem fileName={val._source.filename} type={ext} fileClass={val._source.fileClassification} blobUrl={val._source.fileURL} />)
        })
      }
      </div>
      </>
      )
    }
    
    
      
    </div>
  )
}

export default SearchPage