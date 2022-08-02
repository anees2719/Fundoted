import {React,useState} from 'react';
import './style.js';

import {Router,BrowserRouter,Route, Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import Discover from './components/Discover/Discover.jsx';
import LoginRegister from './components/Authentication/LoginRegister'
import Footer from './components/Footer/Footer.jsx';
import Campaign from './components/Campaign/Campaign/Campaign'
const App=()=> {
  const [user,setUser]=useState(true);
  
  return (
      <>
      <Navbar />
      
        <Routes>
              <Route  path="/*" element={<Home/>} />
              <Route  path="/discover" element={<Discover/>} />
              <Route exact path="/login" element={<LoginRegister/>} />
              <Route exact path="/contact" element={<Contact/>} />         
      </Routes>
  
      </>
       
  )
}
export default App;
