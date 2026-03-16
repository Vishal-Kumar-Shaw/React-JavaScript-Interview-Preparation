import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskForm from './TaskForm';
import MemberForm from './MemberForm';

const MainApp = () => {
  const {state, addTask, removeTask, addMember } = useContext(TaskContext);

  return (
    <div style={{padding: '20px'}}>
      <h1>Team Task Manager</h1>

        <TaskForm addTask={addTask} members={state.members}/>
        <MemberForm addMember={addMember} members={state.members}/>

        <div>
            {state.tasks.map(t => (
                <div key={t.id} style={{}}>
                        {t.text} → <b>{t.assignee}</b>
                        <button onClick={()=>removeTask(t)}>❌</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MainApp
