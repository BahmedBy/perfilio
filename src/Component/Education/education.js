import {useState} from "react";

export default function Education () {
    return  (<div>
       <Degree/>
        <Certaficat/>
    </div>)
}
function Degree(){
    <div>
        <div>
            <p className="section_title">Education</p>
        </div>
        <div>
            <title>tile</title>
            <span>date</span>
            <span>university</span>
        </div>
    </div>
}
function Certaficat(){

    return(
        <div>
            <div>
                <p className="section_title">Project</p>
            </div>
            <div>
                <title>tile</title>
                <span>date</span>
            </div>
        </div>
    )
}