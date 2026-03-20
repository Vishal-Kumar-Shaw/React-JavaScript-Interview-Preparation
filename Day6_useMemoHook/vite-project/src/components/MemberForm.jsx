import React from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import { useState } from 'react';

const MemberForm = React.memo(({addMember, members}) => {
  const [name, setName] = useState('');

  const handleSubmit = ()=>{
    console.log("handlesubmit member")
        if (!name.trim()) return;
        addMember({id:Date.now(), Name: name});
        setName('');
  }

  return (
    <div>
      <input type="text" placeholder='Enter Member Name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handleSubmit}>Add Member</button>
       <p>Current Count: {members?.length}</p>
    </div>
  )
});

export default MemberForm
