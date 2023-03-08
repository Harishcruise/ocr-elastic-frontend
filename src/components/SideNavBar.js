import React, { useState } from 'react'
import Style from './SideNavBar.module.css'
import { FiHome,FiSearch,FiLogOut } from "react-icons/fi";

function SideNavBar() {
  const [navState,setNavState] = useState("Home")
  return (
    <div className={Style.navContainer}>

    <div onClick={()=>(setNavState("Home"))} className={navState === 'Home' ? Style.active_icon : Style.icon} >
        <FiHome size={25} />
    </div>

    <div onClick={()=>(setNavState("Search"))} className={navState === 'Search' ? Style.active_icon : Style.icon}>
        <FiSearch size={25} />
    </div>

    <div className={Style.icon} style={{marginTop:"300px"}}>
        <FiLogOut size={25} />
    </div>

    </div>
  )
}

export default SideNavBar