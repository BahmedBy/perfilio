import './Navbar.css'

import {useEffect, useRef, useState} from "react";
export  default function Navbar({links}){
    const [active,setActive]=useState(0)
    const [stop,setStop]=useState(false)
    const[show,setShow]=useState(false)
    const ul=useRef(null)
   const closeNav=()=>{
        ul.current.classList.add('out');
        setTimeout(()=>{
            setShow(false)
            ul.current.classList.remove('out');
        },900)
   }
    useEffect(()=>{
        if (!stop)
            window.addEventListener("scroll", handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[active,stop])
    const handleScroll=()=>{
    let p =window.scrollY+62
    let elementp=links[active].link.current.offsetTop
        if (p<elementp&&active>0)
            setActive(active-1)
        if (active<links.length-1)
        {
            let nextElementP=links[active+1].link.current.offsetTop

            if (p>=nextElementP)
            setActive(prevState => prevState+1)


        }
    }
    const isActive=(index)=>{return index===active}
    const scrollTo=(possition,index)=>{
        closeNav()
        window.removeEventListener("scroll",handleScroll)
        setActive(index)
        setStop(true)
        let p=possition.current.offsetTop-62
        window.scrollTo({top:p,behavior:"smooth"})

        awiatForScroll(p)

    }
    const showNav=show?" display":" "
    const awiatForScroll=(possiton)=>{
        let lastP=-1
        const awiat=()=>{

            console.log(window.scrollY===lastP)
           let b=window.scrollY===possiton||window.scrollY===0
            if(window.scrollY<possiton)
                b=b||window.scrollY<lastP
            if (b)
            {
                window.removeEventListener("scroll",awiat)
                setStop(false)
            }
            lastP=window.scrollY
        }
        window.addEventListener("scroll",awiat)
    }
    return(

        <div className="nav">

                <div className='nav-flex'>
                    <p className='name'>Bahmed Benyammi</p>
                </div>
            <nav className={showNav}>

                <ul className='nav-flex' ref={ul}>
                    <div className="closeNav"><button onClick={closeNav} >&#9747;</button></div>
                {links.map((p,index)=> {
                    return <li onClick={()=>scrollTo(p.link,index)} className={isActive(index)?"active":""} ><span>{p.name}</span></li>
                })}

            </ul>

            </nav>
            <div className="openNav"><button onClick={()=> setShow(true)}>&#9776;</button></div>
        </div>
    )
}