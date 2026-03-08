import { useState } from "react"
import type { Todo } from "../Modals/todo";

const ToDoSection = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');

    const addTodo = () =>{
        if(input.trim() !== ""){
            setTodos([...todos, {
                id: Date.now(),
                text: input,
                completed: false
            }])
            setInput('');
        }
    }
  return (
    <div>
        <h1>Todo Section</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addTodo}>Add Task</button>

      <div className="task-list">

      </div>
    </div>
  )
}

export default ToDoSection
