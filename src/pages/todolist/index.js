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
    //const [temptasks,settemptasks]=useState(null);

    const handleInputTask=(e)=>{
     setinputTask(e.target.value);
    
    }
    const addnewtask=()=>{
        if(inputTask.length!==0){
            setTasks([...tasks,inputTask]);
            return;
        }   

    }
    
    const removeHandler =()=>{
    
        if(tasks.length===0)return;
        const lastElementIndex=tasks.length-1;
      // const lastElement =history.slice(lastElementIndex);
      // setCount(lastElement[0]);
      setTasks(tasks[lastElementIndex]);
      const newTasks =tasks.slice(0,lastElementIndex);
      
      setTasks(newTasks);
     
    }
    const completeHandler=()=>{

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
            <span> {b}</span>
            <button onClick={removeHandler}>remove</button>
            <button onClick={completeHandler}> Complete</button>
            </li>
           // <listsTodo task={b}/>
           
           );
          
         })}
          </ul>
        </div>
    );
}