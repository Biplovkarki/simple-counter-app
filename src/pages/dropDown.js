import { useState } from "react";
const Rangs=["white","blue","red","green","yellow","skyblue","orange"];
export const DropDown =()=>{
    const [backgroundC,setBackground]=useState("red");   
    const handleSelector=(e)=>{
    setBackground(e.target.value);
   
   }
   return(
    
<div style={{
    backgroundColor:backgroundC,
}}>
<h1>DropDown Chooser</h1>
<select value={backgroundC}  onChange={handleSelector}
style={{
    width:200 
}}>
    {
    Rangs.map((rang) =>{
        return(
            <option value ={rang}>{rang}</option>
        )})}
    




</select>
<div>
    <label>green
        <input
        type="radio"
        value="green"
        checked={backgroundC==="green"}
        onChange={handleSelector}/>
    </label>
    <label>Blue
        <input
        type="radio"
        value="blue"
        checked={backgroundC==="blue"}
        onChange={handleSelector}/>
    </label>
    <label>green
        <input
        type="radio"
        value="red"
        checked={backgroundC==="red"}
        onChange={handleSelector}/>
    </label>

</div>

</div>
    );
}
