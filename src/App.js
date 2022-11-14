import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  var [mode, setMode] = useState('dark'); //whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode ('light');
       document.body.style.backgroundColor = 'white';
    }
    else{
      setMode ('dark')
       document.body.style.backgroundColor = '#272c30'
    }
  }
  return (
    <>
      
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode }/> 

      <div className="container my-3">
        <TextForm heading = "Enter your text here!" mode={mode}/>
        {/* <About /> */}
      </div>
      { mode === 'dark'?document.body.style.backgroundColor = '#272c30':document.body.style.backgroundColor = 'white'}
      { mode === 'dark'?document.body.style.color = '#272c30':document.body.style.color = 'white'}
    </>
  );
}

export default App;