import React from 'react'
import { BsFillCloudDownloadFill, BsFillFileEarmarkFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Style from './SearchCard.module.css'
function SearchCard({fileName,dataBase64,type,fileClass,blobUrl,uploadedBy,uploadedDate,fileSize}) {
  var date = uploadedDate.split(' ')
  var tempSize = fileSize.toString().split('.')
  var tempSize1 = ""+tempSize[0]+tempSize[1]
  var tempSize2 = tempSize1.replace(/^0+/, '');
  var size = parseInt(tempSize2) * 0.0009765625;
    let fileString = {
        file_name: fileName,
        // file:`data:${type};base64,${dataBase64}`
        file: dataBase64
      }
    // function downloadPDF(file) {
    //     const pdfLink = file.file;
    //     const anchorElement = document.createElement('a');
    //     const fileName = `${file.file_name}`;
    //     anchorElement.href = pdfLink;
    //     anchorElement.download = fileName;
    //     anchorElement.click();
    // }

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

    function downloadFile() {
      
      window.open(blobUrl);
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
   <div className={Style.cont_Light} onClick={previewFile} >
{/* <FiDownload style={{marginLeft:"125px"}} size={20} onClick={()=>downloadPDF(fileString)}/> */}
   <div>

   <div style={{display:"flex",alignItems:"center",height:"40px"}}>

   <BsFillFileEarmarkFill color="#80AFE7" size={20} onClick={previewFile}/>




   <h5 className='text-center' style={{fontSize:"20px"}}>{fileName}</h5>

   </div>

   <div style={{display:"flex",gap:"30px"}}>

   <p>File Type: {fileClass}</p>

   <p>Uploaded By: {uploadedBy}</p>

   <p>Uploaded Date: {date[0]}</p>

   </div>

   </div>


<BsFillCloudDownloadFill  size={20} onClick={downloadFile} />




    </div>

    
    </>
  )
}

export default SearchCard