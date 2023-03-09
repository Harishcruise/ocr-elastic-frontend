import React, { useEffect, useState } from 'react'
import Style from './SearchPage.module.css'
import SortComponent from '../components/SortComponent';
import SearchCardItem from '../components/SearchCardItem';
import Loader from '../components/Loader';
import {useSelector ,useDispatch} from 'react-redux';
import { DateFilterDataState } from '../redux/DateFilterSlice';
import {FileClassFilterDataState} from '../redux/FileClassFilterSlice';
import { SearchDataState , setData } from '../redux/SearchDataSlice';
import axios from 'axios';
function SearchPage() {
  const [loaderState,setLoaderState] = useState(true);
  const dispatch = useDispatch()
  const data = useSelector(SearchDataState)
  const dateData = useSelector(DateFilterDataState)
  const FileClassFilterData = useSelector(FileClassFilterDataState)

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
      index:"testing2"
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
        data.filter((val)=>{
        var arrayDate = val._source.fileUploadedDate.split(' ');
        
        {/* if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData
        } */}
        if(FileClassFilterData === 1){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "purchase_order"
        }
          return val._source.fileClassification === "purchase_order" 
        }
        if(FileClassFilterData === 2){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "purchase_order"
        }
          return val._source.fileClassification === "Sales Order" 
        }
        if(FileClassFilterData === 3){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "resume"
        }
          return val._source.fileClassification === "resume" 
        }
        if(FileClassFilterData === 4){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "Certifications"
        }
          return val._source.fileClassification === "Certifications" 
        }
        if(FileClassFilterData === 5){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "Letter of credit"
        }
          return val._source.fileClassification === "Letter of credit" 
        }
        if(FileClassFilterData === 6){
          if(arrayDate[0] === dateData){
          return val._source.fileUploadedDate.split(' ')[0] === dateData && val._source.fileClassification === "Presentation"
        }
          return val._source.fileClassification === "Presentation" 
        }
        if(FileClassFilterData === 0){
          return val
        }
        return val
        }).map((val)=>{
          console.log(val)
          var ext = String(val._source.filename).split('.').pop()
          return(<SearchCardItem fileName={val._source.filename} type={ext} fileClass={val._source.fileClassification} blobUrl={val._source.fileURL} uploadedBy={val._source.fileUploadedBy} uploadedDate={val._source.fileUploadedDate} />)
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