import React from 'react'
import Style from './SideNavBar.module.css'
import { FiHome,FiSearch } from "react-icons/fi";

function SideNavBar() {
  return (
    <div className={Style.navContainer}>

    <div className={Style.icon}>
        <FiHome size={25} />
    </div>

    <div className={Style.icon}>
        <FiSearch size={25} />
    </div>

    </div>
  )
}

export default SideNavBar