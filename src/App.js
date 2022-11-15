import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  var [mode, setMode] = useState('dark'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 
  
  const showAlert =(message,type)=> { //to show alert messages
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500)
  }
  const toggleMode = () => {
    if(mode === 'dark'){
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
    else{
      setMode ('dark')
      document.body.style.backgroundColor = '#272c30';
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <>
      
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode }/> 
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter your text here!" mode={mode}/>
        {/* <About /> */}
      </div>
      { mode === 'dark'?document.body.style.backgroundColor = '#272c30' : document.body.style.backgroundColor = 'white'}
      { mode === 'dark'?document.body.style.color = '#272c30' : document.body.style.color = 'white'}
    </>
  );
}

export default App;