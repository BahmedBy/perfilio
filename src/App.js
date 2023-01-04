import './App.css';
import Navbar from "./Component/Navbar/navbar";
import About from "./Component/About/about";
import Projects from "./Component/Projects/Project";
import Skills from "./Component/Skills/Skills";
import Contact from "./Component/Contect/Contact";
import Education from "./Component/Education/education";
import {useRef} from "react";

function App() {
    const about=useRef(null)
    const project=useRef(null)
    const education=useRef(null)
    const skills=useRef(null)
    const contact=useRef(null)
    const links=[{name : 'About ', link:about},
        {name : 'Projects', link:project},
        {name : 'Education', link:education},
        {name : 'Skills', link:skills},
        {name : 'Contact', link:contact}

    ]
    return (

        <div>
            <Navbar links={links}/>
            <div className='itemes'>
                <About re={about}/>
                <Projects re={project}/>
                <Education re={education}/>
                <Skills re={skills}/>
                <Contact re={contact}/>
            </div>
        </div>

    );
}

export default App;
