import './App.css'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import { useContext } from 'react'

function App() {
  const context = useContext(ThemeContext);
  const currentTheme = context?.theme || 'light';

  return (
    <div className={currentTheme === "dark" ? "dark-app" : "light-app"}>
      {/* Dekho! Navbar ko ab koi PROPS nahi diye humne */}
      <Navbar /> 
      <main style={{ minHeight: '100vh', padding: '20px' }}>
        <h1>Welcome to Context API Magic</h1>
      </main>
    </div>
  )
}

export default App
