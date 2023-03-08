import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import BulkUploadPage from './pages/BulkUploadPage';
import {Routes,Route, Navigate, Link} from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  

  return (
    <>
    {window.location.pathname === "/" || window.location.pathname === "Upload" ? "" : <>{<SideNavBar/>} {<Header/>}</>}
 
  
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
