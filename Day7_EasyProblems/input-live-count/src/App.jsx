import { useContext, useState } from 'react'
import './App.css'
import { TEXTLENGTH } from './assets/constants';
import ToggleButton from './components/ToggleButton';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const handleCharacterLength = (e) => {
    setText(e.target.value);
    setError(false);
  }

  const handleKeyDown = (e) => {
    if (text.length >= TEXTLENGTH && e.key != 'Backspace') {
      setError(true);
    }
  }

  return (
     <div className={isDark ? "dark" : "light"}>
      <ToggleButton/>
      <div className='card'>
        <h1>Typist...</h1>
        <textarea name="input-box" id="input-box" placeholder='Type something...' maxLength={TEXTLENGTH} value={text} onChange={(e) => handleCharacterLength(e)} onKeyDown={(e) => handleKeyDown(e)} />
        <p className='counter'>{text.length}/{TEXTLENGTH}</p>
        {error && <p className='error'>Character length exceeds</p>}
      </div>
    </div>
  )
}

export default App
