import React from 'react'
import { useState } from 'react'

const TaskForm = React.memo(({ addTask, members }) => {
    const [text, setText] = useState('');
    const [member, setMember] = useState(members[0]);

    console.log("Taskform rendered");
    const handleSubmit = ()=>{
        if(!text) return;
        addTask({id:Date.now(), text, assignee: member});
        setText('');
    }

  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add new task...' />
      <select onChange={(e)=>setMember(e.target.value)}>
        {members.map(m => (<option key={m.id || m}>{m.Name || m}</option>))}

        {/* {members.map(m => (<option key={m.id || m}>{m.Name || m}</option>))} */}
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  )
})

export default TaskForm
