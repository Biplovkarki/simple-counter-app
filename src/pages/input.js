import { setConfig } from "next/config";
import { useState } from "react";
const Gender=["male","Female","Others"];
export default function InputTypes(){
 const [formData,setformData]=useState({
    name:"",
    password:"",
    PhoneNumber:"",
    Dob:"",
    isSubscription:false,
    Gender:"",
    color:"",
 });

 const handleChangeName=(e)=>{
    const newName=e.target.value;
    setformData({...formData,name:newName});
 };
 const handleChangePassword=(e)=>{
    const newpassword=e.target.value;
    setformData({...formData,password:newpassword})
 }
 const handleChangeNumber=(e)=>{
    const newPhone=e.target.value;
    setformData({...formData,PhoneNumber:newPhone})
 }
 const handleChangeDate=(e)=>{
    const newDate=e.target.value;
    setformData({...formData,Dob:newDate})
 }

 const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData);
 }
 const handlechangedGender=(e)=>{
   const checkedGender =e.target.value;
   setformData({...formData,Gender:checkedGender})
 }
const handleColorpicker=(e)=>{
   const selectedcolor= e.target.value;
   setformData({...formData,color:selectedcolor})
}

 return(<div>
    <h1>
        Creating form using Reach Js
    </h1>
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
        <label>
            Name:
            <input type="text" value={formData.name}
            onChange={handleChangeName} />
        </label><br/>
        <label>
            Password:
            <input type="password" value={formData.password}
            onChange={handleChangePassword} />
        </label><br/>
        <label>
            PhoneNumber:
            <input type="number" value={formData.PhoneNumber}
            onChange={handleChangeNumber} />
        </label>
        <label>
            Date of Birth:
            <input type="date" value={formData.Dob}
            onChange={handleChangeDate} />
        </label>
        <br/>

        <label>
         Subcribre
         <input type="checkbox" 
        
         value={formData.isSubscription}
            onChange={(e)=>{
              setformData({
               ...formData,isSubscription:!formData.isSubscription
              })
            } }/>
        </label>
        <br/> 
        <label>Gender:
        
         {
            Gender.map((x)=>{
               return(
                  <label>

                  <input
                      value={x}
                      type="radio"

                      checked={formData.Gender === x}
                      onChange={handlechangedGender}
                  />
                  {x} 
                  </label>
               )
            })

         }
        </label>
        <br/> 
        <label>
         ColorPicker
         <input type="color" vaule={formData.color} onChange={handleColorpicker}/>

        </label>
        <br/>
        <label>
         Image:
         <input type="image" src="monkey.jfif" alt="monkey" width="48" height="48"/>
        </label>

        
        <button type="submit">submit</button>
    </form>
    <h1>{formData.name}</h1>
 </div>)
}