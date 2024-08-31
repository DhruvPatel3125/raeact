import React, { useState } from "react";

function UpdateArray() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleaddfood() {
    const newfood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";

    setFoods((f) => [...foods, newfood]);
  }
  function handleremovefood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleremovefood(index)}>{food}</li>
        ))}
      </ul>
      <input type="text" id="foodinput" placeholder="enter food name" />    
      <button onClick={handleaddfood}>Add Food</button>
    </div>
  );
}

export default UpdateArray;
