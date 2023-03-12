import bahmed from '../../img/MyImgNobackground.png'
import './about.css'

import ParticlesCircle from "../Particles/Particles-Circle";
import TypingText from "../TextAnimation/TypingAnimation";
import {useState} from "react";


function About({re}) {
   const[order,setOrder]=useState(0)
    const handleFinish=(i)=>{
       if (i===order)
        setOrder( (pre)=>pre + 1)

    }
    return (
        <div className="body" ref={re}>
          <ParticlesCircle/>
            <div className='container'>
                <div className='image-Container'>
                    <div className='items'>
                        <div className="imgContainer">
                            <ImageBackground/>
                            <img src={bahmed} className='myPhoto' alt={"my-img"}/>
                        </div>
                       </div>
                </div>
                <div className="textContainer">

                        <TypingText text={"Hello,"} className={"text"}  handleFinish={handleFinish}/>

                        <TypingText text={"My name is "} className={"text"} waitFor={order} order={1} handleFinish={handleFinish}/>
                        <TypingText text={"Bahmed Benyammi"} className={"text aboutname"} waitFor={order} order={2} handleFinish={handleFinish}/>

                        <TypingText text={"I'm software engineer"} className={"text"} waitFor={order} order={3} handleFinish={handleFinish}/>
                </div>
            </div>

        </div>)
}
function ImageBackground(){
    return<div className="imageBackground">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.02 273.97">

            <title>whiteAsset 3</title>
            <g className="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-2"
                              d="M250.71,93.1C196.77,67.72,183.82,21.93,147.5,5.21c-35.61-16.39-69.74,6.27-78.29,62.38C59.5,131.35,19.8,149.12,2.57,197.12c-7.25,20.19.62,56.54,26.17,64.14,33.55,10,62.06-21.44,101.1-34.91,35-12.1,86-9.26,119.64-14.66,33-5.29,46.46-22.62,60.08-43.13C323,148.34,306.84,119.5,250.71,93.1Z"/>
                        <path className="cls-3"
                              d="M281.56,24.56c28.2,30.2-20,97.49-21.18,122.12-2.27,48.33,33.95,113.65-23.14,106.86-26.41-3.14-66.12-16.35-86.85-18.8-41.87-5-84.74,59.54-117.33,32.64S27,194.07,25.13,154.69c-1.23-26.1-16-48.14-21.51-72.88C-.19,64.79,11.4,43.36,32.41,45,162.53,55.24,233.74-26.68,281.56,24.56Z"/>
                    </g>
                </g>
            </g>
        </svg>
    </div>
}
export default About;