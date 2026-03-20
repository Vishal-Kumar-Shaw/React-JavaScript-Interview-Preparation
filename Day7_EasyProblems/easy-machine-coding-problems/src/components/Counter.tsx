import { useState } from "react"
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState("-100000");
  const [max,setMax] = useState("100000");
  const [steps, setSteps] = useState("1");
  // const [disableInc, setDisableInc] = useState(false);
  // const [disableDec, setDisableDec] = useState(false);
  const minVal = isNaN(Number(min)) ? -Infinity : Number(min);
  const maxVal = isNaN(Number(max)) ? Infinity : Number(max);
  const stepVal = isNaN(Number(steps)) ? 1 : Number(steps);

  const isIncDisabled = count + stepVal > maxVal;
  const isDecDisabled = count - stepVal < minVal;

  const handleIncrease = () =>{
    if(!isIncDisabled) {
      setCount(prev => prev+stepVal);
    }
  } 
  
  const handleDecrease = () =>{
   if(!isDecDisabled){
      setCount(prev => prev-stepVal);
   }
  }
  
  const handleReset = () =>{
    setCount(0);
  }

  return (
    <div style={{ background: '#1B1F3A', width: '400px', borderRadius:'10px', padding:'20px'}}>
      <h1 style={{textAlign:'center', color:'white'}}>Counter App</h1>
      <div style={{display:'flex', maxWidth:'100%', height:'40px', color:'white', marginBottom:'20px', alignItems:'center'}}>
        <p style={{height:'30px', fontSize:'18px'}}>Max: <input className="input-counter" type="number" value={max} onChange={(e)=>setMax(e.target.value)} /> </p>
        <p style={{height:'30px', fontSize:'18px'}}>Min: <input className="input-counter" type="number" value={min} onChange={(e)=>setMin(e.target.value)}/> </p>
        <p style={{height:'30px', fontSize:'18px'}}>Step: <input className="input-counter" type="number" value={steps} onChange={(e)=>setSteps(e.target.value)} /> </p>
      </div>
      <div style={{display:'flex', width:'100%',  height:'80px', alignItems:'center'}}>
        <button style={{width: '30%', fontSize:'40px', borderRadius:'8px'}} onClick={handleIncrease} disabled={isIncDisabled}>+</button>
         <p style={{width: '40%', textAlign:'center', fontSize:'30px', color:'white', border:'1px dashed white', height:'58%', borderRadius:'8px', alignContent:'center'}}>{count}</p>
        <button style={{width: '30%', fontSize:'40px', borderRadius:'8px'}} onClick={handleDecrease} disabled={isDecDisabled}>-</button>
      </div>
      <button onClick={handleReset} style={{width: '100%', height: '60px', borderRadius:'10px', borderColor: 'none', outline: 'none', marginTop:'10px', cursor:'pointer', fontSize:'20px'}}>Reset</button>
    </div>
  )
}

export default Counter
