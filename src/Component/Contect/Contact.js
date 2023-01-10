import "./Contact.css"
import bahmed from "../../img/bahmed.jpg";
import {BsFacebook, BsGithub, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {SiGmail} from "react-icons/si";


export default function Contact({re}) {


    return (
        <div className="contact" id="contact" ref={re}>
            <Background/>
            <div>
                <img src={bahmed} className='image' alt={"my-img"}/></div>

            <p>you can find me in :</p>
            <div className="socialMedia">
               <Link link="https://www.facebook.com/Bahmed.Beny/"><BsFacebook className="facebook socialIcon"/></Link>
                <Link link="https://twitter.com/BahmedBenyammi"><BsTwitter className="twitter socialIcon"/></Link>
                <Link link="https://wa.me/213673928497"><BsWhatsapp className="whatsapp socialIcon"/></Link>
                <Link link="https://www.linkedin.com/in/bahmed-benyammi-336a381a4/"><AiFillLinkedin
                    className="linkein socialIcon"/></Link>
                <Link link="https://www.fiverr.com/bahmedbenyammi">
                    <div className="socialIcon">
                        <FiverrIcon/></div>
                </Link>
                <Link link="https://github.com/bahmedBenyammi"><BsGithub
                    className="github socialIcon"></BsGithub></Link>
            </div>
            <p>Or</p>
            <div>
               <Link link="mailto:benyammibahmed@gmail.com"><button className="emailButton"><SiGmail className="socialIcon email"></SiGmail>send me a email</button></Link>
            </div>

        </div>
    )
}

function Link({link, children}) {
    return <a href={link} rel="noreferrer" target="_blank">{children}</a>
}

function FiverrIcon() {
    return      <div className="socialIcon"><svg enable-background="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512">
        <circle cx="256" cy="256" fill="#00B22D" id="ellipse" r="256"/>
        <path fill="#fff"
              d="M297,137c0,17,13.8,30.8,31,30.8c17,0,30.8-13.8,30.8-30.8c0-17.2-13.8-31-30.8-31  C310.8,106,297,119.8,297,137L297,137z M223.5,111.1c-40,0-65.9,23.8-71,48.2c-0.5,2.9-1,5.8-1,8.7v22.8h-26.9v45.3h26.9v103h-26.9  V386c39,0,78.1,0,117.1,0v-46.8h-27.2v-103h81.9v103h-26.4V386c39,0,78.3,0,117.3,0v-46.8h-27.9V190.8h-145v-13.6  c0-11.2,10.9-17.9,20.1-17.9h22.5v-48.2H223.5z"
              id="logo"/>
    </svg></div>
}

function Background(){
    return<div className="ContactBackground">
      <div className="b-top"> <svg
             viewBox="0 0 1860.58 1059.28">
            <defs>

                <clipPath id="clip-path">
                    <path className="cls-1b"
                          d="M0,565.21c593.15,494.07,771.05,112.56,1041.44-137.8,113.13-104.74,304.82-195.32,678-196.65,102-.36,141.1-144.39,105.9-230.76H0Z"/>
                </clipPath>
                <linearGradient id="linear-gradient" x1="187.61" y1="875.74" x2="1648.41" y2="194.97"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#0067af"/>
                    <stop offset="1" stop-color="#f856ea"/>
                </linearGradient>
            </defs>
            <title>whiteAsset 3</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g className="cls-2b">
                        <rect className="cls-3b" width="1860.58" height="1059.28"/>
                    </g>
                </g>
            </g>
        </svg></div>
        <div className="b-down">
        <svg viewBox="0 0 2135.16 1780.67">
            <defs>
                <clipPath id="clip-path" transform="translate(168.65 62.3)">
                    <path className="cls-1b"
                          d="M1554.85,306.6c-60.36,368.91-295.07,731.11-617,778.06s-1106.53,86.91-905.34,633.7h1934V4.77S1615.2-62.3,1554.85,306.6"/>
                </clipPath>
                <linearGradient id="linear-gradient" x1="452.8" y1="136.89" x2="2069.54" y2="2118.28"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#0067af"/>
                    <stop offset="1" stop-color="#f856ea"/>
                </linearGradient>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g className="cls-2b">
                        <rect className="cls-3b" width="2135.16" height="1780.67"/>
                    </g>
                </g>
            </g>
        </svg></div>
    </div>
}