import React, { useState } from 'react'
import Loader from '../components/Loader';
import UploadCard from '../components/UploadCard'

function BulkUploadPage() {
  const [loaderState,setLoaderState] = useState(true);
  setTimeout(()=>{
    setLoaderState(false)
  },[2500])
  return (
    <>
    {(loaderState)? <Loader/> :  <UploadCard />}
       
    </>
  )
}

export default BulkUploadPage