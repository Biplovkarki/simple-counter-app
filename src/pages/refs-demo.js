import {useRef, useState} from "react"

export default function RefsDemo(){
    const inputRef=useState();
    const handleClick=()=>{
        inputRef.current.focus();
    }
    return(
        
        <div>
            <h1>Refs Demo</h1>
            <input
            ref={inputRef}
            type="string"
            />
            <button
               onClick={handleClick}
               >
                focus input
               </button>
        </div>
    )
}