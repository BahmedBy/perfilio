import {Component, useEffect} from "react";
import './project.css'
import {collection, query, orderBy, startAfter, limit, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {FaRegArrowAltCircleDown} from "react-icons/fa";
import {TfiReload} from "react-icons/tfi";

export  default class Projects extends Component{
    constructor(props) {
        super(props);
        this.state={
            status:"wait",
            project:[],
            spin:false,
            total:0,
            ref:props.re
        }
    }
     componentDidMount() {
        this.countProject()
        this.getProject()
     }
     countProject=async ()=>{
         let projectCollection=collection(db,"projects")
        let c=(await getDocs(projectCollection)).size
     this.setState({total:c})
     }

    getProject=async ()=>{
        let projects=this.state.project
        let projectCollection=collection(db,"projects")
        let q

        if (projects.length===0)
            q=query(projectCollection,orderBy("date","desc"),limit(3))
        else
            q=query(projectCollection,orderBy("date","desc"),startAfter(projects[projects.length-1].date),limit(3))

        getDocs(q).then(doc=>{

           let p= doc.docs.map(pr=>{

               return pr.data()})
            this.setState({project:[...projects,...p],status:"",spin:false})
        })

    }
    loadMore=()=>{
        this.getProject()
        this.setState({ spin:true})
    }

    render() {
        const {project,status,spin,total}=this.state;

        return(<div className='section' ref={this.state.ref}>
            <div>
                <p className="section_title titls">My projects</p>
            </div>
            <div className='projects'>
                {status!=="wait"&&project.map((p)=>{
                    return <Project project={p} key={p.title}></Project>
                })}
            </div>
            {total>project.length&& <div className="flex load">
            <div onClick={this.loadMore} className="loadMore">
                <p>Load more</p>
                {spin ?
                <TfiReload className={"loadicon spin"} />: <FaRegArrowAltCircleDown className={"loadicon"} />}</div>

            </div>}

        </div>)
    }
}
function Project({project}){

    const getDate=(date)=>{
        let d=date.toDate()
        return (d.getMonth()+1) +"/"+d.getFullYear()
    }
    useEffect(()=>{
        },[project])
    return <div className='project' >
            <p className='projectTitle'>{project.title}</p>
            <p className='certaficat-date'>{getDate(project.date)}</p>
            <p className="project-description">{project.description} </p>
            <div className="flex gap-10">
                {project.demo!==undefined&& project.demo!==''&&<a href={project.demo}> <button className='btn btn-demo'>Demo</button></a>}
                {project.code!==undefined&& project.code!==''&&  <a href={project.code}>
                    <button className='btn btn-code'>Code</button></a>}
            </div>
        </div>


}