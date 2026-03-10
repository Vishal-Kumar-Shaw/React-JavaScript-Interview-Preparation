import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = ()=>{
    setTheme(prev=> prev === "light"? "dark" : "light");
  }

  const bgstyle ={
    background: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000": "#fff",
    minHeight: '100vh',
    minWidth: '100vw'
  }

  return (
    <div style={bgstyle}>
      <NavBar theme={theme} toggleTheme={toggleTheme}/>
      <main style={{padding: '20px'}}>
        <h1>Welcome to my Website</h1>
        <p>current mode: {theme.toUpperCase()}</p>
      </main>
    </div>
  )
}

export default App
