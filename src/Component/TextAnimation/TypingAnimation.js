import {useEffect, useState} from "react";
import "./TextAnimation.css"

export default function TypingText({text, className}) {
    const [position, setPosition] = useState(0);
    const [displayed, setDisplayed] = useState('')
    useEffect(() => {
        if (displayed.length !== text.length)
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
    }, [position])
    // const endTag = (p) => {
    //     for (let i = p; i < text.length; i++) {
    //         let c = text.charAt(i)
    //         if (c === '>')
    //             return i
    //     }
    // }
    const replaceWithBr=()=> {
        return displayed.replace(/\n/g, "<br />")
    }
    return (
            <p className={'blink '+className} dangerouslySetInnerHTML={{__html: replaceWithBr()}}></p>
    )
}