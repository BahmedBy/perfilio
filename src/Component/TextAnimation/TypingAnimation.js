import {useState} from "react";

export default function TypeText(){
const[text,setText]=useState('');

return(
    <div>
        <span className='blink'></span>
    </div>
)
}