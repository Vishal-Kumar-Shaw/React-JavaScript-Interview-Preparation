import React from 'react'
import Analytics from './Analytics'
import MemberForm from './MemberForm'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

const MainApp = () => {
  return (
      <div style={{ maxWidth: "500px", margin: "20px auto", fontFamily: "sans-serif" }}>
        <h1>Team Analytics Dashboard</h1>
       <Analytics/>
        <hr />
       <MemberForm/>
        <hr />
        <TaskForm/>
        <hr />
        <TaskList />
      </div>
  )
}

export default MainApp
