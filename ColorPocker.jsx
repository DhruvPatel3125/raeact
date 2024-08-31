import React, { useState } from "react";

function ColorPocker() {

    const [color, setcolor] = useState('#ffffff');

    function handlecolorchange(event){
        setcolor(event.target.value);
    }

  return(<div className="color-picker-container">
            <h1>Color picker</h1>
            <div className="color-display" style={{backgroundcolor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label>select a color:</label>
            <input type="color" value={color} onChange={handlecolorchange}/>
    </div>); 
}

export default ColorPocker;
