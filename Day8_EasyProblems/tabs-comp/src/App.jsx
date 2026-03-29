import { Component } from 'react'
import './App.css'
import BusinessTab from './components/BusinessTab'
import IndividualTab from './components/IndividualTab'
import StudentsTab from './components/StudentsTab'
import Tabs from './components/Tabs'

function App() {
  const tabs=[
    {Name: "Business", Component: BusinessTab}, 
    {Name: "Students", Component: StudentsTab}, 
    {Name: "Individuals", Component: IndividualTab}
  ]
  return (
    <div className='tabs-container'>
      <Tabs tabs={tabs}/>
    </div>
  )
}

export default App
