

import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';

function App() {
  const[mode,setMode]=useState('white');//whether light mode is on or not

  const togglemode=()=>{
    if(mode ==='white'){
      setMode('black')
      document.body.style.backgroundColor='#24213e'

    }
    else{
      setMode('white')
      document.body.style.backgroundColor='white'
    }
  }

  const red=()=>{
    document.body.style.backgroundColor='red'
  }
  const grey=()=>{
    document.body.style.backgroundColor='grey'
  }
  const yellow=()=>{
    document.body.style.backgroundColor='yellow'
  }
  return (
    <>
   
     <Navbar title="TextUtilities"  mode={mode} togglemode={togglemode} colorred={red} colorgrey={grey} coloryellow={yellow}/>
     <div className="container">
   

     <TextArea heading ="Enter the text here" mode={mode}/>
     
     </div>
    
    </>
  );
}

export default App;
