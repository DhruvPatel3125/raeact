// import React, { useState } from "react";

// function ObjectUpdate() {
//   const [car, setcar] = useState({
//     year: 2024,
//     make: "ford",
//     model: "mustang",
//   });

//   function hendlechangeyear(event){
//     setcar(cat => ({...cat,year: event.target.value}));
//   }

//   function hendlechangemake(event){
//     setcar(cat => ({...cat,make:event.target.value}))
//   }

//   function hendlechangemodel(event){
//     setcar(cat =>({...cat,model:event.target.value}))
//   }

//   return (<div>
//     <p>Your favorite car is :{car.year} {car.make} {car.model}</p>

//     <input type="number" value={car.year} onChange={ hendlechangeyear}/> <br/>
//     <input type="text" value={car.make} onChange={hendlechangemake}/><br/>
//     <input type="text" value={car.model} onChange={hendlechangemodel} /><br/>
//     </div>);
// }

// export default ObjectUpdate;