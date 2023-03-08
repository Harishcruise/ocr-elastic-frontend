import React, { useEffect, useState } from 'react'
import Style from './Header.module.css'

function Header() {
    const [currTime,setCurrTime] = useState("")

    useEffect(()=>{
        var date = new Date();
        var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
        setCurrTime(current_time)
    })
    

  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
        <div className={Style.searchHeader}>

              <div className={Style.inputContainer}>

              <input placeholder='Search...' className={Style.input}/>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>


              </div>

            <div className={Style.uploadBtn}>
               + Bulk Upload
            </div>

            <div>
                {currTime}
            </div>
        </div>
    </div>
  )
}

export default Header