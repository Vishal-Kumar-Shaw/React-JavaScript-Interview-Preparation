import { useEffect, useReducer } from "react"
import './Counter.css'
import { CounterReducer, initialState } from "../reducers/CounterReducer"
const Counter = () => {
  // const [count, setCount] = useState(0);
  // const [min, setMin] = useState("-100000");
  // const [max,setMax] = useState("100000");
  // const [steps, setSteps] = useState("1");
  // const [disableInc, setDisableInc] = useState(false);
  // const [disableDec, setDisableDec] = useState(false);
  // const minVal = isNaN(Number(min)) ? -Infinity : Number(min);
  // const maxVal = isNaN(Number(max)) ? Infinity : Number(max);
  // const stepVal = isNaN(Number(steps)) ? 1 : Number(steps);

  // const isIncDisabled = count + stepVal > maxVal;
  // const isDecDisabled = count - stepVal < minVal;

  const [state, dispatch] = useReducer(CounterReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem('counterState');
    if (saved) {
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counterState', JSON.stringify(state));
  }, [state])

  useEffect(() => {
    const handleOnKeyDown = (e:KeyboardEvent)=>{
      const isUndo = (e.metaKey || e.ctrlKey) && e.key === 'z';
      const isRedo = (e.metaKey || e.ctrlKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'));
      if(isUndo){
        e.preventDefault();
        dispatch({type:"UNDO"});
      }
      if(isRedo){
        console.log("Redo");
        e.preventDefault();
        dispatch({type:"REDO"})
      }
    }

     window.addEventListener("keydown",handleOnKeyDown);
     return ()=> window.removeEventListener("keydown", handleOnKeyDown)
;  }, []);
  // const handleIncrease = () =>{
  //   if(!isIncDisabled) {
  //     setCount(prev => prev+stepVal);
  //   }
  // } 

  // const handleDecrease = () =>{
  //  if(!isDecDisabled){
  //     setCount(prev => prev-stepVal);
  //  }
  // }

  // const handleReset = () =>{
  //   setCount(0);
  // }

  const minVal = Number(state.min);
  const maxVal = Number(state.max);
  const stepVal = Number(state.steps);

  const isIncDisabled = state.count + stepVal > maxVal;
  const isDecDisabled = state.count - stepVal < minVal;

  return (
    <div style={{ background: '#1B1F3A', width: '400px', borderRadius: '10px', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Advance Counter App</h1>
      <div style={{ display: 'flex', maxWidth: '100%', height: '40px', color: 'white', marginBottom: '20px', alignItems: 'center' }}>
        <p style={{ height: '30px', fontSize: '18px' }}>Max: <input className="input-counter" type="number" value={state.max} onChange={(e) => dispatch({ type: 'SET_MAX', payload: e.target.value })} /> </p>
        <p style={{ height: '30px', fontSize: '18px' }}>Min: <input className="input-counter" type="number" value={state.min} onChange={(e) => dispatch({ type: 'SET_MIN', payload: e.target.value })} /> </p>
        <p style={{ height: '30px', fontSize: '18px' }}>Step: <input className="input-counter" type="number" value={state.steps} onChange={(e) => dispatch({ type: 'SET_STEPS', payload: e.target.value })} /> </p>
      </div>
      <div style={{ display: 'flex', width: '100%', height: '80px', alignItems: 'center' }}>
        <button style={{ width: '30%', fontSize: '40px', borderRadius: '8px' }} onClick={() => dispatch({ type: 'INCREAMENT' })} disabled={isIncDisabled}>+</button>
        <p style={{ width: '40%', textAlign: 'center', fontSize: '30px', color: 'white', border: '1px dashed white', height: '58%', borderRadius: '8px', alignContent: 'center' }}>{state.count}</p>
        <button style={{ width: '30%', fontSize: '40px', borderRadius: '8px' }} onClick={() => dispatch({ type: 'DECREAMENT' })} disabled={isDecDisabled}>-</button>
      </div>
      <button onClick={() => dispatch({ type: 'RESET' })} style={{ width: '100%', height: '60px', borderRadius: '10px', borderColor: 'none', outline: 'none', marginTop: '10px', cursor: 'pointer', fontSize: '20px' }}>Reset</button>
      <div style={{width:'100%'}}>
        <button style={{width:'50%', borderRadius:'10px', height: '60px', borderColor: 'none', outline: 'none', marginTop: '10px', cursor: 'pointer', fontSize: '20px'}} onClick={()=> dispatch({type:'UNDO'})}>Undo</button>
        <button style={{width:'50%', height: '60px', borderRadius: '10px', borderColor: 'none', outline: 'none', marginTop: '10px', cursor: 'pointer', fontSize: '20px'}} onClick={()=> dispatch({type:'REDO'})}>Redo</button>
      </div>
      <div style={{
        marginTop: '15px',
        color: 'white',
        maxHeight: '150px',
        overflowY: 'auto',
        background: '#11142a',
        padding: '10px',
        borderRadius: '8px'
      }}>
        {state.history.length === 0 ? (<p style={{fontSize:'14px'}}>No actions yet</p>) : (
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            {state.history.map((item: any, index: any) => (
              <li style={{
                fontSize: '14px',
                padding: '4px 0',
                borderBottom: '1px solid #333'
              }}
                key={index}>{item}</li>
            ))}
          </ul>

        )}
      </div>
    </div>
  )
}

export default Counter
