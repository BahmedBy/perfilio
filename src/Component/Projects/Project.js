import {Component} from "react";
import '../Style/index.css'
import '../Style/project.css'
export  default class Projects extends Component{
    constructor() {
        super();
    }
    render() {
        return(<div>
            <div>
                <p className="section_title">Project</p>
            </div>
            <div className='projects'>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>)
    }
}
function Project(props){
    return(
        <div className='project'>
            <p>Title</p>
            <p>description</p>
            <p>read more >></p>
        </div>
    )

}