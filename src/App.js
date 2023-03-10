import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import BulkUploadPage from './pages/BulkUploadPage';
import {Routes,Route, useLocation, useNavigate} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import store from './store';
function App() {
  const location = useLocation(); 
  const navigate = useNavigate();
  const { pathname } = location;
  const [hide,setHide] = useState(false)
  useEffect(()=>{
    console.log(pathname)
    pathname.includes('/Upload') || pathname.includes('')  ? setHide(false) : setHide(true)
    pathname.includes('/Home') || pathname.includes('/Search') ? setHide(true) : setHide(false)
    var tempData = JSON.parse(localStorage.getItem("user"))
    if(pathname === '/' && tempData){
      if(tempData.data.status === "success"){
        navigate('Search')
      }
    }
  },[pathname])

  return (
    <Provider store={store}>
    {/* {window.location.pathname === "/" ? "" : <>{<SideNavBar/>} {<Header/>}</>} */}

    {
      (hide) ? (<><SideNavBar/> <Header /></>):""
    }
 
  
    <Routes>
      <Route path='/' element ={<Login/>}/>
      <Route path='Home' element ={<HomePage/>}/>
     <Route path='Search' element={<SearchPage/>}/>
     <Route path='Upload' element={<BulkUploadPage/>}/>
     </Routes>
     </Provider>
  );
}

export default App;
