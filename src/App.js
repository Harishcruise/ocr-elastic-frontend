import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import {Routes,Route, Navigate, Link} from 'react-router-dom'
import SearchPage from './pages/SearchPage';

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
     <Route path='/Search' element={<SearchPage/>}/>
     </Routes>
    </>
  );
}

export default App;
