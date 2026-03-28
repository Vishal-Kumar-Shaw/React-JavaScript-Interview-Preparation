import './App.css'
import Modal from './components/modal'
import { useState } from 'react'

function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <button onClick={()=>setIsModal(true)}>Open up</button>
      {isModal && <Modal onClose={()=>setIsModal(false)}/>}
    </>
  )
}

export default App
