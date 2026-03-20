import { useState } from 'react'
import './App.css'
import MainApp from './components/MainApp'
import { useRef } from 'react'
import { TaskProvider } from './context/TaskContext'

function App() {
  const [count, setCount] = useState(0)
  const renderCnt = useRef(0);
  renderCnt.current++;
  return (
    <>
     <TaskProvider>
        <MainApp/>
     </TaskProvider>
    </>
  )
}

export default App
