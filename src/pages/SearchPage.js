import React, { useEffect, useState } from 'react'
import Style from './SearchPage.module.css'
import SortComponent from '../components/SortComponent';
import SearchCardItem from '../components/SearchCardItem';
import Loader from '../components/Loader';
import {useSelector} from 'react-redux';
import { SearchDataState } from '../redux/SearchDataSlice';
function SearchPage() {
  const [loaderState,setLoaderState] = useState(true);
  const data = useSelector(SearchDataState)
  setTimeout(()=>{
    setLoaderState(false)
  },[2500])

  useEffect(()=>{
    setLoaderState(true);
    setTimeout(()=>{
      setLoaderState(false)
    },[3000])
  },[data])
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