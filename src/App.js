import './App.css';
import SideNavBar from './components/SideNavBar';
import Header from './components/Header';
import {Routes,Route, Navigate, Link} from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import BulkUploadPage from './pages/BulkUploadPage';

function App() {
  return (
    <>
    <SideNavBar/>
     <Header />
    <Routes>
     <Route path='/Search' element={<SearchPage/>}/>
     <Route path='/Upload' element={<BulkUploadPage/>} />
     </Routes>
    </>
  );
}

export default App;
