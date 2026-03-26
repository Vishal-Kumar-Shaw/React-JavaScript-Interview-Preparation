import { useState } from 'react'
import './ToggleButton.css'
const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={()=>setIsOn(!isOn)}>
      <div className={`circle ${isOn ? 'move' : ''}`}></div>
      {/* <p className='btn-text'>Light</p> */}
    </button>
  )
}

export default ToggleButton
