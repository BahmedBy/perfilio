
import "./Contect.css"
import bahmed from "../../img/bahmed.jpg";
import {BsFacebook, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {SiFiverr} from "react-icons/si";

export default function Contect(){



    return (
        <div className="contect">
            <div>
                <img src={bahmed} className='myPhoto' alt={"my-img"}/>     </div>

                <p>you can find me in :</p>
                <div className="socialMedia">
                 <BsFacebook/>
                 <BsTwitter/>
                 <BsWhatsapp/>
                 <AiFillLinkedin/>
                 <SiFiverr/>
                </div>
                <p>Or</p>
                <div>
                    <button>send me mail</button>
                </div>

        </div>
    )
}
