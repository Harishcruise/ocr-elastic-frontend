import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UploadCard.css'
import Loader from './Loader';
import JSZip from 'jszip';
import { useDispatch , useSelector } from 'react-redux';
import { LoaderDataState, setLoaderData } from '../redux/LoaderSlice';
const MAX_COUNT = 100;
function UploadCard() {
    const navigate = useNavigate()
    
    const [uploadedFiles, setUploadedFiles] = useState([])
    const [fileLimit, setFileLimit] = useState(false);
    const [uploadData, setUploadData] = useState([])
    const [uploadState,setUploadState] = useState(false)
    const [successPage,setSuccessPage] = useState(false)
    const [data,setData] = useState()
    const [listFileState,setListFileState] = useState(false)
    const [payload , setPayload] = useState({})
    const dispatch = useDispatch()
    const loaderData = useSelector(LoaderDataState)


    
    useEffect(()=>{
        let zip = new JSZip();
        for(let file of uploadedFiles){ 
            let filename = file.name
            zip.file(filename, file)
        }
        zip.generateAsync({type:'blob'}).then(async(blobdata)=>{
            
            let zipblob = new Blob([blobdata])
            var reader = new FileReader();
            reader.readAsDataURL(zipblob); 
            reader.onloadend = async function() {
            var base64data = reader.result;                
                console.log(base64data);
                var base64 = reader.result.split(',').pop();
                var name = "compressed.zip"
                var tempData = JSON.parse(localStorage.getItem("userCredentials"))
                var obj = {
                    username:tempData.username,
                    password:tempData.password,
                    index:tempData.username,
                    [name]:base64
                }
                // console.log(obj)
                setPayload(obj)
            };     
        })
    },[uploadedFiles])
    

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
        setListFileState(true)
        // console.log(payload)
    }

    const onClickHandle = async() =>{
        // setUploadState(true)
        dispatch(setLoaderData(true))
        
        await axios.post("http://172.174.180.163:8500/users/AddFile",payload)
                .then((response)=>{
            // console.log(data)
            console.log(response)
        })
        // console.log(payload)
        // setUploadState(false)
        dispatch(setLoaderData(false))
        setSuccessPage(true)
    }

    const handleFileEvent =  (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }
  return (
    <>
    <div className='searchHeader'>

    <div onClick={()=>(navigate('/Search'))} className='uploadBtn'>  Back </div>

    </div>
    {(loaderData) ? (<Loader/>):
    ((successPage) ? (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",marginTop:"200px"}}>
        <h2> Your Data has been Uploaded Successfully</h2>
        <button type="button" class="upload-button" onClick={()=>{
        setSuccessPage(false)
        setUploadedFiles([])
        setListFileState(false)
        }}> + New Uploads </button>
        </div>
    ):(
    <div style={{display:"flex",alignItems:"center"}}>
    {
        (listFileState) ? (<div style={{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"'DM Sans', sans-serif;"}}>
    <h2>List of files</h2>
    <div className='form-container-2'>
    {uploadedFiles.map(file => (
                    <div>
                        {file.name}
                    </div>
                ))}
    </div>
    </div>):""
    }
    <form className="form-container" enctype='multipart/form-data'>
	<div className="upload-files-container">
		<div className="drag-file-area">
			<span className="material-icons-outlined upload-icon"> upload your files  </span>
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
                </div>
        
		<button type="button" class="upload-button" onClick={onClickHandle}> Upload </button>
	</div>
    </form>
    </div>
    )
    )
    }
    </>
  )
}

export default UploadCard