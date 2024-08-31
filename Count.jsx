import React, { useState } from "react"
import "./Count.css";

function Count() {
    const[count,setcount] = useState(0);

    const incriment = () =>{
        setcount(count + 1)
    }

    const decrement = () => {
        setcount(count - 1)
    }

    const reset = () => {
        setcount(0);
    }




  return (
    <div className="container">
      <p className="para">{count}</p>
      <button onClick={decrement} className="button">Decriment</button>
      <button onClick={incriment} className="button">Incriment</button>
      <button onClick={reset} className="button">Reset</button>
    </div>
  )
}

export default Count
