import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import {Routes,Route, Navigate, Link} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

function App() {
  // const [navBarState, setNavBarState] = useState(false)

  // useEffect(()=>{
  //   window.location.pathname === "/" ? setNavBarState(false) : setNavBarState(true) 
  //   console.log(window.location.pathname)
  //   console.log(navBarState)
  // })

  return (
    <>
    {window.location.pathname === "/" ? "" : <>{<SideNavBar/>} {<Header/>}</>}

    {/* {navBarState ? <SideNavBar /> : "" } */}

    {/* <SideNavBar/> */}
     {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='HomePage' element={<HomePage/>}/>
      <Route path='Search' element={<SearchPage/>}/>
     </Routes>
    </>
  );
}

export default App;
