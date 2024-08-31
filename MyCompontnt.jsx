import React, { useState } from "react";

function MyCompontnt() {
//   const [name, setName] = useState("guest");
//   const [age, setage] = useState(0);
//   const [college, setcollege] = useState(`college`);

//   const updatename = () => {
//     setName("dhruv");
//   };

//   const incrimentAge = () => {
//     setage(age + 1);
//   };

//   const coll = () => {
//     setcollege(`sutex`);
//   };

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <button onClick={updatename}>Set Name</button>

//       <p>Age : {age}</p>
//       <button onClick={incrimentAge}>Set age</button>

//       <p>College : {college}</p>
//       <button onClick={coll}>Set college</button>
//     </div>
//   );

  const [name, setName] = useState('guest');
  const [quntity, setquentity] = useState('1');
  const[comment,setcomment] = useState('');
  const[payment, setpayment] = useState('');

  function handlenamechange(event){
    setName(event.target.value);

  }

  function handlequentitychange(event){
    setquentity(event.target.value);
  }
   
  function handletextariachange(event){
    setcomment(event.target.value);
  }

  function handlepaymentchange(event){
    setpayment(event.target.value);
  }



  return(<div>
    <input value={name} onChange={handlenamechange} />
    <p>Name: {name}</p>

    <input value= {quntity} onChange={handlequentitychange} type="number" />
    <p>Quentity: {quntity}</p>

    <textarea value = {comment} onChange={handletextariachange} placeholder="enter dilivery instructiob"/>
    <p>Textarea: {comment}</p>
 

    <select value={payment} onChange={handlepaymentchange}>
      <option value="">select an option</option>
      <option value="Visa">Visa</option>
      <option value="MasterCard">Master-Card</option>
      <option value="Rupay">Rupay</option>
      <option value="Payble">Payble</option>

    </select>
    <p>Payment: {payment}</p>

    </div>);
}

export default MyCompontnt;
