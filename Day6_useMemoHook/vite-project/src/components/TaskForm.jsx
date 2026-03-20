import React, { useState, useEffect } from 'react'

const TaskForm = React.memo(({ addTask, members }) => {
    const [text, setText] = useState('');
    // Initial state ko string rakho (assignee ka naam)
    const [assignee, setAssignee] = useState('');

    // ⚡ Jab members load hon, pehle member ko default select karo
    useEffect(() => {
        if (members?.length > 0 && !assignee) {
            setAssignee(members[0].Name || members[0]);
        }
    }, [members, assignee]);

    console.log("Taskform rendered ⚡");

    const handleSubmit = () => {
        if (!text.trim() || !assignee) return;
        
        addTask({ 
            id: Date.now(), 
            text, 
            assignee: assignee // Ab ye sahi string jayegi
        });
        setText('');
    }

    return (
        <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Add new task...' 
            />

            <select 
                value={assignee} 
                onChange={(e) => setAssignee(e.target.value)}
            >
                {/* Default option for safety */}
                {members?.length === 0 && <option>No members available</option>}
                
                {members?.map(m => (
                    <option key={m.id || m} value={m.Name || m}>
                        {m.Name || m}
                    </option>
                ))}
            </select>

            <button onClick={handleSubmit}>Add Task</button>
        </div>
    )
})

export default TaskForm;
