import bahmed from '../../img/bahmed.jpg'
import './about.css'

import ParticlesCircle from "../Particles/Particles-Circle";
import TypingText from "../TextAnimation/TypingAnimation";


function About({re}) {
   console.log(re)
    return (
        <div className="body" ref={re}>
          <ParticlesCircle/>
            <div className='container'>
                <div className='image-Container'>
                    <div className='items'>
                        <img src={bahmed} className='myPhoto' alt={"my-img"}/></div>
                </div>
                <div className="items">

                        <TypingText text={"Hello, \n My name is Bahmed Benyammi \n I'm software engineer"} className={"text"}/>
                </div>
            </div>

        </div>)
}

export default About;