import React, { useEffect, useState } from 'react'
import Style from './SideNavBar.module.css'
import { FiMonitor,FiSearch,FiLogOut, FiInfo} from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

function SideNavBar() {
  const [navState,setNavState] = useState("Search")
  const location = useLocation(); 
  const { pathname } = location;

  useEffect(()=>{
    if(pathname.includes('/Home')){
      setNavState('Home')
    }else if(pathname.includes('/Search')){
      setNavState('Search')
    }
  })

  return (
    <div className={Style.navContainer}>
    
    

    <Link to='Search'>
    <div onClick={()=>(setNavState("Search"))} className={navState === 'Search' ? Style.active_icon : Style.icon}>
        <FiSearch size={25} />
    </div>
    </Link>

    <Link to='Home'>
    <div onClick={()=>(setNavState("Home"))} className={navState === 'Home' ? Style.active_icon : Style.icon} >
        <FiMonitor size={25} />
    </div>
    </Link>

    <Link to='Home'>
    <div onClick={()=>(setNavState("Home"))} className={navState === 'Home' ? Style.active_icon : Style.icon} >
        <FiInfo size={25} />
    </div>
    </Link>

   <Link to='/'>
    <div className={Style.icon} style={{marginTop:"300px"}}>
        <FiLogOut size={25} />
    </div>
    </Link>

    </div>
  )
}

export default SideNavBar