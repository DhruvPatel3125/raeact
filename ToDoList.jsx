import React, {useState} from 'react'

function ToDoList() {

    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputchange(event){
        setNewTask(event.target.value);
    }
    function addtask(){

    }

    function deletetask(index){


    }

    function movetaskup(index){

    }

    function movetaskup(index){

    }
  return (
    <div className='to-do-list'>

        <h1>TO-DO-LIST</h1>
      
        <div>
            <input type="text" 
            placeholder='Enter the Task'
            value={newTask}
            onChange={handleInputchange}/>
        <button className='add-button'
                onClick={addtask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key = {index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button'
                    onClick={() => deletetask(index)}>Delet</button>
                     <button className='delete-button'
                    onClick={() => deletetask(index)}>up</button>
                </li>
                )}
        </ol>
    </div>
  )
}

export default ToDoList
