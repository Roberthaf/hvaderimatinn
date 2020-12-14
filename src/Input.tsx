import React,{useState} from 'react';


export default function InputField(){
    const [value, setValue] = useState("");
    
    function handleChange(event: any){
        setValue(event.target.value as string)
    };
    
    return(
        <div>
            <label>Nafn</label>
            <input 
            value={value}
            onChange={handleChange}
            />
        </div>
    )
} 