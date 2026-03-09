import type { Todo } from "../Modals/todo";

interface Props extends Todo {
  deleteTodo: () => void;
  toggleTodo: () => void;
}
const SingleTodo = ({id,text,completed,deleteTodo, toggleTodo} : Props) => {
  return (
    <div key={id}>
      <p>{text}</p>
      <button onClick={toggleTodo}>
        {completed ? "Undo" : "Mark as Completed"}
      </button>
      <button onClick={deleteTodo} style={{ color: 'red' }}>
        Delete
      </button>
    </div>
  )
}

export default SingleTodo;
