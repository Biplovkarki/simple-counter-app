import { useState } from "react";
// function listsTodo ({task}){
//     return(
//         <li>
//             {task}
//         </li>
//     );
// };

export function TodoList (task){
    const [tasks,setTasks]=useState([]);
    const [inputTask,setinputTask]=useState(null);
    const handleInputTask=(e)=>{
     setinputTask(e.target.value);
    
    }
    const addnewtask=()=>{
        setTasks([...tasks,inputTask]);
        
  
    }
  
    return (
        <div>
        <h1> Task Manager</h1>
        <div>
            <label>
                Enter task:
                <input  onInput={handleInputTask}/>
                <button onClick={addnewtask}>add task</button>
            </label>
        </div>
         <ul>
         {tasks.map((b) => {
           return(
          <li>
            {b}
            </li>
           // <listsTodo task={b}/>
           
           );
          
         })}
          </ul>
        </div>
    );
}