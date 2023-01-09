import {useEffect, useState} from "react";
import "./TextAnimation.css"

export default function TypingText({text, className,order=0 , handleFinish ,waitFor=0}) {
    const [position, setPosition] = useState(0);
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
       console.log(text,order)
        let b=displayed.length !== text.length
        if (order!==waitFor)
            return;
        if (b)
            setTimeout(() => {
                let c = text.charAt(position)
                if (c === '\\'&&text.charAt(position+1)==='n') {
                    setDisplayed(displayed + '\n')
                    setPosition(position +2)
                }
                else {
                setDisplayed(displayed + text.charAt(position))
                setPosition(position + 1)}
            }, 200)
        else
        {

            console.log(text,order!==waitFor,order)
            if (handleFinish!==undefined)
                handleFinish(order)
        }
    }, [position,waitFor])
    // const endTag = (p) => {
    //     for (let i = p; i < text.length; i++) {
    //         let c = text.charAt(i)
    //         if (c === '>')
    //             return i
    //     }
    // }
   const classCss=displayed.length === text.length||order!==waitFor?className :"blink "+className
    const replaceWithBr=()=> {
        return displayed.replace(/\n/g, "<br />")
    }
    return (
            <p className={classCss} dangerouslySetInnerHTML={{__html: replaceWithBr()}}></p>
    )
}