import { useState } from 'react'
import './App.css'
import MainApp from './components/MainApp'
import { TaskProvider } from './context/TaskContext'

function App() {

  return (
    <>
    <TaskProvider>
      <MainApp/> 
    </TaskProvider>
      
    </>
  )
}

export default App
