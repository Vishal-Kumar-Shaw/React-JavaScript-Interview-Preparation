import { useEffect } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { createContext } from "react";


export const TaskContext = createContext();

const TaskReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            return {...state, tasks:[...state.tasks, action.payload] };
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter((task)=> task.id != action.payload)};
        case 'COMPLETE_TASK':
            return {...state, tasks: state.tasks.map((task) => task.id === action.payload ? {...task, isCompleted: true} : task )};
        case 'ADD_MEMBER':
            return {...state, members: [...state.members, action.payload]};
        default:
            return state;
    }
};

const initialState = JSON.parse(localStorage.getItem('analytics_data')) || {
    tasks: [],
    members: [{id: 1, Name: "Rahul"}, {id: 1, Name: "Vishal"}]
};

export const TaskProvider = ({children}) =>{
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("analytics_data", JSON.stringify(state));
    },[state]);

    const addTask = useCallback((task) => {dispatch({type: 'ADD_TASK', payload: task})}, []);
    const deleteTask = useCallback((task) => {dispatch({type: 'DELETE_TASK', payload: id})}, []);
    const completeTask = useCallback((task) => dispatch({type:'COMPLETE_TASK', payload:id}),[]);
    const addMember = useCallback((task)=> dispatch({type: 'ADD_MEMBER', payload: {id: Date.now(), name}}),[]);

    return (
        <TaskContext.Provider value={{state, addTask, deleteTask, completeTask, addMember}}>
            {children}
        </TaskContext.Provider>
    );
};


