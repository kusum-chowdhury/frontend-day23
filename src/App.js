
import './App.css';
import React, {useEffect, useState} from 'react'

function useEffectExm() {


console.log("rerender")
  const [cursorposition, setcursorposition] = useState({x:0, y:0});

  useEffect(()=>{
    const handleMove = (e) => {
      setcursorposition({x: e.clientX, y: e.clientY});
        console.log("pointer move event");
    }
     console.log("addeventListener")
    
      window.addEventListener("pointermove", handleMove);
      
      return window.removeEventListener("pointermove", handleMove);
  }, [])


  return (
    <div>x: {cursorposition.x} y:{cursorposition.y}</div>
    
  );
}

export default useEffectExm;
