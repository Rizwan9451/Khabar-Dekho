import './App.css';
import Global from './Components/Global';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App(){
  const [mode,setMode]=useState('light')
  const toggle=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="black"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  let desh={'in':'India','us':"USA",'cn':'China','kr':'Korea', 'sa':'Saudi Arabia', 'ae':'UAE', 'it':'Itlay', 'ru':'Russia','ua':'Ukraine' }
  const [code,setCode]=useState("in");
  const changeCountry=(e)=>{
    setCode(e);
    document.getElementById("desh").innerHTML=desh[e];
  }
    return (
      <>
        <BrowserRouter>
        <Navbar name="NewsMonkey" mode={mode} toggle={toggle} changeCountry={changeCountry}/>
        <Routes>
        <Route path='/Global' element={<Global key="global" mode={mode} headline={"of Global"}/>}/>
        <Route path='/' element={<News key={code} mode={mode} country={code} category={""}/>} headline={"   "}/>
        <Route path='/general' element={<News key="general" mode={mode} country={code} category={"&category=general"} headline={"   "}/>}/>
        <Route path='/entertainment' element={<News key="entertainment" mode={mode} country={code} category={"&category=entertainment"} headline={"of Entertainment"}/>}/>
        <Route path='/sport' element={<News key="sport"  country={code} mode={mode} category={"&category=sport"} headline={"of Sport"}/>}/>
        <Route path='/technology' element={<News key="technology" country={code} mode={mode} category={"&category=technology"} headline={"of Technology"}/>}/>
        <Route path='/science' element={<News key="science" country={code} mode={mode} category={"&category=science"} headline={"of Science"}/>}/>
        <Route path='/health' element={<News key="health" country={code} mode={mode} category={"&category=health"} headline={"of Health"}/>}/>
        <Route path='/business' element={<News key="business" country={code} mode={mode} category={"&category=business"} headline={"of Business"}/>}/>
        </Routes>
        </BrowserRouter>
      </>
    )
  
}
export default App;


