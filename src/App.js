import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import BulkUploadPage from './pages/BulkUploadPage';
import {Routes,Route, useLocation} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation(); 
  const { pathname } = location;
  const [hide,setHide] = useState(false)
  useEffect(()=>{
    console.log(pathname)
    pathname.includes('/Upload') || pathname.includes('')  ? setHide(false) : setHide(true)
    pathname.includes('/Home') || pathname.includes('/Search') ? setHide(true) : setHide(false)
  },[pathname])

  return (
    <>
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
    </>
  );
}

export default App;
