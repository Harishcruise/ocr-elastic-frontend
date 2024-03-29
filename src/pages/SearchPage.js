import React, { useEffect, useState } from 'react'
import Style from './SearchPage.module.css'
import SortComponent from '../components/SortComponent';
import SearchCardItem from '../components/SearchCardItem';
import Loader from '../components/Loader';
import {useSelector ,useDispatch} from 'react-redux';
import { DateFilterDataState } from '../redux/DateFilterSlice';
import {FileClassFilterDataState, setFileClassData} from '../redux/FileClassFilterSlice';
import { SearchDataState , setData } from '../redux/SearchDataSlice';
import axios from 'axios';
import { SortDataSate } from '../redux/SortSlice';
import { setLoaderData } from '../redux/LoaderSlice';
import { LoaderDataState } from '../redux/LoaderSlice';
import { UploadedByFilterDataState } from '../redux/UploadedByFilterSlice';
import { FileTypeDataState } from '../redux/FileTypeSlice';
import SearchCard from '../components/SearchCard';
import { GridListDataState } from '../redux/GridListSlice';
function SearchPage() {
  const dispatch = useDispatch()
  const data = useSelector(SearchDataState)
  const gridListData = useSelector(GridListDataState)
  const dateData = useSelector(DateFilterDataState)
  const sortData = useSelector(SortDataSate)
  const loaderData = useSelector(LoaderDataState)
  const FileClassFilterData = useSelector(FileClassFilterDataState)
  const FileTypeData = useSelector(FileTypeDataState);
  const uploadedByFilterData = useSelector(UploadedByFilterDataState)
  const [uploadedByUserValue, setUploadedByUserValue] = useState([])
  const [fileData,setFileData] = useState(data)
  
 

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
    intialData()
    // var AreaFormData = new FormData();
    // AreaFormData.append('username', 'admin'); //Current User
    // AreaFormData.append('password', 'admin');
    axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/GetAll",
      data: {
        username : 'admin',
        password : 'admin'
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response.data);
        setUploadedByUserValue(response.data)
        
      })
      .catch(function (response) {
        console.log(response);
      });
  },[])

  useEffect(()=>{
    if(FileClassFilterData.length === 0){
      setFileData(data)
    }
  })

  useEffect(()=>{
    var temp1 = data.filter((val)=>{
      if(FileClassFilterData.includes(1)){
          return val._source.fileClassification === "purchase_order"
      }
    })
    var temp2 = data.filter((val)=>{
      if(FileClassFilterData.includes(2)){
          return val._source.fileClassification === "sales_order"
      }
    })
    var temp3 = data.filter((val)=>{
      if(FileClassFilterData.includes(3)){
          return val._source.fileClassification === "resume"
      }
    })
    var temp4 = data.filter((val)=>{
      if(FileClassFilterData.includes(4)){
          return val._source.fileClassification === "certification"
      }
    })
    var temp5 = data.filter((val)=>{
      if(FileClassFilterData.includes(5)){
          return val._source.fileClassification === "letter_of_credit"
      }
    })
    var temp6 = data.filter((val)=>{
      if(FileClassFilterData.includes(6)){
          return val._source.fileClassification === "goods_receipt"
      }
    })
    
    // var temp7 = data.filter((val)=>{
    //   if(FileClassFilterData.includes(0)){
    //       return val
    //   }
    // })

   var array =[]
   array.push(...temp1);
   array.push(...temp2);
   array.push(...temp3);
   array.push(...temp4);
   array.push(...temp5);
   array.push(...temp6);
  //  array.push(...temp7);
   setFileData(array)
   console.log(array)
   
  },[FileClassFilterData])
  return (
    <div className={Style.container}>
    {
      (loaderData) ? (<Loader />) : (
        <><SortComponent uplodedUsername={uploadedByUserValue}/>
        <div className= {Style.cols}>
      {
        fileData.filter((val)=>{
          let tempA  = val._source.fileUploadedDate.split(' ')[0]
          let tempA1 = tempA.split("/").reverse()
          let da = new Date(""+tempA1[0]+"-"+tempA1[1]+"-"+tempA1[2])
       
          if(dateData !== '' && FileTypeData === 0){
            return (da >= dateData.startDate && da <= dateData.endDate)  && val._source.fileUploadedBy === uploadedByFilterData 
          }
          else if(dateData !== '' && FileTypeData === 1){
            console.log(String(val._source.filename).split('.').pop() === "pdf")
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileUploadedBy === uploadedByFilterData && String(val._source.filename).split('.').pop() === "pdf"
          }
          else if(dateData !== '' && FileTypeData === 2){
            console.log(String(val._source.filename).split('.').pop() === "png")
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileUploadedBy === uploadedByFilterData && String(val._source.filename).split('.').pop() === "png"
          }
          else if(dateData !== '' && FileTypeData === 3){
            return (da >= dateData.startDate && da <= dateData.endDate) && val._source.fileUploadedBy === uploadedByFilterData && String(val._source.filename).split('.').pop() === "jpg"
          }
          {/* return val._source.fileClassification === "purchase_order"  */}
        
          {/* return val */}
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
          var ext = String(val._source.filename).split('.').pop()
          return((gridListData ? <SearchCard id={val._id} fileName={val._source.filename} fileSize={val._source.fileSize} type={ext} fileClass={val._source.fileClassification} dataBase64={val._source.fileBase64} blobUrl={val._source.fileURL} uploadedBy={val._source.fileUploadedBy} uploadedDate={val._source.fileUploadedDate} /> : <SearchCardItem id={val._id} fileName={val._source.filename} fileSize={val._source.fileSize} type={ext} fileClass={val._source.fileClassification} dataBase64={val._source.fileBase64} blobUrl={val._source.fileURL} uploadedBy={val._source.fileUploadedBy} uploadedDate={val._source.fileUploadedDate} /> ) )
        })
      }
      </div>
      </>
      )
    }

    {/* <SearchCard /> */}
    
    
      
    </div>
  )
}

export default SearchPage