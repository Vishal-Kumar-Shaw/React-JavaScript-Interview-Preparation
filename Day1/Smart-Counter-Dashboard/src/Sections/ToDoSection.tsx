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
    const handleSubmit = (e: React.FormEvent) =>{
      e.preventDefault();
      addTodo();
    }

    const deleteTodo = (id: number) =>{
      setTodos(todos.filter(todo => todo.id !== id))
    };

    const toggleTodo = (id:number) =>{
      setTodos(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t ));
    }
    // 1. Add Task
    // 2. Delete Task
    // 3. Mark Task as Done/ undo
    // 4. Count Tasks
    // 5. Show an statement if task > 5 i.e. Too many tasks piling up
    // 6. On pressing enter -> Task Added

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo Section</h1>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
      <p>Total Pending Tasks: {todos.filter(todo =>!todo.completed).length} </p>
      <div className="task-list">
       {todos.map((todo) => <SingleTodo key={todo.id} {...todo} deleteTodo={()=>deleteTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)}/>)}
       {/* {todos.map((todo) => (<div key={todo.id}>
          <p>{todo.text}</p>
          <button>Complete</button>
       </div>))} */}
      </div>
 
    </div>
  )
}

export default ToDoSection
