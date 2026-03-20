import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () =>{
    setCount(prev=>prev+1);
  }
  
  const handleDecrease = () =>{
    setCount(prev => prev -1);
  }
  
  const handleReset = () =>{
    setCount(0);
  }

  return (
    <div style={{ background: '#1B1F3A', width: '400px', borderRadius:'10px', padding:'20px'}}>
      <h1 style={{textAlign:'center', color:'white'}}>Counter App</h1>
      <div style={{display:'flex', width:'100%',  height:'80px', alignItems:'center'}}>
        <button style={{width: '30%', fontSize:'40px', borderRadius:'8px'}} onClick={handleIncrease}>+</button>
         <p style={{width: '40%', textAlign:'center', fontSize:'30px', color:'white'}}>{count}</p>
        <button style={{width: '30%', fontSize:'40px', borderRadius:'8px'}} onClick={handleDecrease}>-</button>
      </div>
      <button onClick={handleReset} style={{width: '100%', height: '60px', borderRadius:'10px', borderColor: 'none', outline: 'none', marginTop:'10px', cursor:'pointer', fontSize:'20px'}}>Reset</button>
    </div>
  )
}

export default Counter
