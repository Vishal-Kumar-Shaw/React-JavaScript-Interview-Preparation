import { ACTIONS } from "../constants/constants";


// type State = {
//   count: number;
//   min: string;
//   max: string;
//   steps: string;
//   history: string[];
//   undoStack: number[];
//   redoStack: number[];
// };

// type Action =
//   | { type: "INCREMENT" }
//   | { type: "DECREMENT" }
//   | { type: "UNDO" }
//   | { type: "REDO" }
//   | { type: "RESET" }
//   | { type: "SET_MIN"; payload: string }
//   | { type: "SET_MAX"; payload: string }
//   | { type: "SET_STEP"; payload: string }
//   | { type: "LOAD_STATE"; payload: State };

export const initialState = {
    count: 0,
    min: "-100000",
    max: "100000",
    steps: "1",
    history: [],
    undoStack:[],
    redoStack:[]
}
export function CounterReducer(state:any, action:any) {
  const minVal = isNaN(Number(state.min)) ? -Infinity : Number(state.min);
  const maxVal = isNaN(Number(state.max)) ? Infinity : Number(state.max);
  const stepVal = isNaN(Number(state.steps)) ? 1 : Number(state.steps);

  
  switch(action.type){
    case ACTIONS.INCREAMENT:{
        const newVal = state.count + stepVal;
        if(newVal > maxVal) return state;
        return {
            ...state,
            count: newVal,
            undoStack: [...state.undoStack, state.count],
            redoStack:[],
            history: [...state.history, `+${stepVal} -> ${newVal}`]
        };
    }

    case ACTIONS.DECREAMENT: {
        const newVal = state.count - stepVal;
        if(newVal < minVal) return state;
        return {
            ...state,
            count: newVal,
            undoStack:[...state.undoStack, state.count],
            redoStack: [],
            history: [...state.history, `-${stepVal} -> ${newVal}`]
        }
    }
    
    case ACTIONS.UNDO: {
        if(state.undoStack.length === 0) return state;
        const prev = state.undoStack[state.undoStack.length-1];
        return {
            ...state,
            count: prev,
            undoStack: state.undoStack.slice(0,-1),
            redoStack: [...state.redoStack, state.count]
        };
    }
    
    case ACTIONS.REDO: {
        if(state.redoStack.length === 0) return state;
        const next = state.redoStack[state.redoStack.length - 1];
        return {
            ...state,
            count: next,
            redoStack: state.redoStack.slice(0,-1),
            undoStack: [...state.undoStack, state.count]
        };
    }
    
    case ACTIONS.RESET: {
        return {
            ...state,
            count:0,
            undoStack:[],
            redoStack: [],
            history: []
        };
    }

    case ACTIONS.SET_MIN: {
        return {...state, min: action.payload};
    }
    case ACTIONS.SET_MAX: {
        return {...state, max: action.payload};
    }
    case ACTIONS.SET_STEPS: {
        return {...state, steps: action.payload};
    }
    case ACTIONS.LOAD_STATE: {
        return action.payload;
    }
    default:
        return state;
  }
}

