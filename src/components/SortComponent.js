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
import { setSortData } from '../redux/SortSlice';
import dayjs from 'dayjs';
function SortComponent() {
    const [value, setValue] = React.useState(dayjs());
    const [sortState, setSortState] = useState(false)
    const [sortState2, setSortState2] = useState(false)
    const [fileClass, setFileClass] = useState('');
    const [uploadedBy, setUploadedBy] = useState('');
    const [dateValue, setDateValue] = useState('');
    const dispatch = useDispatch();

  const applyFilter = () =>{
    dispatch(setFileClassData(fileClass))
    dispatch(setDateData(dateValue))
  }


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
              // dispatch(setFileClass(0))
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
          <MenuItem value={6}>Presentation</MenuItem>
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
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
          <MenuItem value={1}>Balaji</MenuItem>
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker label="Uploaded Date" value={value}
          onChange={(newValue) =>{
            console.log(newValue)
            setValue(newValue)
            var date = (newValue.$D.toString().length === 1) ? newValue.$D.toString().padStart(2,'0') : newValue.$D.toString()
            var tempMonth = (newValue.$M + 1)
            var month = (tempMonth.toString().length === 1) ? tempMonth.toString().padStart(2,'0') : tempMonth.toString()
            var originalDate = ''+ date + "/" + month + "/" + newValue.$y;
            console.log(originalDate)
            setDateValue(originalDate)
          }} />
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
      <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setSortData('Ascending')))}>
            <FaSortAlphaDown />  Ascending
      </div>
      <div className={Style.uploadBtn} style={{gap:"10px"}} onClick={()=>(dispatch(setSortData('Descending')))}>
            <FaSortAlphaDownAlt />  Descending
      </div>
      </div>
      </>) : (
        <div className={Style.sortCont} >
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