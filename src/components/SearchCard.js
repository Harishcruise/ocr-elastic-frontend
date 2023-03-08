import React from 'react'
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Style from './SearchCard.module.css'
function SearchCard({fileName,dataBase64,type}) {
    console.log(type)
    let fileString = {
        file_name: fileName,
        file:`data:${type};base64,${dataBase64}`
      }
    function downloadPDF(file) {
        const pdfLink = file.file;
        const anchorElement = document.createElement('a');
        const fileName = `${file.file_name}`;
        anchorElement.href = pdfLink;
        anchorElement.download = fileName;
        anchorElement.click();
    }

    function dataURLtoFile(dataurl, filename) {
 
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
          
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      
      return new File([u8arr], filename, {type:mime});
  }

    function previewFile() {
      var files = dataURLtoFile(fileString.file,fileString.file_name);
      console.log(files)
      // var base64 = "data:"+type+";base64,"+dataBase64  ;
      var fileURL = URL.createObjectURL(files);
      window.open(fileURL);
    }

    
  return (
    <>
    <div className={Style.cont_Light}  >
    <FiDownload style={{marginLeft:"125px"}} size={20} onClick={()=>downloadPDF(fileString)}/>

    <BsFillFileEarmarkFill color="#80AFE7" size={100} onClick={previewFile}/>

    <h5 className='text-center'>{fileName}</h5>

    </div>

    
    </>
  )
}

export default SearchCard