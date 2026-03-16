import { useEffect } from "react";
import { useCallback } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const TaskContext = createContext();


const initialState = JSON.parse(localStorage.getItem('tasks')) || {tasks:[], members: [{id:1, Name:'Rahul'},{id: 2, Name:'Vishal'}]};


const TaskReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'REMOVE_TASK':
            return {...state, tasks: state.tasks.filter((task)=>task.id != action.payload.id)};
        case 'ADD_MEMBER':
            console.log("here");
            return {...state, members: [...state.members, action.payload]};
        default:
            return state;        
    }
}

export const TaskProvider = ( {children})=>{
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(state));
    },[state])

    const addTask = useCallback( (task) =>{
        dispatch({type:'ADD_TASK', payload: task});
    }, []);

    const removeTask = useCallback((task) =>{
        dispatch({type: 'REMOVE_TASK', payload: task});
    }, [])
    
    const addMember = useCallback((member)=>{
        console.log("here1")
        dispatch({type:'ADD_MEMBER', payload: member})
    },[dispatch])

    return ( 
    <TaskContext.Provider value={{state, dispatch, addTask, removeTask, addMember}}>
        {children}
    </TaskContext.Provider>
    );
};