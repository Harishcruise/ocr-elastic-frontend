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
import { SortDataSate } from '../redux/SortSlice';
import { setLoaderData } from '../redux/LoaderSlice';
import { LoaderDataState } from '../redux/LoaderSlice';
function SearchPage() {
  const [loaderState,setLoaderState] = useState(true);
  const dispatch = useDispatch()
  const data = useSelector(SearchDataState)
  const dateData = useSelector(DateFilterDataState)
  const sortData = useSelector(SortDataSate)
  const loaderData = useSelector(LoaderDataState)
  const FileClassFilterData = useSelector(FileClassFilterDataState)

  // axios.post("http://172.174.180.163:8081/getAllFiles",{
  //   index:"ocrfilestorage"
  // }).then((response)=>{
  //   dispatch(setData(response.data.hits))
  //   setLoaderState(false)
  // })
  // setTimeout(()=>{
    
  //   setLoaderState(false)
  // },[2500])
  const intialData = async()=>{
    dispatch(setLoaderData(true))
    var tempData = JSON.parse(localStorage.getItem("userCredentials"))
    await axios.post("http://172.174.180.163:8081/getAllFiles",{
      index:tempData.username
    }).then((response)=>{
      dispatch(setData(response.data.hits)) 
      console.log(response)
    })
    dispatch(setLoaderData(false))
  }

  useEffect(()=>{
    // setLoaderState(true)
    intialData()
    // setLoaderState(false)
  },[])
  return (
    <div className={Style.container}>
    {
      (loaderData) ? (<Loader />) : (
        <><SortComponent/>
        <div className= {Style.cols}>
      {
        data.filter((val)=>{

          let tempA  = val._source.fileUploadedDate.split(' ')[0]
          let tempA1 = tempA.split("/").reverse()
          let da = new Date(""+tempA1[0]+"-"+tempA1[1]+"-"+tempA1[2])


       
        if(FileClassFilterData === 1){
          if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "purchase_order" 
          }
          return val._source.fileClassification === "purchase_order" 
        }
        if(FileClassFilterData === 2){
        if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "Sales Order" 
          }
          return val._source.fileClassification === "Sales Order" 
        }
        if(FileClassFilterData === 3){
        if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "resume" 
          }
          return val._source.fileClassification === "resume" 
        }
        if(FileClassFilterData === 4){
        if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "Certifications" 
          }
          return val._source.fileClassification === "Certifications" 
        }
        if(FileClassFilterData === 5){
        if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "Letter of credit" 
          }
          return val._source.fileClassification === "Letter of credit" 
        }
        if(FileClassFilterData === 6){
        if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileClassification === "Presentation" 
          }
          return val._source.fileClassification === "Presentation" 
        }
        if(FileClassFilterData === 0){
          if(dateData !== ''){
            return (da >= dateData.startDate && da <= dateData.endDate)
          }
          return val
        }
        return val
        }).sort((a, b) => {
    let fa = a._source.filename.toLowerCase(),
        fb = b._source.filename.toLowerCase();
    let tempA  = a._source.fileUploadedDate.split(' ')[0],
        tempB =  b._source.fileUploadedDate.split(' ')[0];
    
    let tempA1 = tempA.split("/").reverse(),
        tempB1 = tempB.split("/").reverse()
     let da = new Date(""+tempA1[0]+"-"+tempA1[1]+"-"+tempA1[2]),
        db = new Date(""+tempB1[0]+"-"+tempB1[1]+"-"+tempB1[2]);
    
    if(sortData === 'Ascending'){
      if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    }

    if(sortData === 'Descending'){
      if (fa > fb) {
        return -1;
    }
    if (fa < fb) {
        return 1;
    }
    }

    if(sortData === 'DateAscending'){
      return da - db;
    }

    if(sortData === 'DateDescending'){
      return db - da;
    }
    return 0;
}).map((val)=>{
          console.log(val)
          var ext = String(val._source.filename).split('.').pop()
          return(<SearchCardItem fileName={val._source.filename} type={ext} fileClass={val._source.fileClassification} dataBase64={val._source.fileBase64} blobUrl={val._source.fileURL} uploadedBy={val._source.fileUploadedBy} uploadedDate={val._source.fileUploadedDate} />)
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