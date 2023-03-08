import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './UploadCard.css'
const MAX_COUNT = 100;
function UploadCard() {
    const navigate = useNavigate()
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);
    const [uploadData, setUploadData] = useState([])
    const [uploadState,setUploadState] = useState(false)
    const [successPage,setSuccessPage] = useState(false)
    

    const handleUploadFiles = files => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if (uploaded.length === MAX_COUNT) setFileLimit(true);
                if (uploaded.length > MAX_COUNT) {
                    alert(`You can only add a maximum of ${MAX_COUNT} files`);
                    setFileLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if (!limitExceeded){
            setUploadedFiles(uploaded)
        } 

    }

    const onClickHandle = () =>{
        setUploadState(true)
        var temp =[]
        uploadedFiles.map((val)=>{
            
            var reader = new FileReader();
            reader.readAsDataURL(val);
            reader.onload = function () {
            temp.push({
                [val.name]:reader.result.split(',').pop()
            })
            };
            reader.onerror = function (error) {
            console.log('Error: ', error);
            };
        })
        setUploadData(temp)
        setUploadState(false)
        setSuccessPage(true)
    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
        console.log(uploadedFiles)
        
    }
  return (
    <>
    <div className='searchHeader'>

    <div onClick={()=>(navigate('/Home'))} className='uploadBtn'>  Back </div>

    </div>
    <form className="form-container" enctype='multipart/form-data'>
	<div className="upload-files-container">
		<div className="drag-file-area">
			<span className="material-icons-outlined upload-icon"> file your upload </span>
			{/* <h3 class="dynamic-message"> Drag & drop any file here </h3> */}
			<label className="label"><span className="browse-files"> <input id="file-upload"
            type="file"
            name="fileUpload"
            multiple
            onChange={handleFileEvent}
            disabled={fileLimit}
            accept="application/pdf,image/x-png,image/jpg" class="default-file-input"/> <span class="browse-files-text"><br></br>browse file</span> <span>from device</span> </span> </label>
		</div>
		<span className="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
		<div className="file-block">
			<div className="file-info"> <span className="material-icons-outlined file-icon">description</span> <span className="file-name"> </span> | <span className="file-size">  </span> </div>
			<span className="material-icons remove-file-icon">delete</span>
			<div className="progress-bar"> </div>
		</div>
        <div style={{height:"100px",overflow:"overlay"}}>
        {uploadedFiles.map(file => (
                    <div>
                        {file.name}
                    </div>
                ))}
                </div>
        
		<button type="button" class="upload-button"> Upload </button>
	</div>
    </form>
    </>
  )
}

export default UploadCard