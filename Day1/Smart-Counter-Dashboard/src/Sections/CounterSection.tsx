import { useState } from 'react'

const CounterSection = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter Section</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>+ Increase</button>
      <button onClick={()=>setCount(count-1)}>- Decrease</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default CounterSection
