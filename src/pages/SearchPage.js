import React from 'react'
import SearchCard from '../components/SearchCard'
import Style from './SearchPage.module.css'
import { GrSort } from "react-icons/gr";
import SortComponent from '../components/SortComponent';
function SearchPage() {
  return (
    <div className={Style.container}>
    {/* <div className={Style.sortCont}>
      <div className={Style.sortIcon}>
      <GrSort  size={25} />
      </div>
    </div> */}
    <SortComponent/>
      <SearchCard />
    </div>
  )
}

export default SearchPage