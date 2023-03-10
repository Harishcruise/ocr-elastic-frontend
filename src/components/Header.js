import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SearchDataState, setData } from '../redux/SearchDataSlice';
import Style from './Header.module.css'

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data = useSelector(SearchDataState)
    const [currTime,setCurrTime] = useState("")
    const [input , setInput] = useState("")
    
    const elasticSearch = async (e) =>{

    
      await axios.post("http://172.174.180.163:8081/OCRFileSearch",{
      index:"testing4",    
      query:e
      }).then((response)=>{
        // console.log(response)
              console.log(response.data.hits)
              dispatch(setData(response.data.hits))
          console.log(data)
      })
      setInput("")
      
  }
  
    const onEnter = (e) => {
      
         if (e.key === 'Enter') {
          elasticSearch(input)
          // e.preventDefault()
          navigate("/Search")
        }
    }

    setInterval(()=>{
        var date = new Date();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        setCurrTime(current_time)
    },2000)
    

  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",position:"fixed",zIndex:"10"}}>
        <div className={Style.searchHeader}>

              <div className={Style.inputContainer}>

              <input placeholder='Search...' className={Style.input} onChange={(e)=> setInput(e.target.value)}
            onKeyDown={onEnter} value={input}/>
              <svg onClick={()=>(elasticSearch(input))} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>


              </div>
          
            <div onClick={()=>(navigate('Upload'))} className={Style.uploadBtn}>
               + Upload
            </div>
            
            <div className={Style.time}>
                {currTime}
            </div>
        </div>
    </div>
  )
}

export default Header