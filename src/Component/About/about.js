import bahmed from '../img/bahmed.jpg'
import '../Style/about.css'
function About(){
    return (<div className='container'>
        <div className='image-Container'>
            <div className='photoContanier'>
            <img src={bahmed} className='myPhoto'/></div>
        </div>
        <div>
            <div>
                <h3>Bahmed Benyammi</h3>
                <span>Software Developer</span>
                <p>Graduate looking for a job. Ready to use my skills and passion to advance the mission with a
                    company. Expert in software design and web development. Mobilizing experience with micro-service architecture, Spring Boot, Nodejs, reactjs, web development</p>
            </div>
        </div>
    </div>)
}
export default About;