import { useEffect, useState } from "react";

const TypingIndicator = () => {
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(()=>{
        if(!input){
          setIsTyping(false);
          return;
        }
        setIsTyping(true);
        
        const interval = setTimeout(()=>{
          setIsTyping(false);
        },1000);

        return () => clearInterval(interval);

    },[input])

  return (
    <div>
      <h2>Typing Indicator Section</h2>
      <input type="text" placeholder="type something" value={input} onChange={(e)=> setInput(e.target.value)}/>
      {isTyping && <p>Typing...</p>}

    </div>
  )
}

export default TypingIndicator
