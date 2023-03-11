import React, {useEffect} from 'react';
import { LoaderDataState,setLoaderData } from '../redux/LoaderSlice.js';
import axios from 'axios';
import Dashboard from '../components/Dashboard.js'
import Loader from '../components/Loader';
import {useSelector ,useDispatch} from 'react-redux';

function HomePage() {
  // const [loaderState,setLoaderState] = useState(true);
  const dispatch = useDispatch();
  const loaderData = useSelector(LoaderDataState);
  // var AreaFormData = new FormData(); 
  // AreaFormData.append('username', 'admin'); 
  // AreaFormData.append('password', 'admin');
//   const intialData = async()=>{
//     dispatch(setLoaderData(true))

//    await axios({method: "post",url: "http://172.174.180.163:8500/users/GetAll",
//   data: AreaFormData,
//   headers: { "Content-Type": "multipart/form-data" },
// }).then(function (response) 
// {console.log(response.data);}) 
// .catch(function (response) {console.log(response);});
//     dispatch(setLoaderData(false))
//   }

//   useEffect(()=>{
//     // setLoaderState(true)
//     intialData()
//     // setLoaderState(false)
//   },[])

  return (
    <>
    {
      (loaderData) ? (<Loader />) : (
      <Dashboard></Dashboard>
      )
    } 
    </>
  )
}

export default HomePage