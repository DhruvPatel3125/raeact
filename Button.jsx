import React from "react";

function Button() {
  const handleclick = (e) => (e.target.textContent = "ouch!!");

  return <button onClick={(e) => handleclick(e)}>Click me!</button>;
}

export default Button;
