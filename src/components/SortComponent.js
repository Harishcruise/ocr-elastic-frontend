import React, {useEffect, useState}from 'react'
import { GrSort } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSortAlphaDown , FaSortAlphaDownAlt } from "react-icons/fa";
import Style from './SortComponent.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setDateData } from '../redux/DateFilterSlice';
import { setFileClassData } from '../redux/FileClassFilterSlice';
import { setSortData , SortDataSate } from '../redux/SortSlice';
import { DateSortDataState, setDateSortData } from '../redux/DateSortSlice';
import dayjs from 'dayjs';
import axios from 'axios';
import { SearchDataState, setData } from '../redux/SearchDataSlice';
import { setLoaderData } from '../redux/LoaderSlice';
import { setUploadedByFilterData } from '../redux/UploadedByFilterSlice';
function SortComponent() {
    const [startValue, setStartValue] = useState();
    const [endValue, setEndValue] = useState();
    const [sortState, setSortState] = useState(false)
    const [sortState2, setSortState2] = useState(false)
    const [fileClass, setFileClass] = useState(0);
    const [uploadedBy, setUploadedBy] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [uploadedByUserValue, setUploadedByUserValue] = useState([])
    
    const dispatch = useDispatch();
    const sortData = useSelector(SortDataSate)
    const dateSortData = useSelector(DateSortDataState)
    const data = useSelector(SearchDataState)

  const applyFilter = () =>{
    dispatch(setFileClassData(fileClass))
    dispatch(setDateData({
      startDate : startValue,
      endDate : endValue
    }))
    dispatch(setUploadedByFilterData(uploadedBy))
  }

  const intialData = async()=>{
    var tempData = JSON.parse(localStorage.getItem("userCredentials"))
    await axios.post("http://172.174.180.163:8081/getAllFiles",{
      index:tempData.username
    }).then((response)=>{
      dispatch(setData(response.data.hits)) 
      console.log(response)
    })
  }

  useEffect(()=>{
    var AreaFormData = new FormData();
    AreaFormData.append('username', 'admin'); //Current User
    AreaFormData.append('password', 'admin');
    axios({
      method: "post",
      url: "http://172.174.180.163:8500/users/GetAll",
      data: AreaFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response.data);
        setUploadedByUserValue(response.data)
        
      })
      .catch(function (response) {
        console.log(response);
      });
  },[])


  const handleChange = (event) => {
    setUploadedBy(event.target.value);
  };
  return (
    <>

    {
        (sortState) ?  (
            <>
            <div style={{width:"100%",height:"60px",display:"flex",alignItems:"center",justifyContent:"end"}}>
            
            <div className={Style.icon} onClick={()=>{
              setSortState(false)
            }}>
            <VscChromeClose size={20} />
            </div>
            </div>
        <div className={Style.selectContainer}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:"200px",backgroundColor:"#ffffff",borderRadius:"5px",marginTop:"8px"}}>
        <InputLabel id="demo-simple-select-label">File Classification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fileClass}
          label="File Classification"
          onChange={(e)=>{
            setFileClass(e.target.value)
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>Purchase Order</MenuItem>
          <MenuItem value={2}>Sales Order</MenuItem>
          <MenuItem value={3}>Resumes</MenuItem>
          <MenuItem value={4}>Certifications</MenuItem>
          <MenuItem value={5}>Letter of credit</MenuItem>
          <MenuItem value={6}>Goods Receipt</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:"200px",backgroundColor:"#ffffff",borderRadius:"5px",marginTop:"8px"}}>
        <InputLabel id="demo-simple-select-label">Uploaded By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={uploadedBy}
          label="File Classification"
          onChange={handleChange}
        > 
          {
            uploadedByUserValue.map((val)=> <MenuItem value={val.username}>{val.username}</MenuItem>)
          }
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker label="Start Date" value={startValue} format='DD / MM / YYYY'
          onChange={(newValue) =>{
            console.log(newValue)
            setStartValue(newValue)
            
          }} />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}> 
        <DatePicker label="End Date" value={endValue} format='DD / MM / YYYY'
          onChange={(newValue) =>{
            console.log(newValue)
            setEndValue(newValue)
          }} 

          />
      </DemoContainer>
    </LocalizationProvider>

    <div className={Style.uploadBtn} onClick={applyFilter}>
              Apply Filter
            </div>
      </div>
      </>
      ) : ((sortState2) ? (
        <>
            <div style={{width:"100%",height:"60px",display:"flex",alignItems:"center",justifyContent:"end"}}>
            
            <div className={Style.icon} onClick={()=>{
              setSortState2(false)
              // dispatch(setFileClass(0))
            }}>
            <VscChromeClose size={20} />
            </div>
            </div>
      <div className={Style.selectContainer}>
      <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setSortData()))}>
            {(sortData) === "All" ? "" : (sortData) === "Ascending" ? <FaSortAlphaDownAlt/> : <FaSortAlphaDown /> }  File Name
      </div>
      {/* <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setSortData('Descending')))}>
            <FaSortAlphaDownAlt />  Descending
      </div> */}
      <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setDateSortData()))}>
          {(dateSortData) === "All" ? "Earlier Uploaded" : (dateSortData) === "DateAscending" ? "Recent Uploaded" : "Sort by Date" }
      </div>
      {/* <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setSortData('DateDescending')))}>
          Recently Uploaded
      </div> */}
      </div>
      </>) : (
        <div className={Style.sortCont} >

        <p style={{marginRight:"20px"}}>Results Found : {data.length}</p>
        <div onClick={async()=>{
              dispatch(setFileClassData(0))
              dispatch(setDateData(''))
              dispatch(setUploadedByFilterData(''))
              dispatch(setLoaderData(true))
              await intialData()
              dispatch(setLoaderData(false))
        }} className={Style.resetBtn}>
               Reset
            </div>
        <div className={Style.sortIcon} onClick={()=>{
          setSortState2(true)
        }} >
            <BiSortAlt2 size={30} />
            </div>
      <div className={Style.sortIcon} onClick={()=>{
        setSortState(true)
        }
      }>
      <GrSort  size={25} />
      </div>
      </div> ))
    }




     



   </>
  )
}

export default SortComponent