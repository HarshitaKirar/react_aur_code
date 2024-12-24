import { useState } from 'react'
import './App.css'




function App() {
  const [currentValue ,setCurrentValue]=useState(15)
  
  const addOn= function(){
    if(currentValue<20){
    setCurrentValue(currentValue+1)
    }
    else{
      document.innerHTML="Current Value is greater than 20";
    }
  } 
  const remove=function(){
    if(currentValue!=0){
      setCurrentValue(currentValue -1)
    }else{
      console.log("Current value is 0")
    }
   
   
  }



  return (
    <>
     <h1>React_aur_code</h1>
      <h2>Current value :{currentValue}</h2>
      <button  className="button"
      onClick={addOn}>add on value</button>
      <button  className="button"
      onClick={remove}>decrease value</button>
       
    </>
  )
}

export default App
