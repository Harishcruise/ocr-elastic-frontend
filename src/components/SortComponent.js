import React, {useState}from 'react'
import { GrSort } from "react-icons/gr";
import { VscChromeClose } from "react-icons/vsc";
import { BiSortAlt2 } from "react-icons/bi";
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

function SortComponent() {
    const [sortState, setSortState] = useState(false)
    const [fileClass, setFileClass] = useState('');
    const [uploadedBy, setUploadedBy] = useState('');


  const handleChange = (event) => {
    setFileClass(event.target.value);
  };
  return (
    <>

    {
        (sortState) ?  (
            <>
            <div style={{width:"100%",height:"60px",display:"flex",alignItems:"center",justifyContent:"end"}}>
            
            <div className={Style.icon} onClick={()=>(setSortState(false))}>
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
          onChange={handleChange}
        >
          <MenuItem value={10}>Invoice</MenuItem>
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
          <MenuItem value={10}>Abdul</MenuItem>
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
      </div>
      </>
      ) : (<div className={Style.sortCont} >
        <div className={Style.sortIcon} >
            <BiSortAlt2 size={30} />
            </div>
      <div className={Style.sortIcon} onClick={()=>(setSortState(true))}>
      <GrSort  size={25} />
      </div>
      </div> )
    }




     



   </>
  )
}

export default SortComponent