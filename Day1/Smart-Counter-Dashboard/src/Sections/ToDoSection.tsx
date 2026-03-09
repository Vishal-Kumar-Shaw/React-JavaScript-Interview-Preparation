import { useState } from "react"
import type { Todo } from "../Modals/todo";
import SingleTodo from "../Components/SingleTodo";

const ToDoSection = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState('');
    const [doneTodos, setDoneTodos] = useState<Todo[]>([]);

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

    const deleteTodo = (id: number) =>{
      setTodos(todos.filter(todo => todo.id !== id))
    };

    const toggleTodo = (id:number) =>{
      setTodos(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t ));
    }
    
  return (
    <div>
        <h1>Todo Section</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addTodo}>Add Task</button>

      <div className="task-list">
       {todos.map((todo) => <SingleTodo key={todo.id} {...todo} deleteTodo={()=>deleteTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)}/>)}
       {/* {todos.map((todo) => (<div key={todo.id}>
          <p>{todo.text}</p>
          <button>Complete</button>
       </div>))} */}


      </div>
      <div className="done-tasks">

      </div>
    </div>
  )
}

export default ToDoSection
