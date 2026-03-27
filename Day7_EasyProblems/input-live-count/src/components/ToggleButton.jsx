import { useContext, useState } from 'react'
import './ToggleButton.css'
import '../App.css'
import { ThemeContext } from '../context/ThemeContext'

const ToggleButton = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  return (
    <button onClick={()=>setIsDark(!isDark)}>
      <div className={`circle ${isDark ? 'move' : ''}`}></div>
      <p className='btn-text'>{isDark ? "Light" :"Dark"}</p>
    </button>
  )
}

export default ToggleButton
