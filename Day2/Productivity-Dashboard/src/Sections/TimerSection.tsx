import React, { useEffect, useState } from 'react'

const TimerSection = () => {
    const [date, setDate] = useState(new Date());

    useEffect(()=>{

        const timer = setInterval(()=>{
            setDate(new Date());
        },1000);

        return () => clearInterval(timer);

    },[])
    const hour = date.getHours().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    const sec = date.getSeconds().toString().padStart(2,'0');
 

  return (
    <div>
      <h2>Timer Section</h2>
     <h3>{hour}:{min}:{sec}</h3>
    </div>
  )
}

export default TimerSection
